import React from 'react'
import { useSpring, animated } from 'react-spring'


const Line = (props) => {

  const Stroke = useSpring({
    stroke: props.isHover,
    config: { duration: 200 }
  })

  return (
    <div>
        <svg width="100" height="200">
            <animated.line style={Stroke} x1="50" y1="50" x2="50" y2="200"  strokeWidth="2" />
        </svg>
    </div>
  )
}

export default Line
