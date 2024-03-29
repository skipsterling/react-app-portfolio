import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
margin-left: 10%;
padding: 1rem;
display: grid;
grid-template-columns: 21.5% 21.5% 21.5% 21.5%;
grid-gap: 1rem;
grid-auto-flow: auto;

@media screen and (max-width: 748px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;

}

`;


export const Column1 = styled.div`
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;

&:hover {
    background: black;
    opacity: 50%;
}
`;

export const Column2 = styled.div`
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;

&:hover {
    background: black;
    opacity: 50%;
}
`;

export const Column3 = styled.div`
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;

&:hover {
    background: grey;
    opacity: 50%;
}
`;

export const Column4 = styled.div`
display: grid;
grid-gap: 1rem;
grid-auto-flow: row;

&:hover {
    background: black;
    opacity: 50%;
}
`;

export const Row = styled.div`

`;

export const Img = styled.img`
width: 100%;
height: 100%;
`

export const Header = styled.h1`
text-align: center;
padding: 2rem;
font-family: 'Bebas Neue', cursive;
font-size: 5rem;
`;

export const Icon = styled(Link)`
background-color: white;
white-space: nowrap;
padding: 2rem;
border: none;
border-radius: 3rem;
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #304D63;
font-weight: 400;
font-size: 20px;
font-family: 'Belleza', sans-serif;
transition: all 0.3s ease-in-out;

&:hover {
    color: #ED8975;
}

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const IconContainer = styled.div`
padding: 2rem;
`

export const Vid = styled.video`
width: 100%;
`;

export const CMTH = styled.h2`
display: flex;
justify-content: center;
align-items: center;
colour: grey;
`;

export const SelectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
colour: grey;
`;

export const Pics = styled.h3`
colour: grey;
padding: 2rem;

&:hover {
    color: #ED8975;
    cursor: pointer;
}
`;

export const Vids = styled.h3`
colour: grey;
padding: 2rem;

&:hover {
    color: #ED8975;
    cursor: pointer;
}
`;