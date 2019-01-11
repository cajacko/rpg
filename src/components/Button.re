let component = ReasonReact.statelessComponent("Button");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~text, _children) => {
  ...component,
  render: (_self) => <button><Text text={text} /></button>
};