import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {RiPlaystationLine, RiXboxFill, RiMacLine, RiWindowsFill, RiAndroidLine, RiAppleFill } from 'react-icons/ri'
import {DiLinux } from 'react-icons/di'
import {SiNintendo } from 'react-icons/si'


 const GameCard = styled.li`
  position: relative;
  margin: 1.5rem 0.5rem;
  max-width: 16rem;
  height: 16rem;
  background-color: rgb(255, 255, 255);
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  color: #2e2e2e;

  @media screen and (min-width: 769px) {
    margin: 1.5rem 2rem;
  }
 
&>h4 {
  height: fit-content;
  font-size: .8rem;
  overflow: hidden;
}

 
.game-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem 0.5rem;
}

&>img {
  width: 100%;
  height: 146px;
  top:0;
}

span {
  font-size: 1rem;
  padding: 0.2rem;
}

&>a {
  &>p {
    padding: 0.25rem 0.5rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.6rem;
    color: #f2f0f0;
    background-color: black;
  }
}
 `;
/*
 &>.game-review {
    position: absolute;
  background: #e1e2e3;
  color: black;
  padding: 1rem 1rem;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(100%) translateX(100%) rotate(20deg);
  transition: transform 0.8s ease-in-out;
  overflow: hidden;
 }

 &:hover .game-review {
    opacity: 1;
  }
  &:focus .game-review {
      opacity: 1;
  }

  .game:hover .game-review {
    transform: translateY(0%) translateX(0%);
  }
`;
 */



const GameItem = ({game}) => {  


  return(    
      <GameCard className="game" >
      <img src={game.background_image} alt={game.name} />
            <div className="game-info">
              <h4>{game.name.toUpperCase()}</h4>
              <div>
                <span>Score: {game.rating}/5</span>
                {game.parent_platforms.map(p => 
                  (
                    <>
                     <span key={game.id + p.platform.name}>{p.platform.name 
                    ?
                     (p.platform.name === 'PC' ? <RiWindowsFill /> : null
                    ||  p.platform.name === 'PlayStation' ? <RiPlaystationLine /> : null
                    || p.platform.name === 'Xbox' ?  <RiXboxFill />  : null 
                    || p.platform.name === 'Nintendo'?  <SiNintendo /> : null
                    || p.platform.name === 'Apple Macintosh' ? <RiMacLine /> : null
                    || p.platform.name === 'Linux' ? <DiLinux /> : null
                    || p.platform.name === 'Android' ?  <RiAndroidLine /> : null
                    || p.platform.name === 'iOS' ? <RiAppleFill /> : null
                    )   : p.platform.name          
                    }</span>
                    </>
                  ))}
              </div>              
              
              </div>
  
            
             <div className="game-review">
              {game.shot_screenthot} 
              {/* 
              was thinkin of adding trailers, but its premium price plan
              {game.clip && <ReactPlayer url={game.clip.clip}
              playing={false}
              width={240}
              height={180}
              controls = {true} */}             
          </div> 
          <Link to={`/games/${game.id}`}>
                      <p>
                        Read more...</p>                    
                    </Link>
      </GameCard>
  );
}


export default GameItem;


/* 
How I checked platforms and replaced them with icons 

     p.platform.name === 'Nintendo'?  <SiNintendo /> : null
     p.platform.name === 'Apple Macintosh' ? <RiMacLine /> : null
     p.platform.name === 'Linux' ? <DiLinux /> : null
     p.platform.name === 'Android'?  <RiAndroidLine /> : null
     p.platform.name === 'iOS' ? <RiAppleFill /> : null
      {game.parent_platforms.map(p => 
                  (
                    <>
                    <span key={Math.random() * 123}>{p.platform.name 
                    || p.platform.name === 'PC' ? <RiWindowsFill /> : ''
                    ||  p.platform.name === 'PlayStation' ? <RiPlaystationLine /> : ''
                    || p.platform.name === 'Xbox' ?  <RiXboxFill /> : ''                    
                    }</span>
                    </>
                  ))}
 
  */