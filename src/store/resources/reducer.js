import { SAVE_RESOURCE, DELETE_RESOURCE, SET_RESOURCES } from "./actions";

const initState = {};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_RESOURCES: {
      return { ...state, ...payload.resources };
    }

    case SAVE_RESOURCE: {
      const { id } = payload;

      const resource = {
        ...payload.resource,
        type: payload.type,
        dateModified: payload.date,
        deleted: false
      };

      return { ...state, [id]: resource };
    }

    case DELETE_RESOURCE: {
      const { id } = payload;

      const resource = {
        ...state[id],
        dateModified: payload.date,
        deleted: true
      };

      return { ...state, [id]: resource };
    }

    default:
      return state;
  }
};

export default reducer;
