let component = ReasonReact.statelessComponent("Deck");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (_children) => {
  ...component,
  render: (_self) => 
    <div> 
      <Text text="Deck"/>
      <Card show={false} />
      <Button text="Browse"/>
      <Button text="Show"/>
      <Button text="Search"/>
      <Button text="Shuffle"/>
    </div>
};