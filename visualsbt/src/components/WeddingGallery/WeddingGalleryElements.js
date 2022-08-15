import styled from 'styled-components';

export const Container = styled.div`
margin-left: 10%;
padding: 1rem;
display: grid;
grid-template-columns: 21.5% 21.5% 21.5% 21.5%;
grid-gap: 1rem;
grid-auto-flow: row;
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
    background: black;
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
font-family: 'Abril Fatface', cursive;
font-strength: bold;
font-size: 5rem;
`