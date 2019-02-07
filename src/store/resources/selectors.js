import { createSelector } from "reselect";

export const sortResources = createSelector(
  resourcesByID => resourcesByID,
  (resourcesByID, resources) => resources,
  (resourcesByID, resources, sortBy) => sortBy || "lastModified",
  (resourcesByID, resources, sortBy) =>
    resources.sort((a, b) => {
      const resourceA = resourcesByID[a];
      const resourceB = resourcesByID[b];

      const aFirst = -1;
      const bFirst = -aFirst;

      if (!resourceA) return bFirst;
      if (!resourceB) return -aFirst;

      if (resourceA.dateModified > resourceB.dateModified) return aFirst;
      if (resourceB.dateModified > resourceA.dateModified) return bFirst;

      return 0;
    })
);

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
