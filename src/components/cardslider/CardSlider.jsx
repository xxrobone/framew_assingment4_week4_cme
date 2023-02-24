import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Slider = styled.div`
    position: relative;
    padding: 1rem 0;
    width: 27.5rem;
    height: 27.5rem;
    overflow: hidden;
    cursor: grab;

 @media screen and (min-width: 768px) {
  width: 27.5rem;
  width: 27.5rem;
    }

 &>.inner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    ::-webkit-scrollbar {
  display: none;
}

    &>img {
      object-fit: cover;
      object-position: center top;
      :last-child {
        object-position: top center;
      }
    }
    
 }
`

const CardSlider = ({ children }) => {
  const [height, setHeight] = useState(0)

  const elRef = useRef()

  useEffect(() => {
    console.log(elRef.current.scrollHeight, )
  setHeight(elRef.current.scrollHeight - elRef.current.offsetHeight)
  }, [height])
  
  return (
      <Slider ref={(elRef)}>
      <motion.div
      className='inner'
      drag='y'
      dragConstraints={{bottom: 0, top: - height}}
      >
        {children}
          </motion.div>
    </Slider>
  )
}

export default CardSlider