import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import resourcesNavItems from "../config/resourcesNavItems";
import ResourceList from "../components/ResourceList";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 900px;
`;

const Button = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  appearance: none;
`;

const Text = styled.div`
  font-size: 20px;
`;

const Resources = ({ history: { push }, search }) => {
  if (search) {
    return <ResourceList search={search} />;
  }

  return (
    <Container>
      <Inner>
        {resourcesNavItems.map(({ text, route }) => (
          <Button key={route} onClick={() => push(route)}>
            <Text>{text}</Text>
          </Button>
        ))}
      </Inner>
    </Container>
  );
};

export default withRouter(Resources);
