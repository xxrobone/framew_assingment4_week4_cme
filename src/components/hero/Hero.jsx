import React from 'react'
import styled from 'styled-components'
import BGDESK from '../../assets/hero_desktop.png'
import BGMobile from '../../assets/hero_mobile.png'
import { useIsDesktop } from '../../hooks/useMediaQuery'

const HeroWrapper = styled.div`
    margin: 20vh auto 5vh;
    max-width: 800px;

    &>img {
        width: 80%;
        height: auto;
        border-radius: 2.5rem;
    }
`;

const Hero = () => {

    const desktop = useIsDesktop();
  return (
      <HeroWrapper>
          <img src={desktop ? BGDESK : BGMobile } alt="hero image with game characters" />
    </HeroWrapper>
  )
}

export default Hero