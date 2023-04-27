import {useState, useEffect} from 'react'
import styled from 'styled-components'
import CardGame from '../components/cards/CardGame'
import CardItem from '../components/cards/CardItem'
import CardSlider from '../components/cardslider/CardSlider'
import CardSmall from '../components/cards/CardSmall'
import Hero from '../components/hero/Hero'

import GameImg1 from '../assets/images/Image-7.png'
import GameImg2 from '../assets/images/Image-10.png'
import GameImg3 from '../assets/images/Image-6.png'
import GameImg4 from '../assets/images/Image-6.png'
import GameImg5 from '../assets/images/Image-6.png'
import GameImg6 from '../assets/images/Image-6.png'
import RightSide from '../components/rightside/RightSide'

import Library from '../components/rightside/Library'
import CardGameItem from '../components/cards/CardGameItem'
import Img1 from '../assets/images/Image-10.png'
import Img2 from '../assets/images/Image-4.png'
import Img3 from '../assets/images/Image-6.png'
import ImgOnline1 from '../assets/images/Image-5.png'
import ImgOnline2 from '../assets/images/Image-8.png'
import ImgOnline3 from '../assets/images/Image-5.png'
import Mail from '../components/rightside/Mail'
import Online from '../components/rightside/Online'
import CardOnline from '../components/cards/CardOnline'


// challenge myself to try to implement a more unique and professional design

// sidebar / nav left
// hero top
// sidebar right library
// sidebar right mail
// sidebar right online friends

// card best gaming headset
// slider recently played

const DashboardMain = styled.div`
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

const cardsList = () => {
  return (
    <>
        <CardSmall img={GameImg2} />
          <CardSmall img={GameImg3} />
          <CardSmall img={GameImg4} />
          <CardSmall img={GameImg5} />
          <CardSmall img={GameImg6} />
    </>
  )
}

const Dashboard = ({ games }) => {
  const [gamesLibrary, setGamesLibrary] = useState([])

  console.log('these are my games from library \n' + gamesLibrary.map((game) => console.log('\n ' + game.name + game.background_image)))

useEffect(() => {
    const mygames = JSON.parse(localStorage.getItem('mygames'));
    if (mygames) {
      setGamesLibrary(mygames);
    } else {
        setGamesLibrary([])
    }
}, [])
  
  return (
    <>
    <DashboardMain>
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
        </CardSlider>
        </section>
      </div>
      </article>
        <RightSide>
        <Library>
       {/*  <CardGameItem img={Img1} title='Minecraft' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img2} title='Assassins creed' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img3} title='Fortnite' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img3} title='Fortnite' platforms='xbox, ps5, pc' />
        <CardGameItem img={Img3} title='Fortnite' platforms='xbox, ps5, pc' /> */}
             {gamesLibrary.map((game) => 
            (
              <CardGameItem title={game.name} img={game.background_image} platforms='xbox, ps, pc' />
            ))}
      </Library>
      <Mail />
      <Online>
        <CardOnline img={ImgOnline1} title='YeahBoi2023' playing='Fortnite'/>
        <CardOnline img={ImgOnline2} title='KidRage06' playing='Rocket League'/>
        <CardOnline img={ImgOnline3} title='OldManAim75' playing='Warzone 2.0'/>
        <CardOnline img={ImgOnline3} title='OldManAim75' playing='Warzone 2.0'/>
        <CardOnline img={ImgOnline3} title='OldManAim75' playing='Warzone 2.0'/>
      </Online>
      </RightSide>
      <div className="bg_ellipse"></div>
      </DashboardMain>
      </>
  )
}

export default Dashboard