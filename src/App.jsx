import { useState, useEffect } from 'react';
import { pokemonData } from './data/pokemonData';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';
import ThemeToggle from './components/ThemeToggle';

const typeColors = {
  Plante: 'bg-green-500',
  Feu: 'bg-red-500',
  Eau: 'bg-blue-500',
  Électrik: 'bg-yellow-500',
  Normal: 'bg-gray-500',
  Spectre: 'bg-purple-500',
  Poison: 'bg-purple-700',
  Dragon: 'bg-indigo-500',
};

function App() {
  const [pokemons, setPokemons] = useState(pokemonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    console.log('Dark mode:', isDarkMode); // Pour déboguer
  }, [isDarkMode]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterPokemons(term, selectedType);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    filterPokemons(searchTerm, type);
  };

  const filterPokemons = (term, type) => {
    let filtered = pokemonData;
    if (term) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (type !== 'Tous') {
      filtered = filtered.filter((pokemon) => pokemon.type.includes(type));
    }
    setPokemons(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 transition-colors duration-500">
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight text-center flex-1">
            Pokémon Collection
          </h1>
          <div className="w-10" /> {/* Espace vide pour équilibrer la disposition */}
        </div>
        <SearchBar onSearch={handleSearch} />
        <TypeFilter onFilter={handleTypeFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              typeColors={typeColors}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </div>
        {selectedPokemon && (
          <PokemonModal
            pokemon={selectedPokemon}
            typeColors={typeColors}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;