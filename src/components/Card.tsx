import React from 'react';
import { Heart, RotateCcw } from 'lucide-react';
import { Card as CardType } from '../types';
import { MagneticButton } from './ui/magnetic-button';

interface CardProps {
  card: CardType;
  onNext: () => void;
  onToggleFavorite: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({ card, onNext, onToggleFavorite }) => {
  return (
    <div className="card-container animate-float">
      <div className="absolute top-6 right-6 flex gap-4">
        <button
          onClick={() => onToggleFavorite(card)}
          className={`p-2 rounded-xl hover:bg-dark-700/50 transition-colors
            ${card.isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        >
          <Heart
            className="w-5 h-5"
            fill={card.isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      <div className="min-h-[250px] flex items-center justify-center text-center px-4 md:px-8">
        <p className="text-2xl md:text-3xl font-medium text-gray-100 leading-relaxed">
          {card.question}
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <MagneticButton>
          <button onClick={onNext} className="btn-primary">
            <RotateCcw className="w-5 h-5" />
            Next Question
          </button>
        </MagneticButton>
      </div>
    </div>
  );
};
