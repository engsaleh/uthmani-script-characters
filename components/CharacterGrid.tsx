import React from 'react';
import type { QuranicChar } from '../types';
import CharacterCard from './CharacterCard';

interface CharacterGridProps {
  characters: QuranicChar[];
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4">
      {characters.map((char) => (
        <CharacterCard key={char.unicode + char.char} character={char} />
      ))}
    </div>
  );
};

export default CharacterGrid;