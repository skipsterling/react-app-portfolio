import React from 'react';
import { FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink} from './FooterElements';

const Footer = () => {
  return (
<FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Socials</FooterLinkTitle>
                        <FooterLink to='contact'>Instagram</FooterLink>
                        <FooterLink to='contact'>Facebook</FooterLink>
                        <FooterLink to='contact'>Email</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='contact'>How It Works</FooterLink>
                        <FooterLink to='contact'>Testimonials</FooterLink>
                        <FooterLink to='contact'>Careers</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Socials</FooterLinkTitle>
                        <FooterLink to='contact'>Instagram</FooterLink>
                        <FooterLink to='contact'>Facebook</FooterLink>
                        <FooterLink to='contact'>Email</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Me</FooterLinkTitle>
                        <FooterLink to='contact'>Instagram</FooterLink>
                        <FooterLink to='contact'>Facebook</FooterLink>
                        <FooterLink to='contact'>Email</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer