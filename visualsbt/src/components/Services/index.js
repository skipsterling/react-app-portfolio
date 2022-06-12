//Creating and importing cards into the services section
import React from 'react';
// import Icon1 from '../../images/1.jpg';
import Icon2 from '../../images/2.jpg';
import Icon3 from '../../images/3.jpg';
import Icon4 from '../../images/4.jpg';
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
                <ServicesP>No Niches here. just an all round shooter.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Videography</ServicesH2>
                <ServicesP>No Niches here. just an all round shooter.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Content Creation</ServicesH2>
                <ServicesP>No Niches here. just an all round shooter.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services