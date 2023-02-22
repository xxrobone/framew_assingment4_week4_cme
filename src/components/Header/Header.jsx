import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
margin-top: 2.25rem;
padding: 0 2.625rem;
position: absolute;
top: 0;
right: 0;
height: 10vh;
width: calc(100% - 125px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-transform: uppercase;
background-color: transparent;

&>div {
  display: flex;
  flex-direction: row;
}

@media screen and (min-width: 769px) {
    padding: 0 2.625rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

/* const Logo = styled.h1`
font-size: clamp(1rem, 1.4vw, 2rem);
letter-spacing: 2px;
color: white;
text-shadow: 0px 3px 3px rgba(0,0,0,0.7);
z-index: 5;
`; */



const Header = ({children}) => {

    return ( 
        <StyledHeader>
            {/* <Logo>VGS - video game search</Logo> */}
            {children}
        </StyledHeader>
     );
}
 
export default Header;