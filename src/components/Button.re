let component = ReasonReact.statelessComponent("Button");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~action, ~text=?, ~icon=?, _children) => {
  ...component,
  render: _self =>
    <button onClick=action>
      {switch (text) {
       | None => ReasonReact.null
       | Some(text) => <Text text />
       }}
      {switch (icon) {
       | None => ReasonReact.null
       | Some(icon) => <Icon icon />
       }}
    </button>,
};