import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import Dashboard from './pages/Dashboard';
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
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/GlobalStyles';
import { useDarkMode } from './components/themetoggler/UseDarkMode';
import { lightTheme, darkTheme } from './components/Theme/Themes'
import ThemeToggle from './components/themetoggler/ThemeToggle';

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

const UPCOMING_GAMES = `${API_URL}?key=${API_KEY}&dates=2022-01-01,2023-12-01&ordering=-released&page_size=40`;
const TOP_GAMES = `${API_URL}?key=${API_KEY}&dates=2010-01-01,2023-01-01&ordering=-rating&page_size=20&metacritic=90,100`;
const TOP_LASTYEAR = `${API_URL}?key=${API_KEY}&dates=2022-01-01,2022-12-30&ordering=-rating&page_size=20&metacritic=80,100`;

function App() {
  const [games, setGames] = useState([]);
  const[ isLoading, setLoading ] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


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
      getGames(API_SEARCH + searchQuery);
      setSearchQuery('');
    }
  }

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {    
    getGames(API_GAMES)
    console.log(games) 
    setLoading(false)
  }, []) 
  if (!mountedComponent) return <div />;

  const recentGames = games.slice(0, 5)
console.log(recentGames)

  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={themeMode}>     
        <GlobalStyles />
        <Header>
          <Search games={games} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
            <div>
              <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <IconBtn iconImg={BellIcon} dark />
            <IconBtn iconImg={PaperPlaneIcon} />
            <ProfileImg img={HeaderProfileImg} />
          </div>
        </Header>
        <Sidebar />
        <Routes>
          <Route path='/games' element={<Games games={games} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />} />
          <Route path="/games/:gameId" element={<GameDetails games={games} />} />
          <Route path="/" element={<Dashboard games={recentGames} />} />
          </Routes>
          </ThemeProvider>
          </div>
      </BrowserRouter>
  );   
}

export default App;
