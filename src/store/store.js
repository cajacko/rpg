const store = {
  decksById: {
    deckId1: {
      title: "",
      cards: [
        {
          cardId: "",
          faceUp: true
        }
      ]
    }
  },
  cardsById: {
    cardId1: {
      front: {
        pattern: "",
        title: "",
        image: "",
        description: "",
        html: ""
      },
      back: {
        pattern: "",
        title: "",
        image: "",
        description: "",
        html: ""
      }
    }
  },
  handsById: {
    handId1: {
      decks: []
    }
  },
  playersById: {
    playerId1: {
      hand: "",
      name: ""
    }
  },
  players: [""]
};
