import { connect } from "react-redux";
import Item from "./Item";

const mapStateToProps = ({ resources }, { id }) => resources[id];

export default connect(mapStateToProps)(Item);
