import React from 'react'
import styled from 'styled-components'
import ShopIcon from '../../../assets/icons/akar-icons_cart.svg'

// button bg 3DBDA7
// hover radial 3DBDA7 067D71
// color white

const Btn = styled.button`
    width: 120px;
    height: 42px;
    background-color: #3DBDA7;
    border-radius: 73px;
    display: flex;
    align-items: center;
    justify-content: center;

    &>img {
      margin-right: 0.5rem;
      width: 24px;
      height: 24px;
    }

    &>h4 {
      font-size: 0.75rem;
      font-weight: 700;
    }

`





const ShopButton = () => {
  return (
    <Btn>
      <img src={ShopIcon} alt="shopping card svg" />
      <h4>Add to cart</h4>
    </Btn>
  )
}

export default ShopButton