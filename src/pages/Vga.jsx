import React from 'react'
import styled from 'styled-components'
import CardGame from '../components/cards/CardGame'
import CardItem from '../components/cards/CardItem'
// this is from getting an idea from developer Fredrik Carlsson
// challenge myself to try to implement a more unique and professional design

// sidebar / nav left
// hero top
// sidebar right library
// sidebar right mail
// sidebar right online friends

// card best gaming headset
// slider recently played

const VgaMain = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 8.75rem;
  left: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &>.bg_ellipse {
  width: 840px;
  height: 840px;
  position: absolute;
  left: 80vw;
  top: 70vh;
  z-index: -1;
  border-radius: 50%;
  background-color: #067D714D;
  filter: blur(200px);
}
`



const Vga = () => {
  return (
      <VgaMain>
      <CardGame />
      <CardItem />
      <div className="bg_ellipse"></div>
      </VgaMain>
  )
}

export default Vga