import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/xbox_logo.png'
import IconButton from '../buttons/iconbutton/IconButton'
import HomeIcon from '../../assets/icons/akar-icons_home.svg'
import FriendsIcon from '../../assets/icons/la_user-friends.svg'
import ShopIcon from '../../assets/icons/akar-icons_shopping-bag.svg'
import StarIcon from '../../assets/icons/akar-icons_star.svg'

const SidebarWrapper = styled.div`
    padding: 2.625rem 0;
    width:   4.125rem;
    height: 100svh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;   
    background-color: #1d1e22;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.185);

    @media screen and (min-width: 769px) {
        width: 7.625rem;
  }
  &>a {    
      &>img {
          margin: 1rem auto;
      }
  }  
    &>aside {
        margin-top: 30%;
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const IconContainer = styled.div`
    margin: 1rem 0;
    width: 3.125rem;
    height: 3.125rem;
    display: grid;
    place-content: center;

    &>img {
        width: 1.125rem;
        height: 1.125rem;

        @media screen and (min-width: 769px) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`
const IconWrapper = ({iconImg}) => {
    return (
        <IconContainer>
            <img src={iconImg} alt='' />
        </IconContainer>
    )
}

const Sidebar = () => {
  return (
      <SidebarWrapper>  
         <Link to='/'>  
          <img src={Logo} alt="logo" />
          </Link>          
          <aside>
              <Link to='/'>
              <IconWrapper iconImg={HomeIcon} />
              </Link>     
              <IconWrapper iconImg={FriendsIcon} />                  
              <Link to='/games'>
              <IconButton />
              </Link>
              <IconWrapper iconImg={ShopIcon} />
              <IconWrapper iconImg={StarIcon} />
          </aside>
          
    </SidebarWrapper>
  )
}

export default Sidebar