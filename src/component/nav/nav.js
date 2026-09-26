'use client'

import {Container, Wrapper, Left, Logo, StyledLink, Right, Bar, Bur} from '../nav/navStyle'
import {whatsapp, brandName} from '../../../Data/data.js'


const Nav = () => {
    return (
        <Container>
        <Wrapper>
            <Left>
            <Logo>
                <StyledLink href ='/' >{brandName}</StyledLink>
            </Logo>
            </Left>
            <Right>
              <Bur onClick={
                    (e)=>{
                      e.preventDefault();
                      window.location.href={whatsapp}
                    }}>
                Booking
              </Bur>
            </Right>
        </Wrapper>
    </Container>
    )
}

export default Nav
