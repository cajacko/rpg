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

const Image = ({ placeholder, value, onChange }) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default Image;
