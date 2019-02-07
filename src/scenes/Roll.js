import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addDice, removeDice, roll } from "../store/roll/actions";
import { uniqueDiceResults } from "../config/diceResults";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Actions = styled.div`
  display: flex;
`;

const Inner = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  appearance: none;
`;

const AllDice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Dice = styled.div`
  display: flex;
  padding: 20px;
  background-color: #efefef;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const mapStateToProps = ({ roll }) => ({ dice: roll });

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addDice()),
  onRemove: () => dispatch(removeDice()),
  onRoll: diceCount => () => dispatch(roll(diceCount))
});

const Roll = ({ dice, onAdd, onRemove, onRoll }) => {
  const [animatedDice, setAnimatedDice] = useState(null);

  const animate = () => {
    let count = 0;

    let interval = null;

    const run = () => {
      count += 1;

      if (count > 5 && interval) {
        clearInterval(interval);
        setAnimatedDice(null);
      } else {
        setAnimatedDice(
          dice.map((die, i) => {
            const index = i + count;

            return uniqueDiceResults[index % uniqueDiceResults.length];
          })
        );
      }
    };

    run();

    interval = setInterval(run, 100);
  };

  const getDice = (value, i) => {
    if (animatedDice) return animatedDice[i];

    return value || "Roll";
  };

  return (
    <Container>
      <Inner>
        <Actions>
          <Button onClick={onAdd}>Add 1 Dice</Button>
          <Button
            onClick={() => {
              animate();
              onRoll(dice.length);
            }}
          >
            Roll Dice
          </Button>
          <Button onClick={onRemove}>Remove 1 Dice</Button>
        </Actions>

        <AllDice>
          {dice.map((value, i) => (
            <Dice key={i}>
              <Title>
                Dice {i + 1}: {getDice(value, i)}
              </Title>
            </Dice>
          ))}
        </AllDice>
      </Inner>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roll);
