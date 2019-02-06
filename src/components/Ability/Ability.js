import * as React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ability from "../../config/resources/ability";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: #f2f2ff;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 5px;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 5px;
`;

const Image = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 14px;
  display: flex;
  margin-bottom: 5px;
`;

const Background = styled.span`
  display: flex;
  font-size: 10px;
  font-style: italic;
  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Img = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 100%;
`;

const defaultProps = {
  name: ability.name.placeholder,
  description: ability.description.placeholder
};

const Ability = ({ baseSize, img, name, description, id, character }) => (
  <Card baseSize={baseSize} id={id} character={character}>
    <Container>
      <Left>
        <Image>
          {img ? (
            <Img src={img} alt="Character" />
          ) : (
            <FontAwesomeIcon icon={icons.faMagic} size="6x" />
          )}
        </Image>
        <LeftText>
          <Name>{name}</Name>
        </LeftText>
      </Left>
      <Right>
        <Background>{description}</Background>
      </Right>
    </Container>
  </Card>
);

Ability.defaultProps = defaultProps;

export default Ability;
