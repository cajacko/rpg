import cloneDeep from "lodash/cloneDeep";
import { ADD_DICE, ROLL, REMOVE_DICE } from "./actions";

const initState = [null];

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_DICE: {
      return state.concat(null);
    }

    case REMOVE_DICE: {
      if (state.length === 1) return state;

      const newState = cloneDeep(state);
      newState.splice(newState.length - 1, 1);
      return newState;
    }

    case ROLL: {
      return payload;
    }

    default:
      return state;
  }
};

export default reducer;
