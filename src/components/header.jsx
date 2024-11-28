import React, { useContext, useState } from 'react';
import { FaSun, FaMoon, FaSearchLocation } from 'react-icons/fa';
import { WeatherContext } from '../context/WeatherContext';

export const Header = ({ toggleTheme, darkMode }) => {
  const { searchCity } = useContext(WeatherContext);  
  const [inputCity, setInputCity] = useState(''); 

  const handleSearch = () => {
    if (inputCity.trim()) {
      console.log("Ciudad a buscar:", inputCity);
      searchCity(inputCity); 
      setInputCity(''); 
    } else {
      alert('Por favor ingrese una ciudad válida');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { 
      handleSearch(); 
    }
  };

  return (
    <div className="flex flex-row justify-between p-4 rounded-lg mt-4 bg-slate-300 dark:bg-zinc-800 text-gray-800 dark:text-white">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Escribe una ciudad..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} 
          onKeyDown={handleKeyPress} 
          className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-600 text-gray-800 dark:text-white"
        />
        <button
          onClick={handleSearch} 
          className="ml-2 p-2 rounded-lg bg-cyan-600 text-white"
        >
          Buscar
        </button>
      </div>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-800 dark:text-white
                   bg-gray-100 dark:bg-zinc-600"
      >
        {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
    </div>
  );
};

export default Header;
