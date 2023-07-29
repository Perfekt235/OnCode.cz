import React, { useState } from 'react'
import Line from './Line'
import styled from 'styled-components'
import Facebook from './SVGR/Facebook'
import Instagram from './SVGR/Instagram'
import { device } from '../../mediaQuery'
import { isFirefox } from 'react-device-detect'
import { animated, useSpring } from 'react-spring'


const BookFace = styled(Facebook)`
    cursor: pointer;
    transition: 0.2s ease-out;


    &:hover {
       fill: #64ffda;
       transform: translate(0, -5px);
    }

`

const GramInst = styled(Instagram)`
    cursor: pointer;
    transition: 0.2s ease-out;


    &:hover {

        fill: #64ffda;
        transform: translate(0, -5px);
    }

`




const MediaFlex = styled.div`
    display: flex;
    height: 114px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 17px;
}
`



const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0%;
    left: 14px;
    

    @media(${device.tablet}){
        display: none;
      }

      ${isFirefox && `
        top: 677.9px;
        
    `}

`

const AnimatedCont = animated(FlexDiv)


const SocialMedia = () => {
    const [isHover, setIsHover] = useState("#7e98af")

    const Translate = useSpring({
        from: { transform: "translateX(-100px)" },
        to: { transform: "translateX(20px)" },
        config: {delay: 5000, tension: 150, friction: 10 }
    })

  return (
    <AnimatedCont style={Translate}>
        <MediaFlex>
            <BookFace onMouseEnter={() => setIsHover("#00ffd7")} onMouseLeave={() => setIsHover("#7e98af")}  />
            <GramInst onMouseEnter={() => setIsHover("#00ffd7")} onMouseLeave={() => setIsHover("#7e98af")}  />
        </MediaFlex>
        <Line isHover={isHover} />
    </AnimatedCont>
  )
}

export default SocialMedia
