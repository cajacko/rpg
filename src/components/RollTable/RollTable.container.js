import { connect } from "react-redux";
import Item from "./RollTable";

const mapStateToProps = ({ resources }, { id }) => resources[id];

export default connect(mapStateToProps)(Item);
