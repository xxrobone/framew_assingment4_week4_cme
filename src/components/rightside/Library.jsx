import React from 'react'
import styled from 'styled-components'

const LibraryContainer = styled.div`
    width: 100%; 
    /* background: linear-gradient(to left top, #252525, #2C2C2C, #1f1f1f ); */
`

const Library = ({children}) => {
  return (
    <LibraryContainer>
      {children}
    </LibraryContainer>
  )
}

export default Library