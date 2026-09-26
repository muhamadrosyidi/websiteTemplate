'use client'

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Container, Logo, Desc, SocialContainer, SocialIcon} from '../footer/footerStyle'
import {
      instagram,
      whatsapp,
      brandName,
      footerDescription,
      whatsappIconColor,
      instagramIconColor
    } from '../../../Data/data.js'

const Footer = () => {
    return (
      <Container>
              <Logo>{brandName}</Logo>
              <Desc>
                  Stay Connected with Us
              </Desc>
              <SocialContainer>
                  <SocialIcon color={whatsappIconColor} onClick={
                    (e)=>{
                      e.preventDefault();
                      window.location.href={whatsapp}
                    }}>
                      <WhatsAppIcon />
                  </SocialIcon>
                  <SocialIcon color={instagramIconColor} onClick={
                    (e)=>{
                      e.preventDefault();
                      window.location.href={instagram}
                    }}>
                      <InstagramIcon />
                  </SocialIcon>
              </SocialContainer>
      </Container>
    )
};

export default Footer
