import React from 'react';
import './App.css';
import Header from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    // This should take care of the structuring and now we can
    // each work on these components individually and probably have less
    // merge conflicts as a result.
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
