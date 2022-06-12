import React, {useState, useEffect} from 'react';
import {animateScroll as scroll } from 'react-scroll';
//Importing our styled components into this file so they can be used.
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

// Importing our FaBars
import { FaBars } from 'react-icons/fa'
// ({ toggle }) this passes in toggle so we can use it.
const Navbar = ({ toggle }) => {
    // Adding code to make nave bar see through until scrolling starts.
    const [scrollNav, setScrollNav] = useState(false)

// creating a function so that the navbar is triggered once we scroll to a certain point.
const changeNav = () => {
    if (window.scrollY >= 80) {
        setScrollNav(true); 
    } else {
        setScrollNav(false);
    };
}
useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
    scroll.scrollToTop()
}
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Visuals By Thomas</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='content' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}   
                         >Content Creation</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='weddings'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}   
                            >Weddings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}   
                            >About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contact'
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}   
                        >Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar