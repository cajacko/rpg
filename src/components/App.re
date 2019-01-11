module Styles = {
  open Css;

  let container = style([display(flexBox), flex(1)]);
};

Css.(
  global(
    "html, body, #root",
    [
      margin(px(0)),
      padding(px(0)),
      display(flexBox),
      flex(1),
      height(vh(100.0)),
      width(vw(100.0)),
      overflow(hidden),
    ],
  )
);

let component = ReasonReact.statelessComponent("App");

/* underscores before names indicate unused variables. We name them for clarity */
let make = _children => {
  ...component,
  render: _self =>
    <div className=Styles.container> <Deck topCardFaceUp=true /> </div>,
};