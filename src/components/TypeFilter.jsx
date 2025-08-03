import { pokemonData } from '../data/pokemonData';

   function TypeFilter({ onFilter }) {
     const types = ['Tous', ...new Set(pokemonData.flatMap((p) => p.type))];

     return (
       <div className="flex flex-wrap gap-2 mb-4">
         {types.map((type) => (
           <button
             key={type}
             onClick={() => onFilter(type)}
             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
           >
             {type}
           </button>
         ))}
       </div>
     );
   }

   export default TypeFilter;