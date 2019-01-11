module Styles = {
  open Css;

  let container =
    style([display(flexBox), flexDirection(column), alignItems(center)]);

  let title = style([display(flexBox), marginBottom(px(5))]);

  let buttonContainer = style([display(flexBox), marginTop(px(20))]);
};

let component = ReasonReact.statelessComponent("Deck");

/* underscores before names indicate unused variables. We name them for clarity */
let make = _children => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      <div className=Styles.title> <Text text="Deck" /> </div>
      <CardStack faceUp=false topCardFaceUp=true />
      <div className=Styles.buttonContainer>
        <Button icon="book-open" />
        <Button icon="eye" />
        <Button icon="search" />
        <Button icon="random" />
        <Button icon="hand-paper" />
      </div>
    </div>,
};