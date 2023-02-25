import React from 'react'
import styled from 'styled-components'
import  BG from '../../assets/images/hero/castle.jpg'
import COD from '../../assets/images/hero/cod.png'
import FORTNITE from '../../assets/images/hero/fortnite.png'
import ZELDA from '../../assets/images/hero/zelda.png'
import MARIO from '../../assets/images/hero/mario.png'
import { useIsDesktop } from '../../hooks/useMediaQuery'

const HeroWrapper = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;     
    display: grid;
    place-content: center;  

    &>.headline {
            margin: 0;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%);
            z-index: 10;
            display: grid;
        &>h1 {     
            margin: 0;  
            padding: 3rem 0 0;       
            font-size: 10rem;
            font-weight: 600;
            line-height: 1;
            text-shadow: 2px 2px black;
        }    
    }

`;

const Inner = styled.div`
    position: relative;
    width: 53.125rem;
    height: 40rem;
    border-radius: 3.125rem;

    &>.bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
        border-radius: 3.125rem;
    }

    &>.cod {
        position: absolute;
        bottom: -1%;
        left: 15%;
        width: 80%;
        height: auto;
        object-fit: cover;
        opacity: 0.4;
    }
    &>.fortnite {
        margin-bottom: -7.5%;
        position: absolute;
        bottom: 0%;
        left: -15%;
        width: 70%;
        height: auto;
        object-fit: cover;
        opacity: 1;
    }

    &>.mario {
        margin-bottom: -1.5rem;
        position: absolute;
        top: -5vh;
        right: -5%;
        width: 20%;
        height: auto;
        object-fit: cover;
        opacity: 1;
    }

    &>.zelda {
        position: absolute;
        bottom: -0.5%;
        right: 5%;
        width: 30%;
        height: auto;
        object-fit: cover;
        opacity: 1;
    }
`

const Hero = () => {
    const desktop = useIsDesktop();

  return (      
      <HeroWrapper>
          <div className='headline'>
          <h1>VGA</h1>          
          </div>
        <Inner>
          <img className='bg' src={BG} alt="" />          
          <img className='cod' src={COD} alt="" />          
          <img className='fortnite' src={FORTNITE} alt="" />          
          <img className='mario' src={MARIO} alt="" />          
          <img className='zelda' src={ZELDA} alt="" />                  
        </Inner>
    </HeroWrapper>
  )
}

export default Hero