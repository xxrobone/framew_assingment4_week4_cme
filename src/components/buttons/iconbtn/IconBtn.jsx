import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
    margin: 1rem;
    width: 2.625rem;
    height: 2.375rem;
    display: grid;
    place-content: center;
    border-radius: 50%;

    @media screen and (min-width: 769px) {
          width: 3.438rem;
          height: 3.125rem;
        }

    background: ${props => props.dark ? 'linear-gradient(to top, #1D1E22,#393939)' : '#3DBDA7'};
    &:hover {
      cursor: pointer;
    }


    &>img {
        width: 1.125rem;
        height: 1.125rem;

        @media screen and (min-width: 769px) {
          width: 1.5rem;
          height: 1.5rem;
        }
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