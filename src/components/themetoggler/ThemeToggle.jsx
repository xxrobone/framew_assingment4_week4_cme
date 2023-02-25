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
  background: transparent;
  color: ${({ theme }) => theme.btnColor};
  border-radius: 50%;
  border:none;
  cursor: pointer;
  padding: 0.3rem;
  position: fixed;
  top: 3.625rem;
  left: 1vw;
  z-index: 50;
  outline: none;
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