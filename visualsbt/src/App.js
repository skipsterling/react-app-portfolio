import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';
import ContentPage from './pages/content';


function App() {
  return (
    <Router>
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/contentpage' element={<ContentPage />} />
        </Routes>
    </Router>
  );
}

export default App;
