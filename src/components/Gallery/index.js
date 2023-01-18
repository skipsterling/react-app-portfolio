import React from 'react';
import { Link } from 'react-scroll';
import Img1 from '../../images/1.jpg';
// import Img2 from '../../images/2.jpg';
import Img9 from '../../images/9.jpg';
import Img10 from '../../images/10.jpg';
import CMTS1 from '../../videos/GiveawayReel.mp4';
import CMTS2 from '../../videos/WillTheyFreeze.mp4';
import CMTS3 from '../../videos/melt.mp4';
import CMTS4 from '../../videos/IT.mp4';
import Img13 from '../../images/13.JPG';
import Img14 from '../../images/14.JPG';
import Img15 from '../../images/15.JPG';
import Img16 from '../../images/16.JPG';

import {
  Container,
  Column1,
  Column2,
  Column3,
  Column4,
  Img,
  IconContainer,
  Icon,
  Header,
  Vid,
  CMTH,
  Pics,
  Vids,
  SelectionContainer
  
  
} from './GalleryElements';

const PhotoGallery = () => {
  return (
    <div>
      <Header>Content Creation</Header>
      <IconContainer><Icon to='/' >Back to Home</Icon></IconContainer>
<SelectionContainer>
    <Link to='pics' ><Pics>Images</Pics></Link>
    <Link to='vids' ><Vids>Videos</Vids></Link>
    </SelectionContainer>
      <Container id='pics'>

        <Column1><Img src={Img1} /></Column1>
        <Column2><Img src={Img10}/></Column2>      
        <Column3><Img src={Img9}/></Column3>     
        <Column4><Img src='https://drive.google.com/uc?export=view&id=1rOxu-mh1tvm-SgzbHclKcrFF1Ybbqf4d' /></Column4>
        
      </Container>
      <Container>
       
       <Column1><Img src='https://drive.google.com/uc?export=view&id=11O8QGecU3pVJrBc7FYMCsQfVbPVDrc5d' /></Column1>
       <Column2><Img src='https://drive.google.com/uc?export=view&id=1hHHAkyIYZ3SWSWfD8rfAT-tiEFihA70h'/></Column2>      
       <Column3><Img src='https://drive.google.com/uc?export=view&id=1YAuWf5fJ886l5kyH5QMu8aOPXppXYTpe'/></Column3>     
       <Column4><Img src='https://drive.google.com/uc?export=view&id=1FjgO_l9idFp0ubMY8_RwPbfTciq7_XGl' /></Column4>
       
     </Container>

     <Container>
     
    <Column1><Img src={Img13} /></Column1>
     <Column2><Img src={Img14} /></Column2>      
     <Column3><Img  src={Img15} /></Column3>     
     <Column4><Img src={Img16} /></Column4>
     
   </Container>


     <Container>
     
       <Column1><Img src='https://drive.google.com/uc?export=view&id=1fuCA7c-kt72pdmJbqNimvtXokINyUHjT' /></Column1>
       <Column2><Img src='https://drive.google.com/uc?export=view&id=1-9yfSWxHXLgMhlt6XVAueK34KxiUvUaC'/></Column2>      
       <Column3><Img src='https://drive.google.com/uc?export=view&id=1T0HIkgbH_nYb6DqQ0MgZDab0YCEGxB_3'/></Column3>     
       <Column4><Img src='https://drive.google.com/uc?export=view&id=1NPVzKF-KDdWyU_K8Y1rIbjMmUkimtK_9' /></Column4>
       
     </Container>
<CMTH>CosMediTour Series</CMTH>
    <Container id='vids'>
     
       <Column1><Vid src={CMTS1} autoPlay loop muted></Vid></Column1>
       <Column2><Vid src={CMTS2} autoPlay loop muted></Vid></Column2>      
       <Column3><Vid src={CMTS3} autoPlay loop muted></Vid></Column3>     
       <Column4><Vid src={CMTS4} autoPlay loop muted></Vid></Column4>
       
     </Container>

    </div>
  )
}

export default PhotoGallery