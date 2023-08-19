import React, { forwardRef } from 'react';
import styled from 'styled-components'
import Seo from '../images/Seo'
import Social from '../images/Social'
import UxUi from '../images/UxUi'



const Cont = styled.div`
    display: flex;
    flex-direction: column;
    height: 1806px;
    width: 82%;
    margin: 0px auto;
    padding: 91px;
    justify-content: space-evenly;

    @media(max-width: 953px){
        height: 3206px;
    }
`

const FlexText = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    position: relative;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    top: 300px;
    padding: 20px;

    
    
    @media(max-width: 1319px) {
        top: 60px;

    }

    @media(max-width: 953px) {
        top: 300px;

    }

`

const H2 = styled.h2`
    text-align: center;
    font-family: Roboto;
    color: rgb(204, 214, 246);
    font-size: 39px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1220px){
        font-size: 30px; 
        
    }

    @media(max-width: 988px){
        font-size: 33px;
        
    }

    @media(max-width: 449px){
        font-size: 25px;
        
    }

    @media(max-width: 350px){
        font-size: 22px;
        
    }




    
    
`

const H3 = styled.h3`
    font-family: Roboto;
    color: rgb(32 255 220);
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;

    @media(max-width: 1220px){
        font-size: 15px; 
    }

    @media(max-width: 988px){
        font-size: 13px; 
        
    }
    
`

const CardH2 = styled.h2`
    color: rgb(204, 214, 246);
    font-family: 'Roboto Mono';
    font-size: 15px;
    text-align: center;
`
const CardP = styled.p`
    font-family: 'Roboto Mono';
    color: #ccd6f69e;
    margin-top: 33px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
`

const CardTextCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const CardFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;


    @media(max-width: 1319px){
        height: 1390px;
    }


    @media(max-width: 953px){
        height: 2138px;
        
    }



    
`


const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 638px;
    background-image: linear-gradient(to top, rgba(0, 174, 175, 0.2) -28%, rgb(10, 25, 47) 100%);
    border-radius: 5px;
    padding: 30px;
    position: relative;
    
    

    @media(max-width: 953px){
        min-width: 300px;

    }
`

const SeO = styled(Seo)`
    width: 150px;
    height: 150px;
    stroke: #64ffda;
    fill: #64ffda;
`

const SocialMedia = styled(Social)`
    width: 200px;
    height: 200px;
    stroke: #64ffda;
    fill: #64ffda;

`

const UXuI = styled(UxUi)`
    width: 200px;
    height: 200px;
    stroke: #64ffda;
    fill: #64ffda;
`

const SvgCont = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    align-items: center;
    justify-content: center;
`

const Problem = forwardRef((_, ref) => {
  return (
    <div ref={ref}>
        <FlexText>
            <H2>Stagnuje váš online byznys?</H2>
            <H3>Možná děláte tyto chyby</H3>
        </FlexText>
    <Cont> 
        
        <CardFlex>

            <CardCont>
                <SvgCont>
                    <SeO />
                </SvgCont>
                <CardTextCont>
                    <CardH2>
                        Cesta do zapomnění
                    </CardH2>
                    <CardP>
                         Víte, co je horší než nemít web? Mít web, který nikdo nenajde. Ignorování SEO je jako otevřít obchod v poušti. Pokud není web optimalizovaný pro vyhledávače, vaše online přítomnost je prakticky neviditelná.
                    </CardP>
                </CardTextCont>
            </CardCont>

            <CardCont>
                <SvgCont>
                    <UXuI />
                </SvgCont>
                <CardTextCont>
                    <CardH2>
                        Nepřátelský web design
                    </CardH2>
                    <CardP>
                    Představte si, že vstoupíte do obchodu a nemůžete najít, co hledáte. Vše je v nepořádku a nikdo vám nepomůže. Přesně tak se cítí návštěvníci na špatně navrženém webu. Uživatelsky nepřívětivý design může rychle odradit potenciální zákazníky a odeslat je do náručí vaší konkurence.
                    </CardP>
                </CardTextCont>
            </CardCont>

            <CardCont>
                <SvgCont>
                    <SocialMedia />
                </SvgCont>
                <CardTextCont>
                    <CardH2>
                        Odcizení se od zákazníků
                    </CardH2>
                    <CardP>
                        Není dostačující mít jen produkt nebo službu. V dnešní digitální době je obsah králem a sociální média jsou jeho hradem. Ignorováním těchto nástrojů riskujete ztrátu důvěry a vzdálení se od potřeb zákazníků.
                    </CardP>
                </CardTextCont>
            </CardCont>


        </CardFlex>
    </Cont>
    </div>
  )
})

export default Problem
