import * as React from "react";
import Card from "../Card";
import styled from "styled-components";
import rolltable from "../../config/resources/rolltable";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: #ead8d4;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  flex: 1;
  display: flex;
`;

const TBody = styled.tbody`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-bottom: 1px solid #0000000d;
`;

const labelWidth = 20;

const Label = styled.td`
  font-size: 10px;
  display: flex;
  width: ${labelWidth}px;
  background-color: #efe0dd;
  align-items: center;
  justify-content: center;
`;

const Value = styled.td`
  font-size: 9px;
  display: flex;
  width: calc(50% - (${labelWidth}px));
  align-items: center;
  padding: 0 5px;
  font-style: italic;
`;

const defaultProps = {
  title: rolltable.title.placeholder,
  criticalFail: rolltable.criticalFail.placeholder,
  badFail: rolltable.badFail.placeholder,
  fail: rolltable.fail.placeholder,
  meh: rolltable.meh.placeholder,
  success: rolltable.success.placeholder,
  greatSuccess: rolltable.greatSuccess.placeholder,
  criticalSuccess: rolltable.criticalSuccess.placeholder
};

const RollTable = ({
  baseSize,
  id,
  character,
  title,
  criticalFail,
  badFail,
  fail,
  meh,
  success,
  greatSuccess,
  criticalSuccess
}) => (
  <Card baseSize={baseSize} id={id} character={character}>
    <Container>
      <Title>{title}</Title>
      <Table>
        <TBody>
          <Tr>
            <Label>CF</Label>
            <Value>{criticalFail}</Value>
            <Label>S</Label>
            <Value>{success}</Value>
          </Tr>
          <Tr>
            <Label>BF</Label>
            <Value>{badFail}</Value>
            <Label>GS</Label>
            <Value>{greatSuccess}</Value>
          </Tr>
          <Tr>
            <Label>F</Label>
            <Value>{fail}</Value>
            <Label>CS</Label>
            <Value>{criticalSuccess}</Value>
          </Tr>
          <Tr>
            <Label>M</Label>
            <Value>{meh}</Value>
            <Label />
            <Value />
          </Tr>
        </TBody>
      </Table>
    </Container>
  </Card>
);

RollTable.defaultProps = defaultProps;

export default RollTable;
