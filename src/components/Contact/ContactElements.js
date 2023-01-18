import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(90deg, #304D63 0%, #B2E7E8 100%);
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`;

// This will link us back to the home screen
export const Icon = styled(Link)`
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
}

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 420px) {
    padding: 10px;
}
`;

export const Form = styled.form`
background: #B2E7E8;
max-width: 400px;
height: auto%;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: black;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius; 4px;
color: black;
font-size: 20px;
cursor: pointer;
font-family: 'Caudex', serif;
`;

export const FormButton = styled.button`
background: #304D63;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #B2E7E8;
font-size: 20px;
cursor: pointer;
` ;

export const Text = styled.span`
text-align: center;

color: #fff;
font-size: 50px;
`;

export const MainH1 = styled.div`
text-align: center;
margin-top: 100px;
color: #fff;
font-size: 50px;
`