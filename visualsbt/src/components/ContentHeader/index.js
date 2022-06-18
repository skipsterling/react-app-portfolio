// This will create out home route with a video as the background.
import React, { useState }from 'react';
import Video from '../../videos/wt.mp4';
import { Button } from '../ButtonElements';
import {
  ContentHeaderContainer,
  ContentHeaderBg,
  VideoBg,
  ContentHeaderContent,
  ContentHeaderH1,
  ContentHeaderP,
  ContentHeaderBtnWrapper,
  ArrowForward,
  ArrowRight
} from './ContentHeaderElements';

// Setting a state for when you hover over the button
const ContentHeaderSection = () => {
const [hover, setHover] = useState(false)
const onHover = () => {
  setHover(!hover)
}

  return (
    <ContentHeaderContainer>
      <ContentHeaderBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ContentHeaderBg>
      <ContentHeaderContent>
        <ContentHeaderH1>Visuals By Thomas</ContentHeaderH1>
        <ContentHeaderP></ContentHeaderP>
        <ContentHeaderBtnWrapper>
          <Button to='content' onMouseHover={onHover} onMouseLeave={onHover} 
         // This is where you add your primary and dark functions if you want to test in live time.
          >Content Creation {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ContentHeaderBtnWrapper>
      </ContentHeaderContent>
    </ContentHeaderContainer>
  )
}

export default ContentHeaderSection