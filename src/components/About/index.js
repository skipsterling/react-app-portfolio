import React from 'react';
import ImgMe from '../../images/3.jpg';

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  ColumnOne,
  ColumnTwo,
  TextWrapper,
  TopLine,
  Header,
  Subtitle,
  Img,
  AboutIconContainer,
  AboutIcon

} from './AboutElements';

const aboutComp = () => {
  return (
    <div>
      <AboutContainer>
        <AboutWrapper>
        <AboutIconContainer><AboutIcon to='/' >Back to Home</AboutIcon></AboutIconContainer>
          <AboutRow>
            <ColumnOne>
              <TextWrapper>
                <TopLine>About Me</TopLine>
                <Header>Thomas Sterling James</Header>
                <Subtitle>My 13th birthday I was given a kodak disposable camera and ever since then I've been facinated by cameras and their ability to stop a moment in time. The feeling of showing my family and friends the photos that I had captured of them gave me a feeling of absolute joy. Now even to this day It's rare to see me with out a camera in hand. I shoot photo and video of everything, weddings, official music videos, clothing brands, food and beverage.  </Subtitle>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo><Img src={ImgMe}/></ColumnTwo>  
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </div>
  )
}

export default aboutComp