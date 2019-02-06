import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextInput from "../components/Forms/TextInput";
import {
  setVarTitle,
  setVarValue,
  deleteVar
} from "../store/variables/actions";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;
  padding: 20px;
  overflow-x: scroll;
`;

const Inner = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Inner2 = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  width: 100%;
  flex-direction: column;
`;

const Variable = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Text = styled.div`
  display: flex;
  width: 120px;
`;

const Value = styled.div`
  display: flex;
  flex: 1;
`;

const Delete = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 20px;
`;

const mapStateToProps = ({ variables }) => ({ variables });

const mapDispatchToProps = dispatch => ({
  onTitleChange: i => val => dispatch(setVarTitle(i, val)),
  onValueChange: i => val => dispatch(setVarValue(i, val)),
  onDelete: i => () => dispatch(deleteVar(i))
});

const Variables = ({ variables, onTitleChange, onValueChange, onDelete }) => (
  <Container>
    <Inner>
      <Inner2>
        {variables.map(({ title, value }, i) => (
          <Variable key={i}>
            <Text>
              <TextInput value={title} onChange={onTitleChange(i)} />
            </Text>
            <Value>
              <TextInput value={value} onChange={onValueChange(i)} />
            </Value>
            {variables.length - 1 !== i && (
              <Delete onClick={onDelete(i)}>Delete</Delete>
            )}
          </Variable>
        ))}
      </Inner2>
    </Inner>
  </Container>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variables);
