import * as ability from "./resources/ability";
import * as character from "./resources/character";
import * as item from "./resources/item";
import * as skill from "./resources/skill";
import * as monster from "./resources/monster";
import * as rolltable from "./resources/rolltable";

const searchFieldsByType = {
  ability: ability.searchFields,
  character: character.searchFields,
  item: item.searchFields,
  skill: skill.searchFields,
  monster: monster.searchFields,
  rolltable: rolltable.searchFields
};

export default searchFieldsByType;
