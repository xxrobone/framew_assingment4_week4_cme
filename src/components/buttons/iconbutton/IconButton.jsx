import React from 'react'
import styled from 'styled-components'
import ChatAddIcon from '../../../assets/icons/akar-icons_chat-add.svg'

// 3 different sizes 38 / 55 50 / 50 / 70
// form round / round-oval / square / round
// icon or img
// colors
// square 1D1E22 hover: 2E3030 linear gradient top to bottom
// big icon and + 3DBDA7  hover: radial 3DBDA7 - 067D71
// round dark linear 393939 1D1E22

// arrow down stroke 067D71 background-radial quarter round top right

const Button = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #3DBDA7;

    &>img {
        width: 38px;
        height: 38px;
    }
`



const IconButton = () => {
  return (
        <Button>
          <img src={ChatAddIcon} alt="" />
        </Button>
  )
}

export default IconButton