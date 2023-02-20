import React from 'react'
import styled from 'styled-components'
import Btn from '../buttons/Btn/Btn'

const StyledHeader = styled.header`
postition: absolute;
top: 0;
left: 0;
height: 10vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-transform: uppercase;
background: linear-gradient(40deg, #484848, #121212);
background-repeat: no-reapeat;

@media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const Logo = styled.h1`
font-size: clamp(1rem, 1.4vw, 2rem);
letter-spacing: 2px;
color: white;
text-shadow: 0px 3px 3px rgba(0,0,0,0.7);
z-index: 5;
`;

const Header = ({children}) => {

    return ( 
        <StyledHeader >
            <Logo>VGS - video game search</Logo>
            {children}
    </StyledHeader>
     );
}
 
export default Header;