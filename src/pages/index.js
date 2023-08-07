import React, { useState, useEffect } from 'react'
import Load from '../components/Load/Load'
import styled from 'styled-components'
import { useSpring, animated} from 'react-spring';
import Cookies from 'js-cookie'; 
import Seo from '../SEO';
import Nav from '../components/Nav/Nav';
import colors from '../colors';
import SocialMedia from '../components/SocialLine/SocialMedia';
import MailLine from '../components/SocialLine/MailLine';
import { WidthProvider } from '../components/context/Width';
import AnalyzeForm from '../components/Form/AnalyzeF/AnalyzeForm';





const BckgDiv = styled.div`
  background-color: ${colors.DarknestBlue};
  min-height: 100%;
  overflow: hidden;

  /* Pro Webkit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Pro Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`

  


const Header = styled.header`
 display: flex;
 background-color: #0a192f;
`



const Main = styled.main`
  margin: 0px auto;
  width: 100%;
  background-color: #0a192f;
`
const Hero = styled.section`
  color: white;
  width: 86%;
  margin: 0 auto;
  height: 100vh;
`

// const Article = styled.article`

// `

const Footer = styled.footer`

`




const AnimatedBackground = animated(BckgDiv)

const AnimatedDiv = animated.div;



const Index = () => {
  const [animationsFinished, setAnimationsFinished] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showNav, setShowNav] = useState(false);



  

  // zkontrolujeme, zda existuje cookie 'animationDone'
  

  const animationProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: showLoader ? 1 : 0 },
    config: { duration: 500 },
    onRest: () => {
      if (!showLoader) {
        setAnimationsFinished(true);
        setShowNav(true);
        Cookies.set('animationDone', 'true', { expires: 7 }); // přidáme cookie
      }
    },
  });

  


  useEffect(() => {
    if (animationsFinished) {
      setShowLoader(false);
    }
  }, [animationsFinished]);

  

 


  const Opacity = useSpring({
    from: { opacity:0 },
    to: { opacity: 1 },
    config: {tension: 500, friction: 125},
  })



  
  
  
 

  return (
    
      <>
        <Seo animationsFinished={animationsFinished}  title={"OnCode: Web & Marketing"} ogTitle={"OnCode.cz: Profesionální Web a Marketingové Služby"} ogDescription={"Spolupracujte s OnCode.cz na vývoji a optimalizaci vašich webových stránek. Využijte naše personalizované marketingové strategie a posuňte svůj digitální vliv na novou úroveň."} description={"Vývoj a optimalizace webových stránek s týmem OnCode. Naši odborníci na digitální marketing jsou připraveni posunout váš online byznys na novou úroveň."}  />
        
        {!showNav && (
          <AnimatedDiv style={{...animationProps, backgroundColor: "red"}}>
            <Load animationsFinished={animationsFinished} setAnimationsFinished={setAnimationsFinished} />
          </AnimatedDiv>
        )}
        
        {showNav && 
          <AnimatedBackground style={Opacity}>

           
          
          <WidthProvider>
          <Header>
            <Nav/>
              <SocialMedia />
              <MailLine />
              <AnalyzeForm />
              
              
              
          </Header>

          <Main>
            <Hero>
            </Hero>
          </Main>

          <Footer></Footer>
        
          </WidthProvider>
        
        </AnimatedBackground>
         } 
         
 </>
        
      
    
  );
}

export default Index;