import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../assets/icons/akar-icons_chevron-right.svg'
import CardBg from '../../assets/images/Image-0.png'
import CardHeadSet from '../../assets/images/Image-1.png'

// headline Best gaming headset icon arrow right


const CardItemContainer = styled.div`
    margin-top: 5rem;
    position: relative;
    width: 358px;
    height: 440px;
    align-self: flex-start;
    border-radius: 40px;
    background: linear-gradient(to top left, #15151580 40%, #bd090978);
    overflow: hidden;

    &>div {
      margin-top: 2rem;
      display: flex;
      align-item: center;
      justify-content: center;
      

      h2 {
        font-size: 1.125rem;
        font-weight: 600;
      }

      &>img {
        margin-top: 0.1rem;
      margin-left: 1rem;
      width: 24px;
      height: 24px;
    }
    }

    

    &>.card_bg {
      margin: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.175;
      z-index: -1;
    }

    &>.card_img {
      width: 80%;
      height: auto;
      position: absolute;
      top: 15%;
      left: 40%;
      transform: translateX(-50%) rotate(-5deg);
    }
`

const CardItem = () => {
  return (
    <CardItemContainer>
      <div><h2>Best Gaming Headset</h2><img src={ArrowIcon} alt="" /></div>
      <img className='card_bg' src={CardBg} alt="" />
      <img className='card_img'  src={CardHeadSet} alt="" />
          
    </CardItemContainer>
  )
}

export default CardItem