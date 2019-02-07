import { connect } from "react-redux";
import Monster from "./Monster";

const mapStateToProps = ({ resources }, { id }) => resources[id];

export default connect(mapStateToProps)(Monster);
