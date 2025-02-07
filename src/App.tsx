import React, { useState } from 'react';
import { decks } from './data/decks';
import { DeckGrid } from './components/DeckGrid';
import { Card as CardComponent } from './components/Card';
import { Deck, Card, GameState } from './types';
import { ArrowLeft, Heart, Clock } from 'lucide-react';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentDeck: null,
    currentCard: null,
    favorites: [],
    recentlyPlayed: [],
  });

  const selectDeck = (deck: Deck) => {
    setGameState({
      ...gameState,
      currentDeck: deck,
      currentCard: deck.cards[Math.floor(Math.random() * deck.cards.length)],
    });
  };

  const nextCard = () => {
    if (!gameState.currentDeck) return;

    const currentIndex = gameState.currentDeck.cards.findIndex(
      card => card.id === gameState.currentCard?.id
    );
    const nextIndex = (currentIndex + 1) % gameState.currentDeck.cards.length;
    const nextCard = gameState.currentDeck.cards[nextIndex];

    setGameState({
      ...gameState,
      currentCard: nextCard,
      recentlyPlayed: [
        ...(gameState.currentCard ? [gameState.currentCard] : []),
        ...gameState.recentlyPlayed,
      ].slice(0, 10),
    });
  };

  const toggleFavorite = (card: Card) => {
    const updatedCard = { ...card, isFavorite: !card.isFavorite };
    setGameState({
      ...gameState,
      favorites: card.isFavorite
        ? gameState.favorites.filter((f) => f.id !== card.id)
        : [...gameState.favorites, updatedCard],
      currentCard: updatedCard,
    });
  };

  const goBack = () => {
    setGameState({
      ...gameState,
      currentDeck: null,
      currentCard: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <header className="glass-effect sticky top-0 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-center">
          {gameState.currentDeck ? (
            <button
              onClick={goBack}
              className="p-2 rounded-xl hover:bg-dark-700/50 transition-colors absolute left-4"
            >
              <ArrowLeft className="w-6 h-6 text-pink-400" />
            </button>
          ) : null}
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-pink-500 text-transparent bg-clip-text">
            VibeDeck
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {gameState.currentDeck && gameState.currentCard ? (
          <div className="animate-slide-in">
            <CardComponent
              card={gameState.currentCard}
              onNext={nextCard}
              onToggleFavorite={toggleFavorite}
            />

            <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>{gameState.favorites.length} favorites</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{gameState.recentlyPlayed.length} recently played</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-200">
                Choose a Deck
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Select a conversation deck to begin. Each deck contains carefully curated questions
                designed to spark meaningful discussions and create lasting connections.
              </p>
            </div>
            <DeckGrid decks={decks} onSelectDeck={selectDeck} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
