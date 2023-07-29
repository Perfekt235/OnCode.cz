import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'


const Container = styled.div`
  width: 100px;
`


const MlineSvg = (props) => {

  const Stroke = useSpring({
    stroke: props.isHover,
    config: { duration: 200 }
  })

  return (
    <Container>
        <svg width="100" height="200">
            <animated.line style={Stroke} x1="50" y1="50" x2="50" y2="200"  strokeWidth="2" />
        </svg>
    </Container>
  )
}

export default MlineSvg

