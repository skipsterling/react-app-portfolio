import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';


function App() {
  return (
    <Router>
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
    </Router>
  );
}

export default App;
