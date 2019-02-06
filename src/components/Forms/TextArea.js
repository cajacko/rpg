import * as React from "react";
import styled from "styled-components";

const Input = styled.textarea`
  display: flex;
  flex: 1;
  font-size: 16px;
  padding: 15px 5px;
  height: 50px;
  width: 100%;
`;

const TextArea = ({ placeholder, value, onChange }) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default TextArea;
