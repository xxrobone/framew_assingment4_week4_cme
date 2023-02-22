import React from 'react'
import styled from 'styled-components'
import Library from './Library'
import CardGameItem from '../cards/CardGameItem'
import Img1 from '../../assets/images/Image-10.png'

const SidebarContainer = styled.div`
// had to count header padding + 1rem margin for icons to adjust right side distance
    margin-left: 5.725rem;
    padding: 1rem;
    height: 825px;
    width: 334px; 
    background: linear-gradient(to left top, #252525, #2C2C2C, #1f1f1f );
    border-radius: 2.5rem;
`

const RightSide = () => {
  return (
    <SidebarContainer>
      <Library>
        <CardGameItem img={Img1} title='Minecraft' platforms='xbox, ps5, pc' />
      </Library>
    </SidebarContainer>
  )
}

export default RightSide