import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import UIKit from './pages/UIKit';
import './index.css';

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((d) => !d);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <BrowserRouter>
      <div className={dark ? 'dark' : ''}>
        {/* Skip link – erişilebilirlik */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
        >
          Ana içeriğe atla
        </a>

        {/* Sticky Header */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
            <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
              Serhat Koçyiğit
            </h1>

            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap gap-2">
                {/* Portfolio sayfasında bölüm linkleri */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors ${
                        isActive ? 'bg-blue-100 dark:bg-gray-800 font-semibold' : ''
                      }`
                    }
                  >
                    Portföy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ui-kit"
                    className={({ isActive }) =>
                      `px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors ${
                        isActive ? 'bg-blue-100 dark:bg-gray-800 font-semibold' : ''
                      }`
                    }
                  >
                    🎨 UI Kit
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Tema değiştir"
            >
              <span className="dark:hidden">🌙</span>
              <span className="hidden dark:inline">☀️</span>
            </button>
          </div>
        </header>

        {/* Sayfalar */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/ui-kit" element={<UIKit />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
