import React from 'react';
//Importing our styled components into this file so they can be used.
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

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