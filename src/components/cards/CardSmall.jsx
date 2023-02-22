import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    position: relative;
    margin: 0.75rem 0;
    width: 400px;
    height: 115px; 
    border-radius: 2rem;
    background: black;
    overflow: hidden;
    background-clip: padding-box; 
    border: solid 4px transparent; 

    &:hover {
      border: 2px solid #888;
    }

    &>img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }    
`

const CardSmall = ({img}) => {
  return (
    <CardWrapper>
      <img src={img} alt="" />
    </CardWrapper>
  )
}

export default CardSmall