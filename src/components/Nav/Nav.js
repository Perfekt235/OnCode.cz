import React, { useState } from 'react'
import  styled from 'styled-components'
import Logo from '../../images/Logo'
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring'
import Analyze from '../Form/AnalyzeF/Analyze'
import { device } from '../../mediaQuery'
import { useWidth } from '../context/Width';
// import { size } from '../../mediaQuery';
import HiddenMenu from '../HiddenMenu/HiddenMenu'


// převod string sizes na číslo
// const numSizes = Object.entries(size).reduce((acc, [key,value]) => {
//   const cleanedValue = value.replace('px', '');
//   const numValue = parseInt(cleanedValue);
//   acc[key] = numValue;
//   return acc;
// }, {});

// const { mobileS, mobileM, mobileL, tablet, laptop, laptopL, desktop} = numSizes;



const Navigation = styled.nav`
  position: fixed;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0a192f;
  box-shadow: 0px 6px 16px 6px #020c1ba8;
  margin: 0px auto;
  width: 100%;

  @media(${device.laptop}){
    justify-content: space-between;
  }
  
`

const LogoSvg = styled(Logo)`
  width: 80px;
  fill: #00ffd7;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  font-family: 'Roboto';
  width: 584px;
  height: 49px;
  justify-content: space-between;

 

  @media(${device.tablet}) {
    display: none;
  }

  @media(max-width: 1190px) {
    width: 373px;
    margin-right: 29px;
  }
}

`

const Li = styled.li`
  width: 800px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #0a192f;

  

`

// const TestDivShadow = styled(animated.div)`
//   height: 50px;
//   width: 50px;
//   background-color: #00ffd7;
//   top: 14px;
//   position: absolute;
//   left: 16px;
//   z-index: 1;
//   border-radius: 50%;

// `

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

  @media(${device.laptop}){
    font-size: 12px;
  }

`


const AnalyzeFlex = styled.div`
  display: flex;
  position: relative;

  @media(max-width: 1190px){
    display: none;
  }
`

const Burger = styled.div`
  position: relative;
  right: 18px;
  display: flex;
  height: 31px;
  width: 36px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
 

  @media(min-width: 769px) {
    display: none;
  }


  & span {
    background-color: #00d9a5;
    height: 2px;
    width: 30px;
    transform-origin: center;

   
  }
`

const AnimationOpacity = animated(Navigation);



const Nav = (props) => {
  //isHover = filter blur logo
  // const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWidth()
  
  
 

   

  const handleOpen = ()=> {
    setIsOpen((v) => !v)
  }


  
  
  const topBar = useSpring({
    transform: isOpen ? "translateY(10px) rotate(50deg)" : "translateY(0px) rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  const middleBar = useSpring({
    opacity: isOpen ? 0 : 1,
    config: { tension: 500 }
  });

  const bottomBar = useSpring({
    transform: isOpen ? "translateY(-10.2px) rotate(-50deg)" : "translateY(0px) rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  const transformStyles = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(-100px)" },
    config: { tension: 200, friction: 20  },
  });
  
  const opacityStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 , delay: 200 },
  });
  


  


  // const animation = useSpring({
  //   filter: isHover ? 'blur(50px)' : 'blur(20px)',
  //   opacity: isHover ? 1 : 0,
  //   config: { duration: 500 },
  // })

  return (
    <AnimationOpacity
      style={{...opacityStyles, ...transformStyles}}
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
    >
      {/* <TestDivShadow style={animation} /> */}
      <LogoSvg />

      

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
          <LinkText to='/'>Řešení</LinkText>
        </Li>
      </Ul>

      <Burger onClick={handleOpen}>
        <animated.span style={topBar} />
        <animated.span style={middleBar} />
        <animated.span style={bottomBar} />
      </Burger>

      {width <= 768 ? <HiddenMenu isOpen={isOpen}></HiddenMenu> : null}
      
      
      <AnalyzeFlex>
        <Analyze props={props} position='absolute'>Analýza zdarma</Analyze>
      </AnalyzeFlex>
      
    </AnimationOpacity>
  )
}

export default Nav