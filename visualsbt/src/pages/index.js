import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.js';
import InfoSection from '../components/InfoSection/index.js';
import Services from '../components/Services/';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';


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
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <Services />
    <Footer />
    </>
  )
}

export default Home