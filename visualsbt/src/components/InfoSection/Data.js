// Creating a file where I can pass in all different values, so we can update the design of our website without having to hard code over and over again.
// In other words, making it reusable.
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const homeObjTwo = {
    id: 'weddings',
    lightBg: true, 
    lightText: true, 
    lightTextDesc: false,
    topline: 'To See More',
    headline: 'Wedding Content',
    description: 'Please click the button below.',
    buttonLable: 'Click Here',
    imgStart: false, 
    img: require('../../images/2.jpg'),
    alt: 'jax',
    dark: false,
    primary: false,
    darkText: false,
    thinTextOps: 'true',
    boldTextOps: 'true'
};

export const homeObjThree = {
    id: 'about',
    lightBg: false, 
    lightText: false, 
    lightTextDesc: true,
    topline: 'Hi There,',
    headline: 'My name is Thomas',
    description: 'To find out more about me, please click the button below',
    buttonLable: 'Click Here',
    imgStart: false, 
    img: require('../../images/3.jpg'),
    alt: 'me',
    dark: true,
    primary: true,
    darkText: false,
    thinTextOps: 'true',
    boldTextOps: 'true'
};

export const Button = styled(Link)`
`