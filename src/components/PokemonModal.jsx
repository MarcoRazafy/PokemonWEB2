function PokemonModal({ pokemon, typeColors, onClose }) {
  const primaryType = pokemon.type[0];
  const borderColor = {
    Plante: 'border-green-500',
    Feu: 'border-red-500',
    Eau: 'border-blue-500',
    Électrik: 'border-yellow-500',
    Normal: 'border-gray-500',
    Spectre: 'border-purple-500',
    Poison: 'border-purple-700',
    Dragon: 'border-indigo-500',
  }[primaryType];

  const ProgressBar = ({ value, label, color }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-white font-medium">{label}</span>
        <span className="text-gray-600 dark:text-gray-300">{value}/100</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{
            width: `${Math.min(value, 100)}%`,
            transition: 'width 0.5s ease-in-out',
            background: `linear-gradient(to right, ${color.replace('bg-', '')}, ${color.replace('bg-', '')}80)`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div
        className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-md w-full border-4 ${borderColor} transform transition-all duration-300 scale-100`}
        style={{
          animation: 'fadeIn 0.3s ease-in-out',
        }}
      >
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 capitalize text-center">
          {pokemon.name}
        </h2>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-36 h-36 mx-auto mb-4 animate-[float_2s_ease-in-out_infinite] hover:scale-110 transition-transform duration-200"
        />
        <div className="flex justify-center gap-2 mb-4">
          {pokemon.type.map((type) => (
            <span
              key={type}
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${typeColors[type]} shadow-sm`}
            >
              {type}
            </span>
          ))}
        </div>
        <ProgressBar label="HP" value={pokemon.hp} color="bg-green-500" />
        <ProgressBar label="Attaque" value={pokemon.attack} color="bg-red-500" />
        <ProgressBar label="Défense" value={pokemon.defense} color="bg-blue-500" />
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 font-medium"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default PokemonModal;