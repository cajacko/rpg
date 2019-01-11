module Styles = {
  open Css;

  let offsetSize = 5;

  let container = length => {
    let offset = px((length - 1) * offsetSize);

    style([position(relative), marginBottom(offset), marginRight(offset)]);
  };

  let card = i => {
    let offset = px(i * offsetSize);

    style([position(absolute), top(offset), left(offset)]);
  };
};

let component = ReasonReact.statelessComponent("CardStack");

let items = [0, 1, 2, 3];

let isFaceUp = (i, faceUp, topCardFaceUp) => {
  let isLast = i + 1 == List.length(items);

  if (isLast) {
    switch (topCardFaceUp) {
    | None => faceUp
    | Some(topCardFaceUp) => topCardFaceUp
    };
  } else {
    faceUp;
  };
};

let make = (~faceUp, ~topCardFaceUp=?, _children) => {
  ...component,
  render: _self =>
    <div className={Styles.container(List.length(items))}>
      <div> <Card faceUp=false /> </div>
      {ReasonReact.array(
         Array.of_list(
           List.map(
             item =>
               <div key={string_of_int(item)} className={Styles.card(item)}>
                 <Card faceUp={isFaceUp(item, faceUp, topCardFaceUp)} />
               </div>,
             items,
           ),
         ),
       )}
    </div>,
};