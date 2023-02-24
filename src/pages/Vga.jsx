import React from 'react'
import styled from 'styled-components'
import CardGame from '../components/cards/CardGame'
import CardItem from '../components/cards/CardItem'
import CardSlider from '../components/cardslider/CardSlider'
import CardSmall from '../components/cards/CardSmall'

import GameImg1 from '../assets/images/Image-7.png'
import GameImg2 from '../assets/images/Image-10.png'
import GameImg3 from '../assets/images/Image-6.png'
import GameImg4 from '../assets/images/Image-6.png'
import GameImg5 from '../assets/images/Image-6.png'
import GameImg6 from '../assets/images/Image-6.png'
import RightSide from '../components/rightside/RightSide'
// this is from getting an idea from developer Fredrik Carlsson
// challenge myself to try to implement a more unique and professional design

// sidebar / nav left
// hero top
// sidebar right library
// sidebar right mail
// sidebar right online friends

// card best gaming headset
// slider recently played

const VgaMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 8.75rem;
  left: 3.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  /* background: linear-gradient(to bottom, #1d1e22c3, #39393939); */
  /* background: linear-gradient(to bottom, #000000, #38393D); */

  &>article {
    display: flex;
    flex-direction: column;
    &>div {
      display: flex;
      flex-direction: row;
  
      &>section {
      margin-top: 5rem;
      margin-left: 5rem;
      display: flex;
      flex-direction: column;
  
      h4 {
        text-align: left;
        margin-bottom: 1.5rem;
          font-size: 1.125rem;
          font-weight: 600;
        }
    }
    }
  }

  

  &>.bg_ellipse {
  width: 840px;
  height: 840px;
  position: absolute;
  left: 80vw;
  top: 70vh;
  z-index: -1;
  border-radius: 50%;
  background-color: #067D714D;
  filter: blur(200px);
  pointer-events: none;
}
`



const Vga = ({ games }) => {
  
  return (
    <VgaMain>
      <article>
      <CardGame />
      <div>
        <CardItem />
        <section>
          <h4>Recently played games</h4>
            <CardSlider>
              {games.map((g => { 

                return (
                  < CardSmall img = { g.background_image } title = { g.name } />

                )
               } ))}
          {/* <CardSmall img={GameImg2} />
          <CardSmall img={GameImg3} />
          <CardSmall img={GameImg4} />
          <CardSmall img={GameImg5} />
          <CardSmall img={GameImg6} /> */}
        </CardSlider>
        </section>
      </div>
      </article>
      <RightSide />
      <div className="bg_ellipse"></div>
      </VgaMain>
  )
}

export default Vga