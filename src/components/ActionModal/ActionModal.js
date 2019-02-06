import React, { useState } from "react";
import Modal from "../Modal";
import Select from "../Forms/Select";
import styled from "styled-components";
import sync from "../../utils/sync";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 300px;
`;

const Button = styled.button`
  display: flex;
  margin-top: 20px;
  padding: 10px 5px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 0;
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 5px;
`;

const ActionModal = ({
  onClose,
  onEdit,
  id,
  character,
  onRemove,
  onDelete,
  characters,
  onCopyToCharacter,
  onMoveToCharacter,
  type,
  toggleSkill
}) => {
  sync();

  const [characterState, setCharacterState] = useState(0);

  const showToggleAdvantage = typeof character === "number" && type === "skill";

  const characterSelect = (
    <Select
      value={characterState}
      onChange={setCharacterState}
      choices={characters.map(({ name }, i) => ({
        value: i,
        text: name
      }))}
    />
  );

  return (
    <Modal onClose={onClose}>
      <Container>
        <Button onClick={() => onEdit(id)}>Edit</Button>
        <Button onClick={onDelete}>Delete everywhere</Button>

        {character !== undefined && (
          <Button
            onClick={() => {
              onRemove(characterState, type);
              onClose();
            }}
          >
            Remove from here
          </Button>
        )}

        {showToggleAdvantage && (
          <Button onClick={toggleSkill}>Toggle Skill</Button>
        )}

        <Section>
          <Label>Copy to Character</Label>
          {characterSelect}
          <Button
            onClick={() => {
              onCopyToCharacter(characterState, type);
              onClose();
            }}
          >
            Copy
          </Button>
        </Section>

        {character !== undefined && (
          <Section>
            <Label>Move to Character</Label>
            {characterSelect}
            <Button
              onClick={() => {
                onMoveToCharacter(characterState, type);
                onClose();
              }}
            >
              Move
            </Button>
          </Section>
        )}
      </Container>
    </Modal>
  );
};

export default ActionModal;
