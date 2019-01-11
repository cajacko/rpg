module Styles = {
  open Css;

  let container =
    style([display(flexBox), flexDirection(column), alignItems(center)]);

  let title = style([display(flexBox), marginBottom(px(5))]);
};

type state = {topCardFaceUp: bool};

type action =
  | ToggleTopCardFaceUp;

let component = ReasonReact.reducerComponent("Deck");

let make = (~topCardFaceUp, _children) => {
  ...component,
  initialState: () => {topCardFaceUp: topCardFaceUp},
  reducer: (action, state) =>
    switch (action) {
    | ToggleTopCardFaceUp =>
      ReasonReact.Update({topCardFaceUp: !state.topCardFaceUp})
    },
  render: _self =>
    <div className=Styles.container>
      <div className=Styles.title> <Text text="Deck" /> </div>
      <CardStack faceUp=false topCardFaceUp={_self.state.topCardFaceUp} />
      <DeckFooter
        topCardFaceUp={_self.state.topCardFaceUp}
        toggleTopCardFaceUp={_event => _self.send(ToggleTopCardFaceUp)}
      />
    </div>,
};