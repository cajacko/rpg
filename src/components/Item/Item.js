import * as React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import item from "../../config/resources/item";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: #f9ddf2;
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
  name: item.name.placeholder,
  description: item.description.placeholder
};

const Item = ({ baseSize, img, name, description, id, character }) => (
  <Card baseSize={baseSize} id={id} character={character}>
    <Container>
      <Left>
        <Image>
          {img ? (
            <Img src={img} alt="Character" />
          ) : (
            <FontAwesomeIcon icon={icons.faTools} size="6x" />
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

Item.defaultProps = defaultProps;

export default Item;
