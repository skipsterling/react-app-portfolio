import React from 'react';
import {
    Container,
    Column1,
    Column2,
    Column3,
    Column4,
    Img,
    Header
    
  } from './WeddingGalleryElements';
  
  const PhotoGallery = () => {
    return (
      <div>
        <Header>IMAGES</Header>
        <Container>
        
        
          <Column1><Img src='https://drive.google.com/uc?export=view&id=1qW8kuE2TVyqkGk8r-Oaslwy2fHokEGA7' /></Column1>
          <Column2><Img src='https://drive.google.com/uc?export=view&id=1cu-CyXKIRg3iae1VP0ibbNfjKq5OrXPg'/></Column2>      
          <Column3><Img src=''/></Column3>     
          <Column4><Img src='' /></Column4>
          
        </Container>
        <Container>
         
         <Column1><Img src='' /></Column1>
         <Column2><Img src=''/></Column2>      
         <Column3><Img src=''/></Column3>     
         <Column4><Img src='' /></Column4>
         
       </Container>
       <Container>
       
         <Column1><Img src='' /></Column1>
         <Column2><Img src=''/></Column2>      
         <Column3><Img src=''/></Column3>     
         <Column4><Img src='' /></Column4>
         
       </Container>
      </div>
    )
  }
  
  export default PhotoGallery