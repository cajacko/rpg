module Styles = {
  open Css;

  let card = faceUp =>
    style([
      display(flexBox),
      flexDirection(column),
      backgroundColor(hex(faceUp ? "f3f3f3" : "8c8c8c")),
      boxShadow(~x=px(2), ~y=px(2), ~blur=px(6), rgba(0, 0, 0, 0.5)),
      padding(Theme.basePadding),
      height(px(300)),
      width(px(200)),
      boxSizing(borderBox),
      borderRadius(px(4)),
      borderStyle(solid),
      borderColor(rgba(0, 0, 0, 0.2)),
      borderWidth(px(1)),
    ]);
};

let component = ReasonReact.statelessComponent("Card");

let make = (~faceUp, _children) => {
  ...component,
  render: _self =>
    <div className={Styles.card(faceUp)}>
      <Text text="Card" />
      <div style={ReactDOMRe.Style.make(~display="flex", ())}>
        <Text text={"State: " ++ (faceUp ? "Visible" : "Hidden")} />
      </div>
    </div>,
};