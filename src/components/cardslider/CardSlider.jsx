import React from 'react'
import styled from 'styled-components'

const Slider = styled.div`
 width: 400px;
 height: 400px;
 overflow: hidden;

 &>div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
 }
`

const CardSlider = () => {
  return (
      <Slider>
          <div>
              
          </div>
    </Slider>
  )
}

export default CardSlider