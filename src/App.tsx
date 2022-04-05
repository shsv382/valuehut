import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact-page/contact-page.component';
import WhatWeDoPage from './pages/what-we-do-page/what-we-do-page.component';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/what-we-do' element={<WhatWeDoPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
