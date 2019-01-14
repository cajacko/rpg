module Styles = {
  open Css;

  let container =
    style([display(flexBox), flexDirection(column), alignItems(center)]);

  let title = style([display(flexBox), marginBottom(px(5))]);
};

type state = {
  topCardFaceUp: bool,
  title: string,
};

type action =
  | ToggleTopCardFaceUp;

let component = ReasonReact.reducerComponent("Deck");

let make = (~topCardFaceUp, _children) => {
  ...component,
  initialState: () => {
    let state = Redux.getState();
    let deck = List.nth(state.decks, 0);
    let title = deck.title;

    {topCardFaceUp, title};
  },
  reducer: (action, state) =>
    switch (action) {
    | ToggleTopCardFaceUp =>
      ReasonReact.Update({
        topCardFaceUp: !state.topCardFaceUp,
        title: state.title,
      })
    },
  render: _self =>
    <div className=Styles.container>
      <div className=Styles.title> <Text text={_self.state.title} /> </div>
      <CardStack faceUp=false topCardFaceUp={_self.state.topCardFaceUp} />
      <DeckFooter
        topCardFaceUp={_self.state.topCardFaceUp}
        toggleTopCardFaceUp={_event => _self.send(ToggleTopCardFaceUp)}
      />
    </div>,
};