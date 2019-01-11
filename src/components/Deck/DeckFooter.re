module Styles = {
  open Css;

  let container = style([display(flexBox), marginTop(px(20))]);
};

let component = ReasonReact.statelessComponent("DeckFooter");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~topCardFaceUp, ~toggleTopCardFaceUp, _children) => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      <Button icon="book-open" action=toggleTopCardFaceUp />
      <Button
        icon={topCardFaceUp ? "eye-slash" : "eye"}
        action=toggleTopCardFaceUp
      />
      <Button icon="search" action=toggleTopCardFaceUp />
      <Button icon="random" action=toggleTopCardFaceUp />
      <Button icon="hand-paper" action=toggleTopCardFaceUp />
    </div>,
};