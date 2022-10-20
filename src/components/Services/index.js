//Creating and importing cards into the services section
import React from 'react';
// import Icon1 from '../../images/1.jpg';
// import Icon2 from '../../images/2.jpg';
// import Icon3 from '../../images/3.jpg';
import Icon4 from '../../images/4.jpg';
import Icon6 from '../../images/6.jpg';
import Icon8 from '../../images/8.jpg';


import { ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer >
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Photography</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon8}/>
                <ServicesH2>Videography</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Content Creation</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services