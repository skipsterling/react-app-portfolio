// Style components for the page button
import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#9FB9AA' : '#ED8975')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#fff' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Belleza', sans-serif;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#ED8975' : '#F2D096')};
    color: white;
}
`