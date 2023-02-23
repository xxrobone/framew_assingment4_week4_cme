import React from 'react'
import styled from 'styled-components'

const CardOnlineContainer = styled.div`
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

&>.profile_img {
    margin-right: 1rem;
    width: 2.625rem;
    height: 2.625rem;
    display: grid;
    place-content: center;
    object-fit: cover;
    object-position: 10% 20%;
    border-radius: 50%;
    padding-top: 1rem;
    background: linear-gradient(to top, #1D1E22,#393939);

    @media screen and (min-width: 769px) {
      width: 3.125rem;
      height: 3.125rem;
        }
}

&>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &>h4 {
        margin-top: 0.5rem;
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

const CardOnline = ({img, title, playing}) => {
  return (
      <CardOnlineContainer>
          <img className='profile_img' src={img} alt="" />
          <div>
          <h4>{title}</h4>
              <p>Playing {playing}</p>
          </div>
          </CardOnlineContainer>
  )
}

export default CardOnline