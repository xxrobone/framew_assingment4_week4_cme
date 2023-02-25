import React from 'react'
import styled from 'styled-components'


const SidebarContainer = styled.div`
// had to count header padding + 1rem margin for icons to adjust right side distance
    margin-left: 5.725rem;
    padding: 1rem;
    max-height: 52rem;
    max-width: 20.875rem;
    min-width: 18.25rem; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: linear-gradient(to top left, #252525, #2c2c2c, #1f1f1f);
    border-radius: 2.5rem;
    overflow: hidden;
    z-index: 2;

    &>.circle {
      position: absolute;
      top: 20vh;
      left: 5vw;
      width: 52.5rem;
      height: 52.5rem;
      border-radius: 50%;
      background-color: #fffffff;
      z-index: 3;
      pointer-events: none;
    }
`

const RightSide = ({ children }) => {
  return (
    <SidebarContainer>
      {children}
      <div className='circle'></div>
    </SidebarContainer>
  )
}

export default RightSide