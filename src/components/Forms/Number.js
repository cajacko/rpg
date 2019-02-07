import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex: 1;
  font-size: 16px;
  padding: 15px 5px;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
`;

const parseNumber = val => {
  if (typeof val === "number") return val;
  if (!val) return undefined;

  const int = parseInt(val, 10);

  if (isNaN(int)) return undefined;

  if (typeof int === "number") return int;

  return undefined;
};

const Number = ({ placeholder, value, onChange }) => (
  <Input
    type="number"
    placeholder={parseNumber(placeholder)}
    value={parseNumber(value) || ""}
    onChange={e => onChange(parseNumber(e.target.value))}
  />
);

export default Number;
