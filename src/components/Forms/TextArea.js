import * as React from "react";
import styled from "styled-components";

const Input = styled.textarea`
  display: flex;
  flex: 1;
  font-size: 16px;
  padding: 15px 5px;
  height: 100px;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
`;

const TextArea = ({ placeholder, value, onChange }) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default TextArea;
