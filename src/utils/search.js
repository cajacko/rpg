import { store } from "../store";
import { LOG_SEARCH } from "../config/env";
import searchFieldsByType from "../config/searchFieldsByType";

let searchId = 0;
let cancelled = [];

let cache = {};

export const resetCache = () => {
  cache = {};
};

const search = (availableResources, search, callback) => {
  if (LOG_SEARCH) console.log("search -> init");
  const thisSearchId = searchId;
  searchId += 1;
  const storeResources = store.getState().resources;

  const resources =
    (cache[availableResources] && cache[availableResources][search]) || null;

  if (!resources) {
    if (LOG_SEARCH) console.log("search -> new search");

    setTimeout(() => {
      try {
        const newResources = availableResources.filter(id => {
          if (cancelled.includes(thisSearchId)) {
            throw new Error("Cancel search");
          }

          const resource = storeResources[id];

          if (!resource) return false;
          if (typeof resource !== "object") return false;

          const searchFields = searchFieldsByType[resource.type];

          if (!searchFields) return false;

          return searchFields.some(field => {
            const val = resource[field];

            if (!val) return false;
            return val.toLowerCase().includes(search.toLowerCase());
          });
        });

        if (!cache[availableResources]) cache[availableResources] = {};
        cache[availableResources][search] = newResources;

        if (cancelled.includes(thisSearchId)) throw new Error("Cancel search");

        callback(newResources);

        if (LOG_SEARCH) console.log("search -> filtered");
      } catch (e) {
        if (LOG_SEARCH) console.log("search -> cancelled");
      }
    }, 0);
  } else {
    if (LOG_SEARCH) console.log("search -> got from cache");
  }

  if (LOG_SEARCH) console.log("search -> after");

  return {
    resources,
    cancel: () => {
      cancelled.push(thisSearchId);
    }
  };
};

export default search;
