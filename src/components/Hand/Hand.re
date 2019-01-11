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
  didMount: _self => {
    Redux.subscribe("HandKey", _state =>
      Js.Console.log("Hand subscription called")
    );

    Redux.dispatch();
  },
  render: _self =>
    <div className=Styles.container> <CardStack faceUp=true /> </div>,
};