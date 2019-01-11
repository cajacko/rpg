module Styles = {
  open Css;

  let text =
    style([
      color(hex("444444")),
      fontSize(px(20)),
      fontFamily("helvetica, sans-serif"),
      display(flexBox),
      lineHeight(em(1.5)),
    ]);
};

let component = ReasonReact.statelessComponent("Text");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~text, _children) => {
  ...component,
  render: _self =>
    <span className=Styles.text> {ReasonReact.string(text)} </span>,
};