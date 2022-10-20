// This will create out home route with a video as the background.
import React, { useState }from 'react';
import Video from '../../videos/video.mov';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

// Setting a state for when you hover over the button
const HeroSection = () => {
const [hover, setHover] = useState(false)
const onHover = () => {
  setHover(!hover)
}

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mov' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Visuals By Test Vercel</HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button to='content' onMouseHover={onHover} onMouseLeave={onHover} 
         // This is where you add your primary and dark functions if you want to test in live time.
          >Content Creation {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection