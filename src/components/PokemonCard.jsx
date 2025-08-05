function PokemonCard({ pokemon, typeColors, onClick }) {
  const primaryType = pokemon.type[0];
  const gradientColor = {
    Plante: 'bg-gradient-to-br from-green-400 to-green-600',
    Feu: 'bg-gradient-to-br from-red-400 to-red-600',
    Eau: 'bg-gradient-to-br from-blue-400 to-blue-600',
    Électrik: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    Normal: 'bg-gradient-to-br from-gray-400 to-gray-600',
    Spectre: 'bg-gradient-to-br from-purple-400 to-purple-600',
    Poison: 'bg-gradient-to-br from-purple-600 to-purple-800',
    Dragon: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
  }[primaryType];

  const glowColor = {
    Plante: 'rgba(34, 197, 94, 0.5)',
    Feu: 'rgba(239, 68, 68, 0.5)',
    Eau: 'rgba(59, 130, 246, 0.5)',
    Électrik: 'rgba(234, 179, 8, 0.5)',
    Normal: 'rgba(107, 114, 128, 0.5)',
    Spectre: 'rgba(147, 51, 234, 0.5)',
    Poison: 'rgba(126, 29, 159, 0.5)',
    Dragon: 'rgba(79, 70, 229, 0.5)',
  }[primaryType];

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${gradientColor} border-2 border-opacity-50 border-${primaryType.toLowerCase()}-500 dark:border-opacity-70 hover:border-opacity-100`}
      style={{
        boxShadow: `0 0 10px ${glowColor}`,
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, border-opacity 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 10px ${glowColor}`)}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-28 h-28 mx-auto mb-2 animate-[float_2s_ease-in-out_infinite] hover:rotate-6 transition-transform duration-200"
      />
      <h2 className="text-xl font-bold text-white text-center capitalize">
        {pokemon.name}
      </h2>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.type.map((type) => (
          <span
            key={type}
            className={`px-3 py-1 rounded-full text-white text-sm font-medium ${typeColors[type]} shadow-sm`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;