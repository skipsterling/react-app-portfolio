import React from 'react';
import Img1 from '../../images/1.jpg';
// import Img2 from '../../images/2.jpg';
import Img9 from '../../images/9.jpg';
import Img10 from '../../images/10.jpg';

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
     
       <Column1><Img src='https://drive.google.com/uc?export=view&id=1fuCA7c-kt72pdmJbqNimvtXokINyUHjT' /></Column1>
       <Column2><Img src='https://drive.google.com/uc?export=view&id=1-9yfSWxHXLgMhlt6XVAueK34KxiUvUaC'/></Column2>      
       <Column3><Img src='https://drive.google.com/uc?export=view&id=1T0HIkgbH_nYb6DqQ0MgZDab0YCEGxB_3'/></Column3>     
       <Column4><Img src='https://drive.google.com/uc?export=view&id=1NPVzKF-KDdWyU_K8Y1rIbjMmUkimtK_9' /></Column4>
       
     </Container>
    </div>
  )
}

export default PhotoGallery