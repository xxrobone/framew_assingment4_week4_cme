import React from 'react'
import styled from 'styled-components'
import GameItem from '../Games/Games'

const GamesContainer = styled.ul`
    margin-top: 20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
`;

const GamesList = ({ games }) => {

return ( 
    <>
        <GamesContainer>
            {games.length > 0 && games.map(game => {
                return (
                        <li key={game.id + game.name}>
                            <GameItem game={game}  />                    
                        </li>
                    );
            })}
        </GamesContainer> 
    </>
    );
}
 
export default GamesList;