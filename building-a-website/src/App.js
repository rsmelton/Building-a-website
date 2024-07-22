import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Menu from './Components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
