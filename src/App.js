import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exchange from './Exchange.js';
import Sector from './Sector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/sector" element={<Sector />} />
      </Routes>
    </Router>
  );
}

export default App;
