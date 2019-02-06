import * as React from "react";
import styled from "styled-components";

const Input = styled.select`
  display: flex;
  flex: 1;
  font-size: 16px;
  padding: 15px 5px;
  width: 100%;
`;

const Select = ({ value, onChange, choices }) => (
  <Input value={value} onChange={e => onChange(e.target.value)}>
    {choices.map(({ value, text }) => (
      <option key={value} value={value}>
        {text}
      </option>
    ))}
  </Input>
);

export default Select;
