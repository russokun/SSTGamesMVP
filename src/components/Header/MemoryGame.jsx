import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, content: '🦺', title: 'Chaleco Reflectante' },
  { id: 2, content: '⛑️', title: 'Casco de Seguridad' },
  { id: 3, content: '🧤', title: 'Guantes de Seguridad' },
  { id: 4, content: '👓', title: 'Gafas Protectoras' },
  { id: 5, content: '🔊', title: 'Protección Auditiva' },
  { id: 6, content: '🚧', title: 'Señalización' },
].flatMap(card => [
  { ...card, matchId: card.id },
  { ...card, matchId: card.id, id: card.id + 6 }
]);

function MemoryGame() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || flippedCards.includes(card.id) || matchedPairs.includes(card.matchId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      const firstCard = shuffledCards.find(card => card.id === firstId);
      const secondCard = shuffledCards.find(card => card.id === secondId);

      if (firstCard.matchId === secondCard.matchId) {
        setMatchedPairs([...matchedPairs, firstCard.matchId]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {shuffledCards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            className={`aspect-square cursor-pointer ${
              flippedCards.includes(card.id) || matchedPairs.includes(card.matchId)
                ? 'bg-blue-500'
                : 'bg-white'
            } rounded-xl flex items-center justify-center text-4xl shadow-lg transition-all duration-300`}
            onClick={() => handleCardClick(card)}
          >
            {(flippedCards.includes(card.id) || matchedPairs.includes(card.matchId)) && (
              <div className="flex flex-col items-center">
                <span>{card.content}</span>
                <span className="text-xs mt-2 text-white">{card.title}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;