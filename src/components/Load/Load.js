import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import Logo from '../../images/Logo';
import { useSpring, animated,  } from 'react-spring';
import { isFirefox } from 'react-device-detect'

const AnimatedLogo = animated(Logo);

const FlexCont = styled.div`
  height: 100vh;
  background-color: #0a192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;



`;

const Div = styled(animated.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
`;

const H1 = styled.h1`
  position: relative;
  z-index: 5;
  font-size: 60px;
  position: relative;
  left: 12px;
  font-family: 'Roboto';
  color: ${colors.White};
`
const H2 = styled.h2`
  font-size: 60px;
  font-family: 'Roboto';
  color:  #00d5ba;
  position: relative;
  right: 15px;
`

const H3 = styled(animated.h3)`
  font-size: 15px;
  font-family: 'Roboto';
  position: relative;
  color: #a8fff7;
  bottom: 35px;
  left: 45px;
  letter-spacing: 4px;

  ${isFirefox && `
    bottom: 35px;
  `}
`

const Load = ({setAnimationsFinished}) => {
  const [rotationComplete, setRotationComplete] = useState(false);
  const [widthComplete, setWidthComplete] = useState(false)
  const [word1, setWord1] = useState("")
  const [word2, setWord2] = useState("")
  const [blinking, setBlinking] = useState(false);
  
  
  

  // prvotní sekvence animace která mění opacity z 0 na 1
  const loadStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  //určuje změnu barvy svg při počátku načtení animace
  const colorStyles = useSpring({
    loop: true,
    from: { fill: '#009a91' },
    to: async (next) => {
      while (true) {
        await next({ fill: '#00ffd7' });
        await next({ fill: '#009a91' });
      }
    },
    config: { duration: 1100 },
  });



  // Animace která se spouští po dokončení loadStyles jedná se o rotaci svg
  const rotationStyles = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(720deg)' },
    config: { duration: 2000, tension: 890 },
    onRest: () => setRotationComplete(true),
  });

  // jakmile je rotace kompletní svg změní svoji width z 300px na 80px 
  const shrinkStyles = useSpring({
    from: { width: '300px' },
    to: rotationComplete ? { width: '80px' } : { width: '300px' },
    config: { tension: 300, easing: 350 },
    onRest: ()=> setWidthComplete(true)
  });

  
  const blinkingStyles = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      while (blinking) {
        await next({ opacity: 0, config: { duration: 500 } });
        await next({ opacity: 1, config: { duration: 500 } });
      }
    },
    
    
  });

  



  useEffect(() => {
    if (!blinking && word2 === "ode") {
      
      setTimeout(()=> setAnimationsFinished(true), 1000);
    }
  }, [blinking, word2, setAnimationsFinished]);


  useEffect(() => {
    if (widthComplete) {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 3000);
    }
  }, [widthComplete]);


  useEffect(() => {
    if (widthComplete) {
      let onWord = "On";
      let odeWord = "ode";
      for (let i = 0; i < onWord.length; i++) {
        setTimeout(() => {
          setWord1((prev) => prev + onWord[i]);
        }, i * 300); // change delay as needed
      }
      for (let j = 0; j < odeWord.length; j++) {
        setTimeout(() => {
          setWord2((prev) => prev + odeWord[j]);
        }, j * 300 + onWord.length * 300); // change delay as needed
      }
    }
  }, [widthComplete]);

  return (
    <FlexCont>
      <Div>
        <H1>{word1}</H1>
        <AnimatedLogo
          style={{
            ...colorStyles,
            ...loadStyles,
            ...rotationStyles,
            ...shrinkStyles,
            
          }}
        />
        <H2>{word2}</H2>
        
      </Div>
      
      {word2 === "ode" && <H3 style={blinkingStyles}>Make Different</H3>}

      
    </FlexCont>
  );
};

export default Load;






