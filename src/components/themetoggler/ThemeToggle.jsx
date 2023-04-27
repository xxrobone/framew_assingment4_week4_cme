import React from 'react'
import styled from "styled-components"
import { RiSunLine, RiMoonLine } from 'react-icons/ri'

const SunLight = styled(RiSunLine)`
outline:none;
width: 32px;
height: 32px;
`
const MoonDark = styled(RiMoonLine)`
outline: none;
width: 32px;
height: 32px;
`

const Button = styled.button`
padding: 0.3rem;
  margin: 1rem;
  width: 2.625rem;
  height: 2.375rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.btnColor};
  background: ${({ theme }) => theme.btnBg};
  border-radius: 50%;
  border:none;
  outline: none;
  cursor: pointer;
  

    @media screen and (min-width: 769px) {
          width: 3.438rem;
          height: 3.125rem;
        }

    &:hover {
      cursor: pointer;
    }
  
`;

const ThemeToggle = ({theme,  toggleTheme }) => {
    return (
      <>
      <Button onClick={toggleTheme}>
      {theme === "light" ?
      <MoonDark style={{ fill: "#828282" }}></MoonDark>
      :<SunLight style={{ fill: "#eeeeee" }}></SunLight>
    } 
    </Button>

    
    </>
    );
};

export default ThemeToggle;