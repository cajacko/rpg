import React from "react";
import styled from "styled-components";
import Modal from "../Modal";
import getResourceFromType from "../../utils/getResourceFromType";
import useEditResource from "../../utils/useEditResource";
import resourceItems from "../../config/resourceItems";

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  min-width: 400px;
`;

const InputGroup = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  width: 100px;
`;

const Input = styled.div`
  display: flex;
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const AddModal = ({
  type,
  onClose,
  onSave,
  showActionModal,
  initState,
  id
}) => {
  const Resource = getResourceFromType(type, true);
  const [state, editComponents] = useEditResource(type, initState);

  const title = resourceItems.find(resource => resource.type === type).text;

  return (
    <Modal onClose={onClose}>
      <Container>
        <Title>New {title}</Title>
        <Preview>
          <Resource baseSize={10} {...state} />
        </Preview>
        <Form>
          {editComponents.map(({ Component, key, label, props }) => (
            <InputGroup key={key}>
              <Label>{label}</Label>
              <Input>
                <Component {...props} />
              </Input>
            </InputGroup>
          ))}
        </Form>
        <Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              const action = onSave(id, type, state);

              if (showActionModal) {
                showActionModal(action.payload.id);
              } else {
                onClose();
              }
            }}
          >
            Save
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default AddModal;
