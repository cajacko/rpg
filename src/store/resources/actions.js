import uuid from "uuid/v1";

export const SAVE_RESOURCE = "SAVE_RESOURCE";
export const DELETE_RESOURCE = "DELETE_RESOURCE";
export const SET_RESOURCES = "SET_RESOURCES";

export const SYNC_ACTIONS = [SAVE_RESOURCE, DELETE_RESOURCE];

export const CLEAR_SEARCH_CACHE_ACTIONS = [
  SAVE_RESOURCE,
  DELETE_RESOURCE,
  SET_RESOURCES
];

export const setResources = resources => ({
  type: SET_RESOURCES,
  payload: {
    resources
  }
});

export const saveResource = (id, type, resource) => ({
  type: SAVE_RESOURCE,
  payload: {
    type,
    id: id || uuid(),
    resource,
    date: new Date().getTime()
  }
});

export const deleteResource = id => ({
  type: DELETE_RESOURCE,
  payload: {
    id,
    date: new Date().getTime()
  }
});
