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
        <Header>Wedding Images</Header>
        <Container>
    
          <Column1><Img src='https://drive.google.com/uc?export=view&id=1qW8kuE2TVyqkGk8r-Oaslwy2fHokEGA7' /></Column1>
          <Column2><Img src='https://drive.google.com/uc?export=view&id=1h-pkkIw6XPj74eT-c3vW6_qKb8dfviUj'/></Column2>      
          <Column3><Img src='https://drive.google.com/uc?export=view&id=1A6C1SCA0hYZyFXJHG7Jo0-oU1gSnMmA6'/></Column3>     
          <Column4><Img src='https://drive.google.com/uc?export=view&id=1319nZv5qlA9I6rZl1ZanzdeeCKBQKlqF'/></Column4>
          
        </Container>
        <Container>
         
         <Column1><Img src='https://drive.google.com/uc?export=view&id=1_Xn6XZw1bh-8BLCHClH1SIzsu7LgAfKh' /></Column1>
         <Column2><Img src='https://drive.google.com/uc?export=view&id=1TWRETjdbTFS0Mwy1pJGZW-DDplGmLW8r'/></Column2>      
         <Column3><Img src='https://drive.google.com/uc?export=view&id=1xtgiKvCtl0fhOb6Al15eux8MB1SY_UfM'/></Column3>     
         <Column4><Img src='https://drive.google.com/uc?export=view&id=1Lr4XBZzIk1vUeEb5rzCdNG5Zi7frJOWL' /></Column4>
         
       </Container>
       <Container>
       
         <Column1><Img src='https://drive.google.com/uc?export=view&id=1bYgewgbvJFgkXYj8UIN4XhYYpUDax6cT' /></Column1>
         <Column2><Img src='https://drive.google.com/uc?export=view&id=1Y8YvPexcJibNln6HTGnnS788HfstgBEq'/></Column2>      
         <Column3><Img src='https://drive.google.com/uc?export=view&id=1LS4eJPr2fLSOuwcnzGse5SNV4MM_SUjN'/></Column3>     
         <Column4><Img src='https://drive.google.com/uc?export=view&id=1cu-CyXKIRg3iae1VP0ibbNfjKq5OrXPg' /></Column4>
         
       </Container>
      </div>
    )
  }
  
  export default PhotoGallery