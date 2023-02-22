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
  position: absolute;
  top: 8.75rem;
  left: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Vga = () => {
  return (
      <VgaMain>
      <CardGame />
      <CardItem />
      </VgaMain>
  )
}

export default Vga