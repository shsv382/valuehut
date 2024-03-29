import React, { Suspense, lazy } from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import { useAppSelector } from './redux/hooks';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import BottomNav from './components/bottom-nav/bottom-nav.component';
import ServicesPage from './pages/services-page/services-page.component';
import ScrollToTopWrapper from './components/scroll-to-top-wrapper/scroll-to-top-wrapper.component';

function App() {
  const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
  const ContactPage = lazy(() => import('./pages/contact-page/contact-page.component'));
  const WhatWeDoPage = lazy(() => import('./pages/what-we-do-page/what-we-do-page.component'));
  const TrainingsPage = lazy(() => import('./pages/trainings-page/trainings-page.component'));
  const ServicePage = lazy(() => import('./pages/service/service.component'));
  const TrainingPage = lazy(() => import('./pages/training/training.component'));
  const ServicesPage = lazy(() => import('./pages/services-page/services-page.component'));
  const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
  
  const trainings = useAppSelector((state) => (state.services.training));
  const coachings = useAppSelector((state) => (state.services.coaching));
  const consultancy = useAppSelector((state) => (state.services.consultancy));
  const contactData = useAppSelector((state) => (state.content.pages.contact));

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <ScrollToTopWrapper exclude="book-now">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/services' element={<ServicesPage />}>
              <Route path='/services' element={<WhatWeDoPage />} />
              <Route path='training' element={<ServicesPage />}>
                <Route path='/services/training' element={<TrainingsPage 
                  url="training"
                  trainings={ trainings }
                />}></Route>
              {
                trainings.map((training, i) => (
                  <Route 
                    key={`training-${i}`}
                    path={training.title.toLowerCase().split(" ").join("-")} 
                    element={<TrainingPage training={ training } />}
                  />
                ))
              }  
              </Route>
              <Route path='coaching' element={<ServicePage 
                                                service={ coachings }
                                              />} />
              <Route path='consultancy' element={<ServicePage 
                                                service={ consultancy }
                                              />} />
              <Route path='consulting' element={<ServicePage 
                                                service={ consultancy }
                                              />} />
            </Route>
            <Route path='/about' element={<AboutPage />} />
            {
            //   consultancy.map(consult => (
            //     <Route 
            //       path={consult.title.toLowerCase().split(" ").join("-")} 
            //       element={<ServicePage training={ consult } />}
            //     />
            //   ))
            // }
            // {
            //   coachings.map(coaching => (
            //     <Route 
            //       path={coaching.title.toLowerCase().split(" ").join("-")} 
            //       element={<ServicePage training={ coaching } />}
            //     />
            //   ))
            }
            
            <Route path='*' element={<ErrorBoundary hasError={true} />} />
          </Routes>
          </ScrollToTopWrapper>
        </Suspense>
      </ErrorBoundary>
      <Footer {...contactData} />
      <BottomNav />
    </div>
  );
}

export default App;
