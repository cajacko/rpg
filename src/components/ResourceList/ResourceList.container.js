import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import ResourceList from "./ResourceList";
import {
  selectResources,
  sortResources
} from "../../store/resources/selectors";
import resourcesNavItems from "../../config/resourcesNavItems";
import resourceItems from "../../config/resourceItems";
import { addRandResource } from "../../store/characters/actions";

const getTitle = props => {
  if (props.location) {
    const item = resourcesNavItems.find(
      ({ route }) => route === props.location.pathname
    );

    if (!item) return "Search";

    return item.text;
  }

  return "Search";
};

const getType = props => {
  let type = null;

  if (props.location) {
    const parts = props.location.pathname.split("/");
    const lastPath = parts[parts.length - 1];
    type = resourceItems.find(({ type }) => type === lastPath) || null;
    type = type ? type.type : null;
  } else if (props.title) {
    type = resourceItems.find(item => item.text === props.title) || null;

    type = type ? type.type : null;
  }

  return type;
};

const mapStateToProps = (state, props) => ({
  resources:
    props.resources ||
    sortResources(
      state.resources,
      selectResources(getType(props), state.resources)
    ),
  title: props.title || getTitle(props)
});

const mapDispatchToProps = (dispatch, props) => ({
  addRand: () =>
    dispatch(addRandResource(props.character, props.type || getType(props)))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ResourceList);
