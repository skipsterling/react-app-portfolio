// Creating a navbar for when app is in a mobile state.

import React from 'react';
import { SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
SidebarRoute
} from './SidebarElements';
// Passing in isOpen and toggle.
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        {/* When you click the Icon it will toggle the navbar */}
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='content'>
                    Content
                </SidebarLink>
                <SidebarLink to='weddings'>
                    Weddings
                </SidebarLink>
                <SidebarLink to='about'>
                    About
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/contact'>Contact</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar