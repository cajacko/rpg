import { useState } from "react";
import resources from "../config/resources";

const useEditResource = (type, initState) => {
  const props = resources[type];

  if (!props) throw new Error(`No props for type ${type}`);

  const initialState = Object.keys(props).reduce(
    (acc, key) =>
      Object.assign({}, acc, {
        [key]:
          typeof initState[key] === undefined
            ? props[key].defaultVal
            : initState[key]
      }),
    {}
  );

  const [state, setState] = useState(initialState);

  const components = Object.keys(props).map(key => ({
    Component: props[key].editComponent,
    key,
    label: props[key].label,
    props: {
      choices: props[key].choices,
      placeholder: props[key].placeholder,
      value: state[key] || "",
      onChange: val => setState({ ...state, [key]: val })
    }
  }));

  return [state, components];
};

export default useEditResource;
