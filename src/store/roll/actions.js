import diceResults from "../../config/diceResults";

export const ADD_DICE = "ADD_DICE";
export const REMOVE_DICE = "REMOVE_DICE";
export const ROLL = "ROLL";

export const addDice = () => ({
  type: ADD_DICE
});

export const removeDice = () => ({
  type: REMOVE_DICE
});

export const roll = numberOfDice => {
  const dice = [];

  for (let i = 0; i < numberOfDice; i += 1) {
    const rand = Math.floor(Math.random() * diceResults.length);

    dice.push(diceResults[rand]);
  }

  return {
    type: ROLL,
    payload: dice
  };
};
