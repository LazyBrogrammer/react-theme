import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let initialTheme = localStorage.getItem('theme') === 'true';
    setTheme(initialTheme);
  }, []);

  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem('theme', !theme);
  };

  return (
    <main className={theme ? 'dark' : ''}>
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="home-container">
          <h2 className="welcome-message">
            Welcome to Bus Ticket Reservation System
          </h2>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={handleTheme}
            className="px-3 py-1 border border-stone-400 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </main>
  );
};
