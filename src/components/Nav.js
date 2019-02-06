import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import navItems from "../config/navItems";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const Text = styled.span`
  margin-top: 6px;
  font-size: 12px;
`;

const Nav = ({ history: { push } }) => (
  <Container>
    {navItems.map(({ icon, route, text }) => (
      <Button key={route} onClick={() => push(route)}>
        <FontAwesomeIcon size="2x" icon={icon} />
        <Text>{text}</Text>
      </Button>
    ))}
  </Container>
);

export default withRouter(Nav);
