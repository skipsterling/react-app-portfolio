// Importing everything from our pages and components that is neccessary to make the page work.
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.js';
import Services from '../components/Services/';
import HomeOne from '../components/HomeOne/index.js';
import HomeTwo from '../components/HomeTwo/index.js';
import HomeThree from '../components/HomeThree/index.js';
import { homeObjectOne } from '../components/HomeOne/Data';
import { homeObjectTwo } from '../components/HomeTwo/Data';
import { homeObjectThree } from '../components/HomeThree/Data';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/index.js';

const Home = () => {
const [isOpen, setIsOpen] = useState(false)

// Creating a function that is going to update the state and change it to the reverse.
const toggle = () => {
  setIsOpen(!isOpen);
}
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <HomeOne {...homeObjectOne} />
    <HomeTwo {...homeObjectTwo} />
    <HomeThree {...homeObjectThree} />
    <Services />
    <Footer />
    </>
  )
}

export default Home