export interface Card {
  id: string;
  question: string;
  category: string;
  isFavorite: boolean;
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPremium: boolean;
  cards: Card[];
}

export interface GameState {
  currentDeck: Deck | null;
  currentCard: Card | null;
  favorites: Card[];
  recentlyPlayed: Card[];
}
