import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

const Vids = () => {
  return (
 <Container>
    <div>
        <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/7foBxJZQymY" title="YouTube video" allowFullScreen></iframe>
</div>
    </div>
   </Container>
  )
}

export default Vids

