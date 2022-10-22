import React from 'react'
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  ColumnOne,
  TextWrapper,
  TopLine,
  Header,
  Subtitle,
  ColumnTwo,
  ImgWrap,
  Img

} from './AboutElements';

const aboutComp = () => {
  return (
    <div>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <ColumnOne>
            <TextWrapper>
              <TopLine>About Me</TopLine>
              <Header>Thomas Sterling James</Header>
              <Subtitle>My about me section will go here.</Subtitle>
            </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
            <ImgWrap>
            <Img src={src} alt={alt}/>
            </ImgWrap>
            </ColumnTwo>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
      </div>
  )
}

export default aboutComp