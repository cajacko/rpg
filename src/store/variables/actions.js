export const SET_VAR_TITLE = "SET_VAR_TITLE";
export const SET_VAR_VALUE = "SET_VAR_VALUE";
export const DELETE_VAR = "DELETE_VAR";

export const setVarTitle = (index, title) => ({
  type: SET_VAR_TITLE,
  payload: {
    index,
    title
  }
});

export const setVarValue = (index, value) => ({
  type: SET_VAR_VALUE,
  payload: {
    index,
    value
  }
});

export const deleteVar = index => ({
  type: DELETE_VAR,
  payload: {
    index
  }
});
