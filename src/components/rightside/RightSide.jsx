import React from 'react'
import styled from 'styled-components'
import Library from './Library'
import CardGameItem from '../cards/CardGameItem'
import Img1 from '../../assets/images/Image-10.png'
import Img2 from '../../assets/images/Image-4.png'
import Img3 from '../../assets/images/Image-6.png'
import ImgOnline1 from '../../assets/images/Image-5.png'
import ImgOnline2 from '../../assets/images/Image-8.png'
import ImgOnline3 from '../../assets/images/Image-5.png'
import Mail from './Mail'
import Online from './Online'
import CardOnline from '../cards/CardOnline'

const SidebarContainer = styled.div`
// had to count header padding + 1rem margin for icons to adjust right side distance
    margin-left: 5.725rem;
    padding: 1rem;
    min-height: 52rem;
    max-width: 20.875rem; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: linear-gradient(to top left, #252525, #2c2c2c, #1f1f1f);
    border-radius: 2.5rem;
    overflow: hidden;
    z-index: -1;

    &>.circle {
      position: absolute;
      top: 20vh;
      left: 5vw;
      width: 52.5rem;
      height: 52.5rem;
      border-radius: 50%;
      background-color: #fffffff;
      z-index: 2;
    }
`

const RightSide = () => {
  return (
    <SidebarContainer>
      <Library>
        <CardGameItem img={Img1} title='Minecraft' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img2} title='Assassins creed' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img3} title='Fortnite' platforms='xbox, ps5, pc' />
      </Library>
      <Mail />
      <Online>
        <CardOnline img={ImgOnline1} title='YeahBoi2023' playing='Fortnite'/>
        <CardOnline img={ImgOnline2} title='KidRage06' playing='Rocket League'/>
        <CardOnline img={ImgOnline3} title='OldManAim75' playing='Warzone 2.0'/>
      </Online>
      <div className='circle'></div>
    </SidebarContainer>
  )
}

export default RightSide