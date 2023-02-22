import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
        background: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color}; 
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.1s linear;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
  }
  `;
