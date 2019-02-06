import * as React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import character from "../../config/resources/character";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: #f4f5bd;
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

const Race = styled.span`
  flex: 1;
  display: flex;
  font-size: 10px;
`;

const Alignment = styled.span`
  flex: 1;
  display: flex;
  font-size: 10px;
  font-style: italic;
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

const Meta = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Health = styled.span`
  display: flex;
  font-size: 10px;
`;

const Speed = styled.span`
  display: flex;
  font-size: 10px;
`;

const Img = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 100%;
`;

const defaultProps = {
  name: character.name.placeholder,
  race: character.race.placeholder,
  background: character.background.placeholder,
  health: character.health.placeholder,
  speed: character.speed.placeholder,
  alignment: character.alignment.placeholder
};

const Character = ({
  baseSize,
  img,
  name,
  race,
  background,
  health,
  speed,
  alignment,
  id,
  character
}) => (
  <Card baseSize={baseSize} id={id} character={character}>
    <Container>
      <Left>
        <Image>
          {img ? (
            <Img src={img} alt="Character" />
          ) : (
            <FontAwesomeIcon icon={icons.faUser} size="6x" />
          )}
        </Image>
        <LeftText>
          <Name>{name}</Name>
          <Race>({race})</Race>
          <Alignment>{alignment}</Alignment>
        </LeftText>
      </Left>
      <Right>
        <Background>{background}</Background>
        <Meta>
          <Health>Basic Health: {health}</Health>
          <Speed>Basic Speed: {speed}</Speed>
        </Meta>
      </Right>
    </Container>
  </Card>
);

Character.defaultProps = defaultProps;

export default Character;
