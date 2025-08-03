import { useState } from 'react';

   function SearchBar({ onSearch }) {
     const [term, setTerm] = useState('');

     const handleChange = (e) => {
       setTerm(e.target.value);
       onSearch(e.target.value);
     };

     return (
       <input
         type="text"
         value={term}
         onChange={handleChange}
         placeholder="Rechercher un Pokémon..."
         className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
     );
   }

   export default SearchBar;