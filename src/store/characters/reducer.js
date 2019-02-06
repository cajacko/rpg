import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import {
  COPY_TO_CHARACTER,
  MOVE_TO_CHARACTER,
  SET_CHARACTER_NAME,
  DELETE_CHARACTER,
  REMOVE_CHARACTER_RESOURCE,
  TOGGLE_CHARACTER_SKILL
} from "./actions";

const newCharacter = {
  name: "New Character",
  resourceProps: {},
  lists: {
    character: [],
    skill: [],
    ability: [],
    item: []
  }
};

const initialState = [newCharacter];

const addResourceToCharacter = (state, index, type, resourceId) => {
  const newState = cloneDeep(state);

  const character = cloneDeep(newState[index] || newCharacter);

  if (!character.lists[type].includes(resourceId)) {
    character.lists[type].push(resourceId);
  }

  newState[index] = character;

  return newState;
};

const removeResourceFromCharacter = (state, index, type, resourceId) => {
  const newState = cloneDeep(state);

  const character = cloneDeep(newState[index] || newCharacter);

  if (character.lists[type].includes(resourceId)) {
    character.lists[type] = character.lists[type].filter(
      id => id !== resourceId
    );
  }

  newState[index] = character;

  return newState;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COPY_TO_CHARACTER: {
      return addResourceToCharacter(
        state,
        payload.character,
        payload.type,
        payload.resourceId
      );
    }

    case DELETE_CHARACTER: {
      let newState = cloneDeep(state);

      newState.splice(payload.character, 1);

      if (newState.length < 1) return initialState;

      return newState;
    }

    case SET_CHARACTER_NAME: {
      const newState = cloneDeep(state);

      const character = cloneDeep(newState[payload.character] || newCharacter);
      character.name = payload.name;

      newState[payload.character] = character;

      return newState;
    }

    case REMOVE_CHARACTER_RESOURCE: {
      return removeResourceFromCharacter(
        state,
        payload.character,
        payload.type,
        payload.resourceId
      );
    }

    case MOVE_TO_CHARACTER: {
      const newState = removeResourceFromCharacter(
        state,
        payload.originalCharacter,
        payload.type,
        payload.resourceId
      );

      return addResourceToCharacter(
        newState,
        payload.newCharacter,
        payload.type,
        payload.resourceId
      );
    }

    case TOGGLE_CHARACTER_SKILL: {
      const newState = cloneDeep(state);

      const character = cloneDeep(newState[payload.character] || newCharacter);

      const resourceProps = character.resourceProps[payload.resourceId] || {};

      resourceProps.disadvantage = !resourceProps.disadvantage;

      character.resourceProps[payload.resourceId] = resourceProps;

      newState[payload.character] = character;

      return newState;
    }

    default:
      return state;
  }
};

const ensureNewCharacter = (state, action) => {
  let newState = reducer(state, action);

  if (!newState.find(character => isEqual(character, newCharacter))) {
    newState = cloneDeep(newState);
    newState.push(newCharacter);
  }

  return newState;
};

export default ensureNewCharacter;
