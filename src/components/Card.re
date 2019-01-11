let component = ReasonReact.statelessComponent("Card");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~show, _children) => {
  ...component,
  render: (_self) => 
    <div>
      <Text text="Card" />
      <Text text={show ? "Visible" : "Hidden"} />
    </div>
};