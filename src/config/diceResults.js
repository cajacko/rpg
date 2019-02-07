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

export const uniqueDiceResults = diceResults.reduce((acc, result) => {
  if (acc.includes(result)) return acc;

  acc.push(result);

  return acc;
}, []);

export default diceResults;
