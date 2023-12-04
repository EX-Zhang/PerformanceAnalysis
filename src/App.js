import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Performance from './Performance.js';
import Sector from './Sector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/performance" element={<Performance />} />
        <Route path="/sector" element={<Sector />} />
      </Routes>
    </Router>
  );
}

export default App;
