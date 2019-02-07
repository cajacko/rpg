import * as ability from "./resources/ability";
import * as character from "./resources/character";
import * as item from "./resources/item";
import * as skill from "./resources/skill";
import * as monster from "./resources/monster";

const searchFieldsByType = {
  ability: ability.searchFields,
  character: character.searchFields,
  item: item.searchFields,
  skill: skill.searchFields,
  monster: monster.searchFields
};

export default searchFieldsByType;
