import ResourcesScene from "../scenes/Resources";
import Characters from "../scenes/Characters";
import Resources from "../components/Resources";
import ResourceList from "../components/ResourceList";
import resourcesNavItems from "./resourcesNavItems";
import Variables from "../scenes/Variables";
import Roll from "../scenes/Roll";

export const mainRoutes = [
  { path: "/resources", component: ResourcesScene },
  { path: "/characters", component: Characters },
  { path: "/variables", component: Variables },
  { path: "/roll", component: Roll },
  { component: ResourcesScene }
];

export const resourcesRoutes = resourcesNavItems
  .map(({ route }) => ({ component: ResourceList, path: route }))
  .concat([{ component: Resources }]);
