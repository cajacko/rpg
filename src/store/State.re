type patterns =
  | NONE
  | SOLID_DARK;

type deckCard = {
  cardId: string,
  faceUp: bool,
};

type deck = {
  id: string,
  title: string,
  cards: list(deckCard),
};

type cardSide = {
  pattern: patterns,
  title: option(string),
  description: option(string),
};

type card = {
  id: string,
  front: cardSide,
  back: cardSide,
};

type state = {
  decks: list(deck),
  cards: list(card),
};

let state = {
  decks: [
    {
      id: "deck1",
      title: "Example Deck",
      cards: [
        {cardId: "card1", faceUp: true},
        {cardId: "card2", faceUp: false},
        {cardId: "card3", faceUp: false},
        {cardId: "card4", faceUp: false},
      ],
    },
  ],
  cards: [
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
};