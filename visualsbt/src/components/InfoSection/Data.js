// Creating a file where I can pass in all different values, so we can update the design of our website without having to hard code over and over again.
// In other words, making it reusable.

export const homeObjOne = {
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
    thinText: 'true'
};

export const homeObjTwo = {
    id: 'weddings',
    lightBg: true, 
    lightText: true, 
    lightTextDesc: false,
    topline: 'To See More',
    headline: 'Conent Creation',
    description: 'Please click the button below.',
    buttonLable: 'Click Here',
    imgStart: false, 
    img: require('../../images/2.jpg'),
    alt: 'jax',
    dark: false,
    primary: false,
    darkText: false,
    thinText: 'true'
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
    thinText: 'true'
};