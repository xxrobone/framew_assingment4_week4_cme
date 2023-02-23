import React from 'react'
import styled from 'styled-components'
import ShopButton from '../buttons/shopbutton/ShopButton'
// card with a img going over the card, add to card button and price
import CardBg from '../../assets/images/Image-9.png'
import CardCharacter from '../../assets/images/Image-2.png'

// release year box
// title big 40px SemiBold
// price and add to cart button container


const CardGameContainer = styled.div`
    position: relative;
    max-width: 53.125rem;
    max-height: 20rem;
    border-radius: 3.125rem;

    /* &:hover {
      border: 2px solid #888;
    } */

    &>div {

      &>img {
        border-radius: 3.125rem;
        opacity: 0.5;
      }
    }

    &>img {
      position: absolute;
      bottom: 0;
      right: 2.5rem;
    }
`


const CardInfo = styled.div`
  margin: 1rem 0 3.5rem 4rem; 
  padding: 1rem;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  &>div {
    width: unset;
  }
`
const CardYear = styled.div`
padding: 0.5rem 0.5rem;
width: fit-content;
position: relative;
 font-size: 0.7rem;
 font-weight: 700;
 background: linear-gradient(to top left, #C13509, #FAA525);
 border-radius: 6px;
`
const CardTitle = styled.div`
  margin: 0.5rem 0 1rem;
  position: relative;
 font-size: 2.5rem;
 font-weight: 600;
 text-align: left;
 line-height: 1.25;
`

const AddToCardContainer = styled.div`
  padding: 0 0.5rem;
  min-width: 15rem;
  height: 3.5rem;
  position: relative;
  /* left: 4rem;
  bottom: 3.5rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #071B24 5%, #0D2028 10%, #575757D4 );
  border: none;
  outline: none;
  border-radius: 42px;

&>span {
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: 400;
}
`


const CardGame = ({img}) => {
  return (
    <CardGameContainer>
      <div>
        <img src={CardBg} alt="" />
      </div>
      <img src={CardCharacter} alt="" />
      <CardInfo>

        <div>
        <CardYear>
          2020
        </CardYear>
        <CardTitle>
          Assassins creed valhalla
        </CardTitle>

        </div>
      <AddToCardContainer>
        <span>29$</span>
        <ShopButton />
      </AddToCardContainer>

      </CardInfo>
    </CardGameContainer>
  )
}

export default CardGame