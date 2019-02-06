import cloneDeep from "lodash/cloneDeep";
import api from "./api";
import { store } from "../store";
import { setResources } from "../store/resources/actions";
import { PAUSE_SYNC, LOG_SYNC } from "../config/env";

let nextSync = null;
let currentSync = null;

const mergeData = (serverData, storeData) => {
  const mergedData = cloneDeep(storeData);
  let hasNewFromServer = false;
  let hasNewFromStore = false;

  // Check if the server resources are new/modified
  Object.keys(serverData).forEach(id => {
    const serverResource = serverData[id];
    const storeResource = storeData[id];

    if (storeResource) {
      // The server resource exists in the store

      if (storeResource.dateModified === serverResource.dateModified) {
        // The server resource and store resource are the same
        return;
      } else if (storeResource.dateModified > serverResource.dateModified) {
        // The store resource is newer than the server one
        hasNewFromStore = true;
        mergedData[id] = storeResource;
      } else {
        // The server resource is newer than the store one
        hasNewFromServer = true;
        mergedData[id] = serverResource;
      }
    } else {
      // The server resource is new and does not exist in the store
      hasNewFromServer = true;
      mergedData[id] = serverResource;
    }
  });

  if (!hasNewFromStore) {
    // Check if there are any new store resources not on the server
    Object.keys(storeData).forEach(id => {
      const serverResource = serverData[id];

      if (!serverResource) {
        // The store resource does not exist on the server
        hasNewFromStore = true;
        // We do not need to add anything here, as we cloned the store data into the mergedData
      }
    });
  }

  return {
    mergedData,
    hasNewFromServer,
    hasNewFromStore
  };
};

const sync = setFromStore => {
  const _sync = () => {
    const { resources } = store.getState();

    if (LOG_SYNC) console.log("action SYNC -> init");

    if (setFromStore) {
      if (LOG_SYNC) console.log("action SYNC -> set from store");
      return api
        .setAll(resources)
        .then(data => {
          if (LOG_SYNC) console.log("action SYNC -> success", resources);
          return resources;
        })
        .catch(e => {
          if (LOG_SYNC) console.log("action SYNC -> failed", e);
          throw e;
        });
    }

    return api
      .getAll()
      .then(data => {
        const { mergedData, hasNewFromServer, hasNewFromStore } = mergeData(
          data,
          resources
        );

        if (hasNewFromServer) {
          if (LOG_SYNC) console.log("action SYNC -> update store", mergedData);

          store.dispatch(setResources(mergedData));
        }

        if (hasNewFromStore) {
          if (LOG_SYNC) console.log("action SYNC -> update api", mergedData);

          return api.setAll(mergedData).then(() => mergedData);
        }

        return mergedData;
      })
      .then(data => {
        if (LOG_SYNC) console.log("action SYNC -> success", data);

        currentSync = null;

        return data;
      })
      .catch(e => {
        if (LOG_SYNC) console.log("action SYNC -> failed", e);

        throw e;
      });
  };

  currentSync = _sync();

  return currentSync;
};

const addSync = (setFromStore, overridePause) => {
  if (!overridePause && PAUSE_SYNC) return Promise.resolve();

  if (!currentSync) return sync(setFromStore);

  if (!nextSync) {
    nextSync = currentSync.catch(() => null).then(() => sync(setFromStore));
  }

  return nextSync;
};

setInterval(() => {
  if (PAUSE_SYNC) return;
  addSync();
}, 10000);

export default addSync;
