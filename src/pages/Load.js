import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../colors';
import Logo from '../images/Logo';
import { useSpring, animated, config } from 'react-spring';

const AnimatedLogo = animated(Logo);

const FlexCont = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.DarknestBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Div = styled(animated.div)`
  display: flex;
  overflow: hidden;
  align-items: center
`;

const H1 = styled.h1`
  font-size: 60px;
  position: relative;
  left: 15px;
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
  bottom: 11px;
  left: 45px;
    letter-spacing: 4px;
`

const Load = () => {
  const [rotationComplete, setRotationComplete] = useState(false);
  const [widthComplete, setWidthComplete] = useState(false)
  const [word1, setWord1] = useState("")
  const [word2, setWord2] = useState("")
  const [blinking, setBlinking] = useState(false);
  const [allAnimationsFinished, setAllAnimationsFinished] = useState(false);

  
  const loadStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  const rotationStyles = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(1080deg)' },
    config: { duration: 3000 },
    onRest: () => setRotationComplete(true),
  });

  const shrinkStyles = useSpring({
    from: { width: '300px' },
    to: rotationComplete ? { width: '80px' } : { width: '300px' },
    config: { tension: 300, easing: 350 },
    onRest: ()=> setWidthComplete(true)
  });

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

  const blinkingStyles = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      while (blinking) {
        await next({ opacity: 0, config: { duration: 500 } });
        await next({ opacity: 1, config: { duration: 500 } });
      }
    }
  });

  const scaleStyles = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: allAnimationsFinished ? 'scale(0)' : 'scale(1)' },
    config: { duration: 500 },
    onRest: () => {
      if (allAnimationsFinished) {
        window.location.href = "/Load";
      }
    },
  });

  useEffect(() => {
    if (!blinking && word2 === "ode") {
      setAllAnimationsFinished(true);
    }
  }, [blinking, word2]);

  useEffect(() => {
    if (allAnimationsFinished) {
      window.location.href = "/Load";
    }
  }, [allAnimationsFinished]);


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
    <FlexCont style={scaleStyles}>
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






