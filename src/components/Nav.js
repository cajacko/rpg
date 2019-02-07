import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import navItems from "../config/navItems";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  border-top: 1px solid #cecece;
`;

const Inner = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: row;
  flex: 1;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  appearance: none;
`;

const Text = styled.span`
  margin-top: 6px;
  font-size: 12px;
`;

const Nav = ({ history: { push } }) => (
  <Container>
    <Inner>
      {navItems.map(({ icon, route, text }) => (
        <Button key={route} onClick={() => push(route)}>
          <FontAwesomeIcon size="2x" icon={icon} />
          <Text>{text}</Text>
        </Button>
      ))}
    </Inner>
  </Container>
);

export default withRouter(Nav);
