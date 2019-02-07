import Character from "../components/Character";
import CharacterRender from "../components/Character/Character";
import Ability from "../components/Ability";
import AbilityRender from "../components/Ability/Ability";
import Item from "../components/Item";
import ItemRender from "../components/Item/Item";
import Skill from "../components/Skill";
import SkillRender from "../components/Skill/Skill";
import Monster from "../components/Monster";
import MonsterRender from "../components/Monster/Monster";
import RollTable from "../components/RollTable";
import RollTableRender from "../components/RollTable/RollTable";

const getResourceFromType = (type, render) => {
  switch (type) {
    case "character":
      return render ? CharacterRender : Character;
    case "ability":
      return render ? AbilityRender : Ability;
    case "item":
      return render ? ItemRender : Item;
    case "skill":
      return render ? SkillRender : Skill;
    case "monster":
      return render ? MonsterRender : Monster;
    case "rolltable":
      return render ? RollTableRender : RollTable;
    default:
      throw new Error(`No resource for type ${type}`);
  }
};

export default getResourceFromType;
