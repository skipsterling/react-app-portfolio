// This will create out home route with a video as the background.
// import React, { useState }from 'react';
import Video from '../../videos/wt.mp4';
// import { Button } from '../ButtonElements';
import {
  ContentHeaderContainer,
  ContentHeaderBg,
  VideoBg,
  ContentHeaderContent,
  ContentHeaderH1,
  ContentHeaderP,
  ContentHeaderBtnWrapper,
  Icon
  // ArrowForward,
  // ArrowRight
} from './ContentHeaderElements';

// Setting a state for when you hover over the button
const ContentHeaderSection = () => {
// const [hover, setHover] = useState(false)
// const onHover = () => {
//   setHover(!hover)
// }

  return (
    <ContentHeaderContainer>
      <ContentHeaderBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ContentHeaderBg>
      <ContentHeaderContent>
        <ContentHeaderH1></ContentHeaderH1>
        <ContentHeaderP></ContentHeaderP>
        <Icon to='/' >Back to Home</Icon>
        <ContentHeaderBtnWrapper>
          
          {/* <Button to='/' onMouseHover={onHover} onMouseLeave={onHover} 
         // This is where you add your primary and dark functions if you want to test in live time.
          >Home {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </ContentHeaderBtnWrapper>
      </ContentHeaderContent>
    </ContentHeaderContainer>
  )
}

export default ContentHeaderSection