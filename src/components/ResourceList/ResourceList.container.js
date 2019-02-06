import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import ResourceList from "./ResourceList";
import { selectResources } from "../../store/resources/selectors";
import resourcesNavItems from "../../config/resourcesNavItems";
import resourceItems from "../../config/resourceItems";

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

const mapStateToProps = (state, props) => {
  let type = null;

  if (props.location) {
    const parts = props.location.pathname.split("/");
    const lastPath = parts[parts.length - 1];
    type = resourceItems.find(({ type }) => type === lastPath) || null;
    type = type ? type.type : null;
  }

  const resources = selectResources(type, state.resources);

  return { resources, title: getTitle(props) };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ResourceList);
