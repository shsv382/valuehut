import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
  const ContactPage = lazy(() => import('./pages/contact-page/contact-page.component'));
  const WhatWeDoPage = lazy(() => import('./pages/what-we-do-page/what-we-do-page.component'));

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/training' element={<WhatWeDoPage />} />
            <Route path='*' element={<ErrorBoundary hasError={true} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
