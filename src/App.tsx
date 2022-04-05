import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Homepage />

      <Footer />
    </div>
  );
}

export default App;
