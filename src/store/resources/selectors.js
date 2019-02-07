import { createSelector } from "reselect";

const selectAllResourceIDs = createSelector(
  resources => resources,
  resources =>
    Object.keys(resources).filter(
      id =>
        !!resources[id] &&
        typeof resources[id] === "object" &&
        !resources[id].deleted
    )
);

export const selectResourcesByType = createSelector(
  type => type,
  (type, resources) => resources,
  (type, resources) =>
    Object.keys(resources).filter(
      id => !resources[id].deleted && type === resources[id].type
    )
);

export const selectResources = (type, resources) => {
  return type
    ? selectResourcesByType(type, resources)
    : selectAllResourceIDs(resources);
};
