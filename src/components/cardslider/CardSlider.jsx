import React from 'react'
import styled from 'styled-components'

const Slider = styled.div`
 width: 400px;
 height: 400px;
 overflow: hidden;

 &>div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
 }
`

const CardSlider = ({children}) => {
  return (
      <Slider>
          <div>
              {children}
          </div>
    </Slider>
  )
}

export default CardSlider