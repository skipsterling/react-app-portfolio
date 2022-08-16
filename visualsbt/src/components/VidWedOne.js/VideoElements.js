import styled from 'styled-components';

export const VideoContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 800px;
position: relative;
`;

export const VideoOne =styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: black;
`;