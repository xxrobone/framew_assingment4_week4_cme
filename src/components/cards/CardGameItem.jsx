import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
margin: 1rem 0;
width: 18.25rem;
height: 4rem;
display: flex;
align-items: center;
/* background-color: #23212262; */
border-radius: 1rem;
border: 2px solid transparent;

&:hover {
    transition: all 0.4s ease;
        cursor: pointer;
        border: 2px solid #888;
    }

&>.small_img {
    margin-right: 1rem;
    width: 4rem !important;
    height: 4rem;
    object-fit: cover;
    object-position: 10% 20%;
    border-radius: 1rem;
}

&>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &>h4 {
        font-size: 1rem;
        font-weight: 400;
    }

    &>p {
        font-size: 0.6rem;
        font-weight: 500;
        color: #888;
        /* color: #969696; */
    }

}
`

const CardGameItem = ({img, title, platforms}) => {
  return (
      <CardContainer>
          <img className='small_img' src={img} alt="" />
          <div>
          <h4>{title}</h4>
              <p>{platforms}</p>
          </div>
          </CardContainer>
  )
}

export default CardGameItem