import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const homeObjectOne = {
    id: 'content',
    lightBg: false, 
    lightText: false, 
    lightTextDesc: true,
    topline: 'To See More',
    headline: 'Images and Videos',
    description: 'Please click the button below.',
    buttonLable: 'Click Here',
    imgStart: false, 
    img: require('../../images/1.jpg'),
    alt: 'jax',
    dark: true,
    primary: true,
    darkText: false,
    thinTextOps: 'true',
    boldTextOps: 'true'
};
export const Button = styled(Link)`

`