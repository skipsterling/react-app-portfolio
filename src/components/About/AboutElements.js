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
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;

`;

export const ColumnOne = styled.div`
`;

export const TextWrapper = styled.div`
`;

export const TopLine = styled.p`
`;

export const Header = styled.h1`
`;

export const Subtitle = styled.p`
`;

export const ImgWrap = styled.div`
`;

export const Img = styled.img`
`;