import React from 'react';
//Importing our styled components into this file so they can be used.
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
// Importing our FaBars
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
  <>
  <Nav>
      <NavbarContainer>
          <NavLogo to="/">
              Visuals By Thomas
          </NavLogo>
          <MobileIcon>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to='content'>Content</NavLinks>
              </NavItem>
          </NavMenu>
      </NavbarContainer>
  </Nav>
  </>
  )
}

export default Navbar