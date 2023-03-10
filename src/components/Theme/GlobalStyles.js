import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {    
      margin: 0 auto;  
      max-width: 100%;
      min-width: 320px;
      min-height: 100vh;  
      position: relative;
      display: flex;
      place-items: center;
      background: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.color}; 
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
      overflow-x: hidden;

      @media screen and (min-width: 768px) {
            max-width: 80%;
      }
  }
  `;
