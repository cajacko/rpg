import React, { useState } from "react";
import styled from "styled-components";
import ResourceList from "../../components/ResourceList";
import TextInput from "../../components/Forms/TextInput";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #717171;
`;

const HeaderInner = styled.div`
  display: flex;
  flex: 1;
  max-width: 900px;
`;

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: scroll;
`;

const Inner = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 10px;
  appearance: none;
`;

const getCharacterIndexChange = (characters, currentIndex, next) => {
  let nextIndex = next ? currentIndex + 1 : currentIndex - 1;

  if (nextIndex < 0) {
    nextIndex = characters.length - 1;
  } else if (nextIndex > characters.length - 1) {
    nextIndex = 0;
  }

  return characters[nextIndex]
    ? nextIndex
    : getCharacterIndexChange(characters, nextIndex, next);
};

const Characters = ({ characters, onDelete, onNameChange }) => {
  const [character, setCharacter] = useState(0);

  const { name, lists } = characters[character];

  return (
    <Container>
      <Header>
        <HeaderInner>
          <Button
            onClick={() =>
              setCharacter(
                getCharacterIndexChange(characters, character, false)
              )
            }
          >
            Prev
          </Button>
          <TextInput
            placeholder="Set a name"
            value={name}
            onChange={onNameChange(character)}
          />
          <Button onClick={() => onDelete(character)}>Delete</Button>
          <Button
            onClick={() =>
              setCharacter(getCharacterIndexChange(characters, character, true))
            }
          >
            Next
          </Button>
        </HeaderInner>
      </Header>
      <List>
        <Inner>
          <ResourceList
            title="Characters"
            horizontal
            resources={lists.character}
            character={character}
            type="character"
          />
          <ResourceList
            title="Skills"
            horizontal
            resources={lists.skill}
            character={character}
            type="skill"
          />
          <ResourceList
            title="Abilities"
            horizontal
            resources={lists.ability}
            character={character}
            type="ability"
          />
          <ResourceList
            title="Items"
            horizontal
            resources={lists.item}
            character={character}
            type="item"
          />
          <ResourceList
            title="Monsters"
            horizontal
            resources={lists.monster}
            character={character}
            type="monster"
          />
          <ResourceList
            title="Roll Tables"
            horizontal
            resources={lists.rolltable}
            character={character}
            type="rolltable"
          />
        </Inner>
      </List>
    </Container>
  );
};

export default Characters;
