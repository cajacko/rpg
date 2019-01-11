let component = ReasonReact.statelessComponent("Text");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~text, _children) => {
  ...component,
  render: (_self) => <span>{ReasonReact.string(text)}</span>
};