import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';
import ContentPage from './pages/content';
import Weddings from './pages/weddings';
import About from './pages/about';


function App() {
  return (
    <Router>
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/contentpage' element={<ContentPage />} />
        <Route exact path='/weddingspage' element={<Weddings />} />
        <Route exact path='/aboutpage' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
