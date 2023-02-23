import React from 'react'
import styled from 'styled-components'

const LibraryContainer = styled.div`
    width: 100%; 
    max-height: 35%;
    overflow: hidden;
    /* background: linear-gradient(to left top, #252525, #2C2C2C, #1f1f1f ); */

    &:hover {
      cursor: pointer;
    }

    &>div {
      height: 100%;
      
    }

    
`

const Library = ({children}) => {
  return (
    <LibraryContainer>
      <div>
      {children}
      </div>
    </LibraryContainer>
  )
}

export default Library