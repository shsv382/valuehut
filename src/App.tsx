import React, { Suspense, lazy } from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import { useAppSelector } from './redux/hooks';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import BottomNav from './components/bottom-nav/bottom-nav.component';

function App() {
  const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
  const ContactPage = lazy(() => import('./pages/contact-page/contact-page.component'));
  const WhatWeDoPage = lazy(() => import('./pages/what-we-do-page/what-we-do-page.component'));
  const ServicePage = lazy(() => import('./pages/service/service.component'));
  const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
  
  const coachings = useAppSelector((state) => (state.training.coaching));
  const trainings = useAppSelector((state) => (state.training.training));
  const contactData = { ...useAppSelector((state) => (state.content.pages.contact)) };

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/training' element={<WhatWeDoPage />} />
            <Route path='/about' element={<AboutPage />} />
            {
              coachings.map(coaching => (
                <Route 
                  path={coaching.title.toLowerCase().split(" ").join("-")} 
                  element={<ServicePage training={ coaching } />}
                />
              ))
            }
            {
              trainings.map(training => (
                <Route 
                  path={training.title.toLowerCase().split(" ").join("-")} 
                  element={<ServicePage training={ training } />}
                />
              ))
            }
            <Route path='*' element={<ErrorBoundary hasError={true} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer {...contactData} />
      <BottomNav />
    </div>
  );
}

export default App;
