import React ,{ useState } from 'react'
import styled from 'styled-components'
import MlineSvg from './MlineSvg'
import { isFirefox } from 'react-device-detect'
import { useSpring, animated } from 'react-spring'



const Mail = styled.p`
  color: #7e98af;
  font-family: 'Roboto';
  font-size: 21px;
  transform: rotate(90deg);
  cursor: pointer;
  transition: 0.2s ease-out;
  background: none;

  &:hover {
    color:#00ffd7;
    transform: rotate(90deg) translate(-5px, 0);
  }
`

const FlexLine = styled.div`
  display: flex;
  justify-content: center;
  background: none;
  
`



const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: -3%;
  right: -13px;
  height: 340px;
  justify-content: space-around;
  background: none;
  z-index: 10;

  @media(max-width: 900px){
    display: none;
  }

  ${isFirefox && `
        top: 684.9px;
        
    `}

`
const AnimatedCont = animated(FlexDiv)

const MailLine = () => {
  const [isHover, setIsHover] = useState("#7e98af")

  const Translate = useSpring({
    from: { transform: "translateX(100px)" },
    to: { transform: "translateX(-20px)" },
    config: {delay: 5000, tension: 150, friction: 10 }
})

  return (
    
      <AnimatedCont style={Translate}>
          <Mail onMouseEnter={() => setIsHover("#00ffd7")} onMouseLeave={() => setIsHover("#7e98af")} >info@OnCode.cz</Mail>
          <FlexLine>
              <MlineSvg isHover={isHover} />
          </FlexLine>
      </AnimatedCont>
    
  )
}

export default MailLine
