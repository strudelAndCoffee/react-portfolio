import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
