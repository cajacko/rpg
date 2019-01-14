module Styles = {
  open Css;

  let container =
    style([
      display(flexBox),
      flex(1),
      alignItems(center),
      justifyContent(center),
    ]);
};

let component = ReasonReact.statelessComponent("Hand");

let make = _children => {
  ...component,
  render: _self =>
    <div className=Styles.container> <CardStack faceUp=true /> </div>,
};