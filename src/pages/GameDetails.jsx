import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiPlaystationLine, RiXboxFill, RiMacLine, RiWindowsFill, RiAndroidLine, RiAppleFill } from 'react-icons/ri'
import { DiLinux } from 'react-icons/di';
import { SiNintendo } from 'react-icons/si';


const Details = styled.div`
margin: 8.725rem auto 4.125rem;
max-width: 800px;
display: flex;
align-items: center;
flex-flow: wrap;

&>div {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &>h1 {
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
}

  &>img {
    width: 80%;
    height: 40%;
    top:0;
    border-radius: 3.125rem;
  }

  &>h4 {
    height: fit-content;
    font-size: .8rem;
    overflow: hidden;
  }
  
   
  .game_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.25rem 0.5rem;
  }  
  
  span {
    font-size: 1rem;
    padding: 0.2rem;
  }

  .icon {
    font-size: 2rem;
  }
}

.date {
  color: #888;
}

.thumbnails {
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top left, #252525, #2c2c2c, #1f1f1f);
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.185);
  border-radius: 2rem;

  .thumbnail {
    margin: 1rem;
    max-width: 25%;
    height: auto;
    border-radius: 2rem;
  }
}

.go_back {
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  width: 40%;
  text-align: center;
  border: 1px solid #888;
  border-radius: 2rem;

  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: #e2e2e2;
    color: #282828;
  }
}
 `;

const GameDetails = ({games}) => {
  const { gameId } = useParams();
  console.log(gameId)

  return (
    <>
    <Details>     
       
        {games && games.map((game) => {
          if (game.id == gameId) {
            return (
              <div>
                 <h1>{game.name.toUpperCase()}</h1> 
                   <img src={game.background_image} alt={game.name} />
                <div className="game_info">
                  <span>Score: {game.rating}/5</span>
                  <span className='date'>Relased: {game.released}</span>
                  <div>
                      {game.parent_platforms.map(p => 
                        (
                          <>
                          <span className='icon' key={game.id + p.platform.name}>{p.platform.name 
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
                <div className='thumbnails'>
                {game.short_screenshots.map(s => (
                  <img className='thumbnail' src={s.image} alt='thumbnail' />
                ))}

                </div>
            </div> 
            )
          }
           
        })}
        <Link to='/' className='go_back'> Go back </Link>
    </Details>
    
    </>
  );
};

export default GameDetails;
