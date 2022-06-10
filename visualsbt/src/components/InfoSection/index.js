import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer,
    InfoWrapper,  
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img
 } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLable, img, alt, primary, dark, dark2, thinText}) => {
  return (
    <>
<InfoContainer lightBg={lightBg} id={id}>
<InfoWrapper>
    <InfoRow imgStart={imgStart}>
        <Column1>
        <TextWrapper>
            <TopLine lightText={lightText} thinText={thinText}>{topline}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle lightText={lightText}>{description}</Subtitle>
            <BtnWrap>
                <Button to='home'
                smooth={true}
                duration={500}
                // adding spy to make sure it knows how to add the active class to it.
                spy={true}
                exact={true}
                // adding an offset so our navbar knows when scrolling hits the next section.
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
                >{buttonLable}</Button>
            </BtnWrap>
        </TextWrapper>
        </Column1>
        <Column2>
        <ImgWrap>
        <Img src={img} alt={alt}/>
        </ImgWrap>
        </Column2>
    </InfoRow>
</InfoWrapper>
</InfoContainer>
    </>
  )
}

export default InfoSection