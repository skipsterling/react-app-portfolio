import React from 'react';
import Content from '../components/Content';
import ContentHeader from '../components/ContentHeader';
import Gallery from '../components/Gallery';

const ContentPage = () => {
  return (
    <div>
      <ContentHeader />
        <Content />
        <Gallery />
    </div>
  )
}

export default ContentPage