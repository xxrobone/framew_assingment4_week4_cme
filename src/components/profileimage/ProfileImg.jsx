import React from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    margin: 1rem;
    width: 2.625rem;
    height: 2.625rem;
    display: grid;
    place-content: center;
    border-radius: 50%;
    overflow: hidden;
    /* background: linear-gradient(to top, #1D1E22,#393939); */

    @media screen and (min-width: 769px) {
      width: 3.125rem;
      height: 3.125rem;
        }

    &>img {
        padding-top: 1rem;
        background: linear-gradient(to top, #1D1E22,#393939);
        width: 100%;
        height: 100%;
    }
`

const ProfileImg = ({img}) => {
  return (
    <ProfileContainer>
    <img src={img} alt='' />
</ProfileContainer>
  )
}

export default ProfileImg