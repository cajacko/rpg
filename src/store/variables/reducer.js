import isEqual from "lodash/isEqual";
import cloneDeep from "lodash/cloneDeep";
import { SET_VAR_TITLE, SET_VAR_VALUE, DELETE_VAR } from "./actions";

const newVar = {
  title: "New Var",
  value: "Value"
};

const initState = [newVar];

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_VAR_TITLE: {
      const newState = cloneDeep(state);
      newState[payload.index].title = payload.title;
      return newState;
    }

    case SET_VAR_VALUE: {
      const newState = cloneDeep(state);
      newState[payload.index].value = payload.value;
      return newState;
    }

    case DELETE_VAR: {
      const newState = cloneDeep(state);
      newState.splice(payload.index, 1);
      return newState;
    }

    default:
      return state;
  }
};

const ensureNewVar = (state, action) => {
  const newState = reducer(state, action);

  if (!isEqual(newVar, newState[newState.length - 1])) {
    return newState.concat(newVar);
  }

  return newState;
};

export default ensureNewVar;
