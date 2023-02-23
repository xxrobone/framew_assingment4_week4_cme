import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
margin: 2.25rem auto 0;
position: absolute;
top: 0;
left: 10.625rem;
height: 10vh;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-transform: uppercase;
background-color: transparent;

@media screen and (min-width: 769px) {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
  }

&>div {
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 769px) {
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
  }
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
            {children}
        </StyledHeader>
     );
}
 
export default Header;