import React from 'react'
import styled from 'styled-components'
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: orange;
`

const Vga = () => {
  return (
      <VgaMain>
          <h1>vga</h1>
    </VgaMain>
  )
}

export default Vga