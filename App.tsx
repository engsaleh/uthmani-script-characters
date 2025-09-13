import React from 'react';
import { CHARACTER_GROUPS } from './constants/characters';
import CharacterGrid from './components/CharacterGrid';

const App: React.FC = () => {
  // All characters are now in the first (and only) group
  const allCharacters = CHARACTER_GROUPS[0].characters;

  return (
    <div className="min-h-screen text-slate-800 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-10">
        <h1 className="font-arabic text-4xl md:text-5xl font-bold text-emerald-800">
          رموز المصحف العثماني
        </h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <CharacterGrid characters={allCharacters} />
      </main>

      <footer className="text-center mt-16 py-4">
        <p className="text-slate-500 font-arabic text-sm">
          تطوير م.علا صالح
        </p>
      </footer>
    </div>
  );
};

export default App;