// Footer layout.
import React from 'react';
// Importing smooth scroll
import { animateScroll as scroll } from 'react-scroll';

// Importing our footer style elements into layout.
import { FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink
} from './FooterElements';

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa';



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };
  return (
<FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
               
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='contact'>How It Works</FooterLink>
                        <FooterLink to='contact'>Testimonials</FooterLink>
                        <FooterLink to='contact'>Careers</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Info</FooterLinkTitle>
                        <FooterLink to='contact'>Open Hours</FooterLink>
                        <FooterLink to='contact'>Phone</FooterLink>
                        <FooterLink to='contact'>Email</FooterLink>
                </FooterLinkItems>
                
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>Visuals By Thomas</SocialLogo>
                <WebsiteRights>Visuals By Thomas © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='//www.facebook.com/weddingvisualsbythomas/?ref=pages_you_manage' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='//www.instagram.com/visuals.by.thomas/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='//www.youtube.com/channel/UCyZK6XN6RhhTbpw7kbkJ00Q' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='//www.linkedin.com/in/tom-james-4893b2120/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedinIn />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer