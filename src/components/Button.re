module Styles = {
  open Css;

  let container =
    style([display(flexBox), alignItems(center), justifyContent(center)]);
};

let mergeStyles = styles => {
  switch (styles) {
  | None => Styles.container
  | Some(styles) => Css.(merge([Styles.container, styles]))
  };
};

let component = ReasonReact.statelessComponent("Button");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~action, ~text=?, ~icon=?, ~styles=?, _children) => {
  ...component,
  render: _self =>
    <button className={mergeStyles(styles)} onClick=action>
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