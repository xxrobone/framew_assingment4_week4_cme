import React from 'react'
import styled from 'styled-components'

const OnlineContainer = styled.div`
    width: 100%; 
    max-height: 35%;
    overflow: hidden;
`

const Online = ({children}) => {
  return (
      <OnlineContainer>
          {children}
    </OnlineContainer>
  )
}

export default Online