import Character from "../components/Character";
import CharacterRender from "../components/Character/Character";
import Ability from "../components/Ability";
import AbilityRender from "../components/Ability/Ability";
import Item from "../components/Item";
import ItemRender from "../components/Item/Item";
import Skill from "../components/Skill";
import SkillRender from "../components/Skill/Skill";

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
    default:
      throw new Error(`No resource for type ${type}`);
  }
};

export default getResourceFromType;
