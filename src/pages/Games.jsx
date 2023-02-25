import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header'
import GamesList from '../components/GamesList/GamesList'
import { RiSearch2Line } from 'react-icons/ri'
import Hero from '../components/hero/Hero';
import RightSide from '../components/rightside/RightSide';
import Library from '../components/rightside/Library';
import CardGameItem from '../components/cards/CardGameItem';


const API_URL = import.meta.env.VITE_APP_API_URL
const API_KEY = import.meta.env.VITE_APP_API_KEY
const API_GAMES = `${API_URL}?key=${API_KEY}`
const API_SEARCH = `${API_URL}?key=${API_KEY}&search=`

const GamesPage = styled.div`
    margin-top: 8.75rem;
    margin-left: 3.125rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    &>h1 {
      margin: 2rem 0 1rem;
      font-size: 2.5rem;
      font-weight: 600;
    }

    &>div {
      display: flex;
      flex-direction: column;

      :last-child {
        padding: 3.125rem 0;
      }
    }
`

const Form = styled.form`
  position: relative;
    align-self: center;
  height: 10vh;
  display: flex;
  align-items: center;


.submit_btn {
  position: relative;
  background-color: transparent;
  color: #888;
  border: 0;
  border-radius: 50%;
  outline: none;
  width: 2rem;
  height: 2rem;
  font-size: 1.6rem;
  filter: drop-shadow(1px 1px 4px #121212);

  :hover,
  :focus {
    cursor: pointer;
    background-color: black;
  } 
}
`;

const Input = styled.input`
margin: 0 1rem;
padding: 4px 6px;
font-size: 1rem;
border: 0;
border-radius: 5px;
height: 2rem;
outline: none;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.295);
`;


function Games({ games }) {
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

  let game = games[3]
    
  console.log(game)

/* 
  const [games, setGames] = useState([]);
  const[ isLoading, setLoading ] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
 
  

  useEffect(() => {    
    getGames(API_GAMES)
    console.log(games) 
    setLoading(false)
  }, []) 

  const getGames = async(URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (!res.ok) {
        console.log('error getting data');
        return;
      } else {
        setGames(data.results)
      }
    } catch (error) {
      console.log(error + 'something went wrong');
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (searchQuery) {
      getGames(API_SEARCH + searchQuery)

      setSearchQuery('')
    }
  }

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value)
  }
 */



  return (
    <GamesPage>
      <div>
    <Hero />
      {/* <Form onSubmit={handleOnSubmit} id="form1">
            <Input
              className="search" 
                type="text" 
                placeholder="Search games... "
                onChange={handleOnChange}
                value={searchQuery}
                key={games.id}
            />
            <button
              className="submit_btn"
              type="submit"
              form="form1"
              ><RiSearch2Line /></button>
          </Form>          */}
      <h1>GAMES</h1>
        <GamesList games={games} />   
      </div>
      <div>
      <RightSide>
          <Library>
            {gamesLibrary.map((game) => 
            (
              <CardGameItem title={game.name} img={game.background_image} platforms='xbox, ps, pc' />
            ))}
         
        </Library>
      </RightSide>
      </div>
    </GamesPage>
  );
}

export default Games;
