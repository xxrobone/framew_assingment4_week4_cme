import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/xbox_logo.png'
import IconButton from '../buttons/iconbutton/IconButton'
import HomeIcon from '../../assets/icons/akar-icons_home.svg'
import FriendsIcon from '../../assets/icons/la_user-friends.svg'
import ShopIcon from '../../assets/icons/akar-icons_shopping-bag.svg'
import StarIcon from '../../assets/icons/akar-icons_star.svg'

const SidebarWrapper = styled.div`
    padding: 2.625rem 0;
    width: 125px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;   
    background-color: #1d1e22;
    box-shadow: 4px 5px 40px rgba(0,0,0,0.3);

    &>img {
        margin-top: 0.75rem;
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
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;

    &>img {
        width: 24px;
        height: 24px;
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
          <img src={Logo} alt="" />
          <aside>
              <IconWrapper iconImg={HomeIcon} />
              <IconWrapper iconImg={FriendsIcon} />
              <IconButton />
              <IconWrapper iconImg={ShopIcon} />
              <IconWrapper iconImg={StarIcon} />
          </aside>
          
    </SidebarWrapper>
  )
}

export default Sidebar