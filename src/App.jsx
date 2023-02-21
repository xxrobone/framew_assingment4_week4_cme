import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header/Header'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import { RiSearch2Line } from 'react-icons/ri'

// styles
const MainPage = styled.div`
height: 100vh;
display: flex;
align-items: center;
flex-flow: wrap;
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

const Form = styled.form`
  position: relative;
  width: unset;
  height: 100%;
  display: flex;
  align-items: center;


.submit_btn {
  position: relative;
  background-color: transparent;
  color: #ffffff;
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


const API_URL = import.meta.env.VITE_APP_API_URL
const API_KEY = import.meta.env.VITE_APP_API_KEY
const API_GAMES = `${API_URL}?key=${API_KEY}`
const API_SEARCH = `${API_URL}?key=${API_KEY}&search=`


function App() {
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
        console.log(data.results)
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


  return (
    <BrowserRouter>
    <MainPage>
        <Header />
        <Routes>
          <Route path='/' element={<Home games={games} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />} />
          <Route path="/games/:gameId" element={<GameDetails games={games} />} />
        </Routes>
      </MainPage>
      </BrowserRouter>
  );   
}

export default App;
