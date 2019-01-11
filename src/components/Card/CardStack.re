module Styles = {
  open Css;

  let offsetSize = 5;

  let container = length => {
    let offset = px((length - 1) * offsetSize);

    style([position(relative), marginBottom(offset), marginRight(offset)]);
  };

  let card = i => {
    let offset = px(i * offsetSize);

    switch (i) {
    | 0 => style([display(flexBox)])
    | i => style([position(absolute), top(offset), left(offset)])
    };
  };
};

let component = ReasonReact.statelessComponent("CardStack");

type card = {
  cardId: string,
  faceUp: bool,
};

let cards: list(card) = [
  {cardId: "1", faceUp: true},
  {cardId: "2", faceUp: true},
  {cardId: "3", faceUp: true},
  {cardId: "4", faceUp: true},
];

let make = (~faceUp, ~topCardFaceUp=?, _children) => {
  ...component,
  render: _self =>
    <div className={Styles.container(List.length(cards))}>
      {ReasonReact.array(
         Array.of_list(
           List.mapi(
             (index, {cardId, faceUp}) =>
               <div key=cardId className={Styles.card(index)}>
                 <Card faceUp cardId />
               </div>,
             cards,
           ),
         ),
       )}
    </div>,
};