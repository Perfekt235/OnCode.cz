import React from "react";
import Lottie from "lottie-react";
import Animation from "../Lottie/Test.json";
import styled from "styled-components";
import colors from "../../colors";
import Analyze from "../Form/AnalyzeF/Analyze";
import ArrowsDown from "../Lottie/ArrowDown.json"

const Abstract = styled(Lottie)`
  position: absolute;
  z-index: 0;
  width: 1066px;
  height: 892px;
  overflow: hidden;
  left: 680px;
  transform: rotate(45deg);

  @media(max-width: 1750px){
    left: 620px;
  }

  @media(max-width: 1580px){
    left: 500px;
  }

  @media(max-width: 1450px){
    width: 500px;
    height: 500px;
    left: 700px;
  }

  @media(max-width: 1296px){
    width: 900px;
    height: 900px;
    left: -377px;
    bottom: 350px;
    transform: rotate(162deg)
    }
  
`

const Arrows = styled(Lottie)`
  cursor: pointer;
  width: 150px;
  height: 150;

`

const ArrowsCont = styled.div`
  position: absolute;
    top: 881px;
    left: 52%;
    transform: translate(-50%, -50%);
    width: 80%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
`

const FlexCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 969px;
  width: 82%;
  margin: 0 auto;
  padding: 91px;
  position: relative;
 
  @media(max-width: 1296px){
    justify-content: center;
    width: 100%;
}



`

const TextCont = styled.div`
  font-family: 'Roboto Mono';
  flex-direction: column;
  display: flex;
  height: 254px;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  max-width: 707px;
  min-width: 707px;

  @media(max-width: 1035px){
    height: 200px;
    min-width: 453px;
  }

  @media(max-width: 530px){
    height: 265px;
    min-width: 268px;
  }

  
  
 
  

`
const H1 = styled.h1`
  color: #00ffd7;
  font-size: 15px;
  padding-left: 3px;
  
`
const H2 = styled.h2`
  color: ${colors.White};
  font-family: 'Roboto';
  font-size: 50px;

  @media(max-width: 1035px){
    font-size: 30px;
  }

 

`
const P = styled.p`
  height: 40px;
  font-family: 'Roboto';
  color: #9fa9b6;

  @media(max-width: 1035px){
    font-size: 12px;
  }

  
`
const H3 = styled.h3`
  color: #ccd6f6c7;
  font-family: 'Roboto';
  font-size: 25px;
  @media(max-width: 1035px){
    font-size: 15px;
  }

 
`

const BtnCont = styled.div`
position: absolute;
top: 297px;

@media(max-width: 1035px){
  top: 232px;
}

@media(max-width: 530px){
  top: 350px;
  left: 40px;
  
}

 
`



const Hero = ({ handleClick, dataNav }) => {


  return(
    <>
  <FlexCont>
    <TextCont>
    <H1>Vítá vás OnCode.cz</H1>
      <H2>Váš průvodce online světem.</H2>
      <H3>Z našeho zápalu pro web a marketing vznikají strategie šité na míru vašemu podnikání.</H3>
      <P>Neodpovídá online aktivita vašim představám?
        <span style={{color: "#00ffd7"}}> Pomůžeme </span>Vám.<br/> Klikněnte na tlačítko <span style={{color: "#00ffd7"}}>Analýza zdarma</span> a společně zjistíme, jak si vedete</P>
      
      <BtnCont>
        <Analyze handleClick={handleClick} dataNav={dataNav} JCon="start">Analýza zdarma</Analyze>
      </BtnCont>
      
    </TextCont>
    <Abstract animationData={Animation} loop={true} />
      
      
      
  </FlexCont>
  <ArrowsCont>
    <Arrows animationData={ArrowsDown} loop={true}></Arrows>
  </ArrowsCont>
   </> 
  )
}


export default Hero;

