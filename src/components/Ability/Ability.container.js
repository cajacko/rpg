import { connect } from "react-redux";
import Ability from "./Ability";

const mapStateToProps = ({ resources }, { id }) => resources[id];

export default connect(mapStateToProps)(Ability);
