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
      <p>Online friends</p>
          {children}
    </OnlineContainer>
  )
}

export default Online