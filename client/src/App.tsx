import './global.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ResetPassword from './pages/Auth/ResetPassword';
import Logout from './pages/Auth/Logout';
import { setUser, setLoading } from './components/Auth/UserSlice';
import Home from './pages/Home/Home';
import Loader from './components/General/Loader';
import Profile from './pages/Profile/Profile';

function App() {
  const user = useSelector((store) => store.userReducer);
  const preferences = useSelector((store) => store.preferencesReducer);
  const { language, mode, theme } = preferences;
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCurrentUser() {
      const res = await fetch('http://localhost:8000/v1/auth/current', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await res.json();

      dispatch(setUser(data.data));

      console.log(data);
    }
    getCurrentUser();
    dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;

    console.log('Hello');

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
      root.style.setProperty('--mainTheme', '51 51 51');
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

  if (user.isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        {/* user.data */}
        <Route
          path="/"
          element={user.data ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={user.data ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user.data ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/reset" element={<ResetPassword />} />
        <Route
          path="/logout"
          element={user.data ? <Logout /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={user.data ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

