module Styles = {
  open Css;

  let icon =
    style([color(hex("444444")), fontSize(px(20)), display(flexBox)]);
};

let component = ReasonReact.statelessComponent("Icon");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~icon, _children) => {
  ...component,
  render: _self =>
    <div className=Styles.icon> <i className={"fas fa-" ++ icon} /> </div>,
};