// This is where we store our stock components.
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

// Components we added in our navbar index.js 

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#304D63' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content: space-around;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;
// LinkR = link router
export const NavLogo = styled(LinkR)`
color: #B2E7E8;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-family: 'Abril Fatface', cursive;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;  
    color: #ED8975;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Bebas Neue', cursive;

&.active {
    border-bottom: 3px solid #B2E7E8;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #ED8975;
white-space: nowrap;
padding: 10px 22px;
color: #F2D096;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: 'Space Grotesk', sans-serif;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #F2D096;
    color: #ED8975;
}
`;