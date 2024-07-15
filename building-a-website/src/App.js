import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  return (
    // This should take care of the structuring and now we can
    // each work on these components individually and probably have less
    // merge conflicts as a result.
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
