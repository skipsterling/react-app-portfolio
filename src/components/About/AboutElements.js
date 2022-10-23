import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutContainer = styled.div`
color: #fff;
background: #ED8975;

@media screen and (max-width: 768px) {
    padding: 100px 0 0;
}
`;

export const AboutWrapper = styled.div`
display: grid;
z-index: 1;
heigh: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const AboutRow = styled.div`
align-items: center;
@media screen and (max-width: 768px) {
}
`;

export const ColumnOne = styled.div`
padding: 1rem;
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;
justify-content: center;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 1rem;

`;

export const TopLine = styled.p`
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

`;

export const Header = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;

`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #304D63;
font-family: 'Space Grotesk', sans-serif;
text-align: left;
`;

export const Img = styled.img`
width: 100%;
padding: 1rem;

`;

export const ColumnTwo = styled.div`
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;
margin-bottom: 2rem;
`;

export const AboutIcon = styled(Link)`
background-color: #ED8975;
white-space: nowrap;
padding: 1rem;
border: none;
border-radius: 3rem;
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: black;
font-weight: 400;
font-size: 20px;
font-family: 'Belleza', sans-serif;
transition: all 0.3s ease-in-out;

&:hover {
    color: white;
}

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const AboutIconContainer = styled.div`
padding: 2rem;
`;