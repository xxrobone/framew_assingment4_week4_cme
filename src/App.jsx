import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import Vga from './pages/Vga';
/* import { RiSearch2Line } from 'react-icons/ri'; */
import BellIcon from './assets/icons/akar-icons_bell.svg'
import PaperPlaneIcon from './assets/icons/cil_paper-plane.svg'
import HeaderProfileImg from './assets/images/Image-5.png'


// sidebar
import Sidebar from './components/sidebar/Sidebar';

// header components
import Header from './components/Header/Header';
import Search from './components/searchbar/Search';
// icons
import IconBtn from './components/buttons/iconbtn/IconBtn';
import ProfileImg from './components/profileimage/ProfileImg';

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

const array = [

    { id: 3498, slug: 'grand-theft-auto-v', name: 'Grand Theft Auto V', released: '2013-09-17', tba: false, },
  
    { id: 3328, slug: 'the-witcher-3-wild-hunt', name: 'The Witcher 3: Wild Hunt', released: '2015-05-18', tba: false, },
  
    { id: 4200, slug: 'portal-2', name: 'Portal 2', released: '2011-04-18', tba: false, },
  
    { id: 5286, slug: 'tomb-raider', name: 'Tomb Raider (2013)', released: '2013-03-05', tba: false, },
  
    { id: 4291, slug: 'counter-strike-global-offensive', name: 'Counter-Strike: Global Offensive', released: '2012-08-21', tba: false, },
  
    { id: 13536, slug: 'portal', name: 'Portal', released: '2007-10-09', tba: false, },
   
    { id: 12020, slug: 'left-4-dead-2', name: 'Left 4 Dead 2', released: '2009-11-17', tba: false, },
  
    { id: 5679, slug: 'the-elder-scrolls-v-skyrim', name: 'The Elder Scrolls V: Skyrim', released: '2011-11-11', tba: false, },
   
    { id: 4062, slug: 'bioshock-infinite', name: 'BioShock Infinite', released: '2013-03-26', tba: false, },
  
    { id: 802, slug: 'borderlands-2', name: 'Borderlands 2', released: '2012-09-18', tba: false, },
   
    { id: 28, slug: 'red-dead-redemption-2', name: 'Red Dead Redemption 2', released: '2018-10-26', tba: false, },
];


function App() {
  const [games, setGames] = useState([]);
  /* const [games, setGames] = useState(array); */
  const[ isLoading, setLoading ] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  console.log(games)
 
  

  useEffect(() => {    
    /* getGames(API_GAMES)
    console.log(games) 
    setLoading(false) */
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
        <Header>
          <Search games={games} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
          <div>
            <IconBtn iconImg={BellIcon}/>
            <IconBtn iconImg={PaperPlaneIcon} dark />
            <ProfileImg img={HeaderProfileImg} />
          </div>
        </Header>
        <Sidebar />
        <Routes>
         {/*  <Route path='/' element={<Home games={games} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />} />
          <Route path="/games/:gameId" element={<GameDetails games={games} />} /> */}
          <Route path="/" element={<Vga />} />
        </Routes>
      </MainPage>
      </BrowserRouter>
  );   
}

export default App;
