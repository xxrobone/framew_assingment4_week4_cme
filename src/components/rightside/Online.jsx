import React from 'react'
import styled from 'styled-components'

const OnlineContainer = styled.div`
  width: 100%; 
`

const Online = ({children}) => {
  return (
      <OnlineContainer>
          {children}
    </OnlineContainer>
  )
}

export default Online