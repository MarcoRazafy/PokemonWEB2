function ThemeToggle({ isDarkMode, setIsDarkMode }) {
    return (
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    );
  }

  export default ThemeToggle;