import './global.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const preferences = useSelector((store) => store.preferencesReducer);
  const { language, theme, mode } = preferences;

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;

    if (mode === 'light') {
      root.style.setProperty('--mainTheme', '255 255 255');
      root.style.setProperty('--mainText', '0 0 0');
      root.style.setProperty('--mode', 'light');
      root.style.setProperty('--opacityLevel', '0.8');

      if (theme === 'purple') {
        root.style.setProperty('--mainColor', '102 0 255');
      } else if (theme === 'red') {
        root.style.setProperty('--mainColor', '255 48 59');
      } else if (theme === 'yellow') {
        root.style.setProperty('--mainColor', '255 225 29');
      }
    } else if (mode === 'dark') {
      root.style.setProperty('--mainTheme', '0 0 0');
      root.style.setProperty('--mainText', '255 255 255');
      root.style.setProperty('--mode', 'dark');
      root.style.setProperty('--opacityLevel', '0.2');

      if (theme === 'purple') {
        root.style.setProperty('--mainColor', '195 156 255');
      } else if (theme === 'red') {
        root.style.setProperty('--mainColor', '247 91 99');
      } else if (theme === 'yellow') {
        root.style.setProperty('--mainColor', '247 232 136');
      }
    }
  }, [theme, mode]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}

export default App;

