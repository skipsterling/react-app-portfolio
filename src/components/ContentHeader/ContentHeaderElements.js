import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const ContentHeaderContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`;

export const ContentHeaderBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
padding: 5rem;
width: 100%;
height: 100%;
-o-object-fit: cover;

background: white;
`;

export const ContentHeaderContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ContentHeaderH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;
font-family: 'Abril Fatface', cursive;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const ContentHeaderP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
font-family: 'Belleza', sans-serif;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`;

export const ContentHeaderBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;

export const Icon = styled(Link)`
background-color: black;
white-space: nowrap;
padding: 2rem;
border: none;
border-radius: 3rem;
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #B2E7E8;
font-weight: 400;
font-size: 20px;
font-family: 'Belleza', sans-serif;
transition: all 0.3s ease-in-out;

&:hover {
    color: #ED8975;
    background-color: white;
}

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const IconContainer = styled.div`
padding: 2rem;
`