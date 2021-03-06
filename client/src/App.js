import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Community from './components/Community';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <div className="App" id="bg-image">
        <Header />
        <main>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route 
              path='/resume'
              element={<Resume />}
            />
            <Route
              path='/community'
              element={<Community />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='*'
              element={<NoMatch />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
