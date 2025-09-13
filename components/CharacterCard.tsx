import React, { useState } from 'react';
import type { QuranicChar } from '../types';
import Tooltip from './Tooltip';

interface CharacterCardProps {
  character: QuranicChar;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white/60 backdrop-blur-sm border border-[#d1c7b8] rounded-lg p-4 flex flex-col items-center justify-between aspect-square shadow-sm transition-all duration-300 ease-in-out hover:border-emerald-600 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
      title={`Unicode: U+${character.unicode}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (character.name || character.description) && (
        <Tooltip name={character.name} description={character.description} />
      )}
      <div className="flex items-center justify-center">
        <span className="font-arabic-char text-slate-900">
          {character.char}
        </span>
      </div>
      <div className="text-xs text-slate-400 font-mono">
        {character.unicode}
      </div>
    </div>
  );
};

export default CharacterCard;