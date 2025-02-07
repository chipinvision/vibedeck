import React from 'react';
import { Deck } from '../types';
import { Tilt } from './ui/tilt';
import { MagneticButton } from './ui/magnetic-button';

interface DeckGridProps {
  decks: Deck[];
  onSelectDeck: (deck: Deck) => void;
}

export const DeckGrid: React.FC<DeckGridProps> = ({ decks, onSelectDeck }) => {
  return (
    <div className="deck-grid">
      {decks.map((deck, index) => (
        <Tilt key={deck.id} rotationFactor={8} isRevese>
          <button
            onClick={() => onSelectDeck(deck)}
            className="deck-card h-80 w-full flex flex-col justify-between p-6"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="deck-icon">
                {deck.icon}
              </div>
            </div>

            <div className="text-left space-y-2 flex-grow">
              <h3 className="text-xl font-semibold text-pink-200 group-hover:text-pink-300 transition-colors">
                {deck.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {deck.description}
              </p>
            </div>

            <div className="mt-6 w-full">
              <MagneticButton>
                <button className="btn-primary w-full flex items-center justify-center">
                  Play Now
                </button>
              </MagneticButton>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r
                           from-pink-500 to-pink-400 transform scale-x-0
                           group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </Tilt>
      ))}
    </div>
  );
};
