import './global.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
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

