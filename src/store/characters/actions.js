export const COPY_TO_CHARACTER = "COPY_TO_CHARACTER";
export const MOVE_TO_CHARACTER = "MOVE_TO_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const SET_CHARACTER_NAME = "SET_CHARACTER_NAME";
export const REMOVE_CHARACTER_RESOURCE = "REMOVE_CHARACTER_RESOURCE";
export const TOGGLE_CHARACTER_SKILL = "TOGGLE_CHARACTER_SKILL";

export const copyCardToCharacter = (character, resourceId, resourceType) => ({
  type: COPY_TO_CHARACTER,
  payload: {
    character,
    resourceId,
    type: resourceType
  }
});

export const moveCardToCharacter = (
  originalCharacter,
  newCharacter,
  resourceId,
  resourceType
) => ({
  type: MOVE_TO_CHARACTER,
  payload: {
    originalCharacter,
    newCharacter,
    resourceId,
    type: resourceType
  }
});

export const deleteCharacter = character => ({
  type: DELETE_CHARACTER,
  payload: {
    character
  }
});

export const setCharacterName = (character, name) => ({
  type: SET_CHARACTER_NAME,
  payload: {
    character,
    name
  }
});

export const removeResource = (character, type, resourceId) => ({
  type: REMOVE_CHARACTER_RESOURCE,
  payload: {
    character,
    type,
    resourceId
  }
});

export const toggleSkill = (character, resourceId) => ({
  type: TOGGLE_CHARACTER_SKILL,
  payload: {
    character,
    resourceId
  }
});
