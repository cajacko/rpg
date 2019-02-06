import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import Modals from "../components/Modals";

const buttonSize = 60;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.button`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border-radius: ${buttonSize}px;
  box-shadow: 3px 3px 6px #00000047;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid #e6e6e6;
  box-shadow: 3px 3px 6px #00000047;
`;

const ListButton = styled.button`
  background-color: white;
  padding: 15px 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListText = styled.span`
  font-size: 16px;
`;

const AddButton = ({ listItems }) => {
  const [show, setShow] = useState(false);
  const [typeProps, setTypeProps] = useState(null);

  const hide = () => setShow(false);

  return (
    <Container>
      {show && (
        <List>
          {listItems.map(({ text, type }) => (
            <ListButton
              key={text}
              onClick={() => {
                setTypeProps({ type });
                hide();
              }}
            >
              <ListText>{text}</ListText>
            </ListButton>
          ))}
        </List>
      )}

      <Button onClick={() => setShow(!show)}>
        <FontAwesomeIcon size="2x" icon={show ? icons.faTimes : icons.faPlus} />
      </Button>

      {typeProps && (
        <Modals
          type="add"
          modalProps={typeProps}
          onClose={() => setTypeProps(null)}
        />
      )}
    </Container>
  );
};

export default AddButton;
