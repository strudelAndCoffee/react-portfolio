import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
