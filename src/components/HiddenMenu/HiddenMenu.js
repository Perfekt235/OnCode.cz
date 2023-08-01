import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animated, useSpring} from 'react-spring'
import Analyze from '../Form/AnalyzeF/Analyze'






const FlexCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 329px;
    height: 359px;
    position: fixed;
    right: 0%;
    background-color: rgb(0 0 0 / 19%);
    text-align: center;
    z-index: 4;
    top:80px;

    
    

`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  
`

const Li = styled.li`
  color: #00ffd7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #081426;
  
  }

  
  
  
`

const LinkText = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto Mono';
  letter-spacing: 1px;
  font-size: 14px;
  color: #7e98af;
  padding: 11px;
  transition: 0.5s ease;

  &:hover {
    color: #64ffda;
  }


`

const AnalyzeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6px;
  
  
  
  


`
const AnimatedHidden = animated(FlexCont)

const AnimatedLinkText = animated(LinkText);






const HiddenMenu = (props) => {

  const [blinkAnimation, setBlinkAnimation] = useSpring(() => ({
    color: '#7e98af',
    config: { tension: 200, friction: 10 },
  }));

  useEffect(() => {
    setBlinkAnimation({ 
      color: '#64ffda', 
      from: { color: '#7e98af' },
      loop: { reverse: true },
      config: {tension: 1000, friction: 120,},
    });
  }, [setBlinkAnimation]);

  const Hidden = useSpring({
    transform: props.isOpen ? "translateX(0px)" : 'translateX(430px)',
    config: {tension: 100, friction: 13 },
  })

  return (
    <AnimatedHidden style={Hidden}>
      <Ul>
        <Li>
          <LinkText to='/'>Úvod</LinkText>
        </Li>
        <Li>
          <LinkText to='/'>Cíle</LinkText>
        </Li>
        <Li>
          <LinkText  to='/'>Portfolio</LinkText>
        </Li>
        <Li>
          <LinkText to='/'>Blog</LinkText>
        </Li>
        <Li>
          <AnimatedLinkText className='Priority' style={{...blinkAnimation}} to='/'>Řešení</AnimatedLinkText>
        </Li>
      </Ul>
      <AnalyzeBtn>
        <Analyze bckgColr="true" border="none">Analýza zdarma</Analyze>
      </AnalyzeBtn>
    </AnimatedHidden>
  )
}

export default HiddenMenu