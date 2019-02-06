import { connect } from "react-redux";
import ActionModal from "./ActionModal";
import { deleteResource } from "../../store/resources/actions";
import {
  copyCardToCharacter,
  moveCardToCharacter,
  removeResource,
  toggleSkill
} from "../../store/characters/actions";

const mapStateToProps = ({ characters, resources }, { id }) => {
  const resource = resources[id];

  if (!resource) throw new Error("No resource to do an action on");

  return {
    characters,
    type: resource.type
  };
};

const mapDispatchToProps = (dispatch, { id, character }) => ({
  onRemove: (newCharacter, type) =>
    dispatch(removeResource(newCharacter, type, id)),
  onDelete: (type, state) => dispatch(deleteResource(id)),
  onCopyToCharacter: (newCharacter, type) =>
    dispatch(copyCardToCharacter(newCharacter, id, type)),
  onMoveToCharacter: (newCharacter, type) =>
    dispatch(moveCardToCharacter(character, newCharacter, id, type)),
  toggleSkill: () => dispatch(toggleSkill(character, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionModal);
