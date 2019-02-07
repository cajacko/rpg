import React, { useState } from "react";
import styled from "styled-components";
import Modals from "./Modals";

const getShadow = ({ baseSize }) => {
  const offset = Math.ceil(baseSize / 5);
  const spread = Math.ceil(baseSize / 2);

  return `${offset}px ${offset}px ${spread}px`;
};

const Button = styled.button`
  display: flex;
  width: ${({ baseSize }) => baseSize * 30}px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  box-shadow: ${getShadow} #00000063;
  appearance: none;
  text-align: left;
`;

const Div = styled.div`
  display: flex;
  width: ${({ baseSize }) => baseSize * 30}px;
  padding: 0;
  margin: 0;
  box-shadow: ${getShadow} #00000063;
`;

const Inner = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 65%;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  font-size: 1rem;
`;

const Card = ({ onClick, children, baseSize, id, character }) => {
  const [showModal, setShowModal] = useState(false);

  const Container = id ? Button : Div;

  return (
    <>
      <Container
        onClick={id ? () => setShowModal(true) : undefined}
        baseSize={baseSize}
      >
        <Inner>
          <Content>{children}</Content>
        </Inner>
      </Container>
      {showModal && (
        <Modals
          character={character}
          type="action"
          modalProps={{ id }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Card;
