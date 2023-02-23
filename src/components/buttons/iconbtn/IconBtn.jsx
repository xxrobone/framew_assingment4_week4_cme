import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
    margin: 1rem;
    width: 55px;
    height: 50px;
    display: grid;
    place-content: center;
    border-radius: 50%;

    background: ${props =>  props.dark ? 'linear-gradient(to top, #1D1E22,#393939)' : '#3DBDA7'};


    &>img {
        width: 24px;
        height: 24px;
    }
`

const IconBtn = ({iconImg,dark }) => {
  return (
    <IconContainer dark={dark}>
        <img src={iconImg} alt='' />
    </IconContainer>
  )
}

export default IconBtn