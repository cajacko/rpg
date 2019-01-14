let reducer = (state: State.state, actionType: Actions.actions) => {
  switch (actionType) {
  | SET_DECK =>
    let decks = state.decks;

    {
      ...state,
      decks:
        List.append(
          decks,
          [
            {
              id: "deck2",
              title: "Example Deck 2",
              cards: [
                {cardId: "card1", faceUp: true},
                {cardId: "card2", faceUp: false},
                {cardId: "card3", faceUp: false},
                {cardId: "card4", faceUp: false},
              ],
            },
          ],
        ),
    };
  | _ => state
  };
};