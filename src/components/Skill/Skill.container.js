import { connect } from "react-redux";
import Skill from "./Skill";

const mapStateToProps = ({ resources, characters }, { id, character }) => {
  if (typeof character !== "number") return resources[id];

  const characterProps = characters[character];

  if (!characterProps) return resources[id];

  const resourceProps = characterProps.resourceProps[id];

  if (!resourceProps) return resources[id];

  return { ...resources[id], ...resourceProps };
};

export default connect(mapStateToProps)(Skill);
