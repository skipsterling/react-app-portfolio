import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.js';
import InfoSection from '../components/InfoSection/index.js';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';


import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

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
    </>
  )
}

export default Home