import { connect } from "react-redux";
import Character from "./Character";

const mapStateToProps = ({ resources }, { id }) => resources[id];

export default connect(mapStateToProps)(Character);
