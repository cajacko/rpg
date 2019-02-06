import { connect } from "react-redux";
import Characters from "./Characters";
import {
  deleteCharacter,
  setCharacterName
} from "../../store/characters/actions";

const mapStateToProps = ({ characters, resources }) => ({
  characters: characters.map(character => ({
    ...character,
    lists: Object.keys(character.lists).reduce(
      (acc, listKey) => ({
        ...acc,
        [listKey]: character.lists[listKey].filter(
          id => !!resources[id] && !resources[id].deleted
        )
      }),
      {}
    )
  }))
});

const mapDispatchToProps = dispatch => ({
  onDelete: character => dispatch(deleteCharacter(character)),
  onNameChange: character => text => dispatch(setCharacterName(character, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
