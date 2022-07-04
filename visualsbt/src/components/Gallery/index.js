import React from 'react';
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/5.jpg';
import Img4 from '../../images/4.jpg';

import {
  Container,
  Column1,
  Column2,
  Column3,
  Column4,
  Img,
  Header
  
} from './GalleryElements';

const PhotoGallery = () => {
  return (
    <div>
      <Header>IMAGES</Header>
      <Container>
       
        <Column1><Img src={Img1} /></Column1>
        <Column2><Img src={Img2}/></Column2>      
        <Column3><Img src={Img3}/></Column3>     
        <Column4><Img src={Img4} /></Column4>
        
      </Container>
      <Container>
       
       <Column1><Img src={Img1} /></Column1>
       <Column2><Img src={Img2}/></Column2>      
       <Column3><Img src={Img3}/></Column3>     
       <Column4><Img src={Img4} /></Column4>
       
     </Container>
     <Container>
       
       <Column1><Img src={Img1} /></Column1>
       <Column2><Img src={Img2}/></Column2>      
       <Column3><Img src={Img3}/></Column3>     
       <Column4><Img src={Img4} /></Column4>
       
     </Container>
    </div>
  )
}

export default PhotoGallery