import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import Presale from './pages/presale';
import Dashboard from './pages/dashboard';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Presale />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
