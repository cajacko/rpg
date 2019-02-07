const diceResults = [
  "Critical Fail",
  "Bad Fail",
  "Bad Fail",
  "Bad Fail",
  "Fail",
  "Fail",
  "Fail",
  "Fail",
  "Fail",
  "Meh",
  "Meh",
  "Success",
  "Success",
  "Success",
  "Success",
  "Success",
  "Great Success",
  "Great Success",
  "Great Success",
  "Critical Success"
];

export const diceColors = {
  "Critical Fail": "#ff9494",
  "Bad Fail": "#ffb794",
  Fail: "#ffe394",
  Meh: "#f1f1f1",
  Success: "#e5ff94",
  "Great Success": "#b8ff94",
  "Critical Success": "#94ffab"
};

export const uniqueDiceResults = diceResults.reduce((acc, result) => {
  if (acc.includes(result)) return acc;

  acc.push(result);

  return acc;
}, []);

export default diceResults;
