import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route 
              path='/'
              element={<About />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route 
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route 
              path='/resume'
              element={<Resume />}
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

// function App() {
//   const [currentPage, setCurrentPage] = useState('About');

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     return <Resume />;
//   };

//   const pageChangeHandler = (page) => setCurrentPage(page);

//   return (
//     <div className="App">
//       <Header
//         currentPage={currentPage}
//         pageChangeHandler={pageChangeHandler}
//       />
//       <main>
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// };

export default App;
