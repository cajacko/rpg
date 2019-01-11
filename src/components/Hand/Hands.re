module Styles = {
  open Css;

  let container =
    style([
      display(flexBox),
      flex(1),
      flexDirection(column),
      marginTop(px(50)),
      marginBottom(px(10)),
    ]);

  let title = style([display(flexBox), justifyContent(center)]);
};

let component = ReasonReact.statelessComponent("Hands");

let make = _children => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      <div className=Styles.title> <Text text="Hands" /> </div>
      <HandsNav />
      <Hand />
    </div>,
};