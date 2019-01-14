let reducer = (state: State.state, actionType: Actions.actions) => {
  switch (actionType) {
  | SET_DECK =>
    let cards = state.cards;

    {
      ...state,
      cards:
        List.append(
          cards,
          [
            {
              id: "card1",
              front: {
                pattern: NONE,
                title: Some("Agility"),
                description: Some("Impacts how fast you can run or act"),
              },
              back: {
                pattern: SOLID_DARK,
                title: None,
                description: None,
              },
            },
          ],
        ),
    };
  | _ => state
  };
};