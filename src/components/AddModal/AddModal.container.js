import { connect } from "react-redux";
import AddModal from "./AddModal";
import { saveResource } from "../../store/resources/actions";

const mapStateToProps = ({ resources }, { id }) => {
  const defaultProps = { initState: {} };

  if (!id) return defaultProps;

  const resource = resources[id];

  if (!resource) return defaultProps;

  return {
    initState: resource,
    type: resource.type
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: (id, type, state) => {
    const action = saveResource(id, type, state);
    dispatch(action);
    return action;
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModal);
