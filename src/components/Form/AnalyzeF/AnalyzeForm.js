import React, {useState} from 'react'
import styled from 'styled-components'
import NameSVG from '../../../images/NameSVG'
import PhoneSVG from '../../../images/PhoneSVG'
import MailSVG from '../../../images/MailSVG'
import LikeSVG from '../../../images/LikeSVG'
import InstaSVG from '../../../images/InstaSVG'
import WebSVG from '../../../images/WebSVG'
import { useWidth } from '../../context/Width'
import { useSpring, animated } from 'react-spring';





const Form = styled.form`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 5;
    left: 0;
    right: 0;
    margin: auto;
    transform: transalte(0px, -825px);

    

    &::before {
        content: "";
        width: 100%;
        height: 50vh;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        background-color: rgb(0 0 0 / 0%);
        backdrop-filter: blur(3px);

        @media(min-width: 1551px){
          display: none;
        }
    }
    
`



const Input = styled.input`
  height: 38px;
  padding: 0px 8px;
  width: 231px;
  background: none;
  border: 1px solid rgb(70, 104, 136);
  font-size: 14px;
  font-family: "Roboto Mono";
  color: white;

    `

// const Text = styled.textarea`
//     width: 287px;
//     height: 186px;
//     padding: 12px;
    
// `
const Button = styled.button`
    width: 151px;
    height: 45px;
    background: none;
    color: rgb(126, 152, 175);
    border: 1px solid rgb(70, 104, 136);
    font-family: "Roboto Mono";
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease-out 0s;
    letter-spacing: 1px;
    position: relative;
    border-radius: 15px;
    z-index: 2;
   

        &:hover {
            color: rgb(0, 255, 215);
            letter-spacing: 2px;
            border: 1px solid rgb(0 178 150 / 65);
            padding: 10px;
        }

`

const FirstCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 278px;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
    box-shadow: 0px -11px 20px 6px rgb(10, 25, 47);

    @media(max-height: 780px) {
      height: 200px;
    }

    @media(max-height: 600px) {
      height: 168px;
    }

    

    @media(max-width: 1551px){
      box-shadow: none;

    }

    @media(max-width: 390px) {
      width: 100%;
    }

    @media(min-width:1551px){
        transform: translate(0px, -250px);
    }
`



const DivCont = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  min-height: 17rem;
  border-radius: 16px;
  margin: 0px auto;
  position: relative;
  z-index: 3;
  background-image: linear-gradient(to top, rgb(0 174 175 / 20%) -28%, rgb(10 25 47) 100%);
  overflow: hidden;

  @media(max-height: 667px) {
    top: 50px;
    
  }

  @media(max-width: 1551px) {
    justify-content: end;
    width: 390px;
    margin: none;
  }

  @media(max-height: 775px) {
    min-height: 12.6rem;
  }
`




const InputCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 388px;


    
    @media(max-width: 390px) {
      width: 100%;
    }
  
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    transform: scale(1.5);
    margin-right: 15px;
    margin-bottom: 20px;
    cursor: pointer;

    media(max-width: 390px) {
      width: 100%;
    }
`;


const GdprCont = styled.div`
  position: absolute;
  height: 480px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: center;
  opacity: 1;

  @media(max-width: 1551px) {
    position: relative;
    height: 101px;
    width: 100%;
    bottom: 16px;
  }
}
`
const Label = styled.label`
  color: #8492a6;
  font-size: 15px;
  font-family: "Roboto";

  @media(max-width: 350px) {
    font-size: 12px;
  }
  
`


const AnimatedForm = animated(Form)
const AnimatedFirstCont = animated(FirstCont)
const AnimatedGDPR = animated(GdprCont)



const AnalyzeForm = (props) => {

    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      facebook: '',
      instagram: '',
      website: '',
      info: ''
    });
    const [activeFields, setActiveFields] = useState({});
    const { width } = useWidth()
    
  
    const handleChange = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

    const handleFocus = (event) => {
        setActiveFields(prevState => ({ ...prevState, [event.target.name]: true }));
      }
    
      const handleBlur = (event) => {
        setActiveFields(prevState => ({ ...prevState, [event.target.name]: false }));
      }

      const IsShow = useSpring({
        to: { transform: `translate(${props.dataNav ? "0px, 0px" : "0px, -825px"})` },
        config: { tension: 40, friction: 10 },
        delay: 100,
      })

      const transformValue = () => {
        if (width <= 1551) {
          return props.dataNav ? "0px, 0px" : "-500px, 0px";
        } else {
          return props.dataNav ? "0px, 0px" : "0px, -250px";
        }
      };

      const FirstContDown = useSpring({
        to: { transform: `translate(${transformValue()})` },
        config: { tension: 50, friction: 8 },
        delay: 500,
      })

      const SecFirstDown = useSpring({
        to: { transform: `translate(${transformValue()})` },
        config: { tension: 50, friction: 8 },
        delay: 800,
      })

      const OpacityButt = useSpring({
        to: { opacity: props.dataNav ? 1 : 0 },
        config: { tension: 50, friction: 15 },
        delay: 1500,
      })
    
  
    return (
      <>
        <AnimatedForm style={IsShow} method="POST" name="Analyze" data-netlify="true">
        
        <input type="hidden" name="form-name" value="Analyze" />

        <input type="hidden" name="bot-field" />
        { width >= 1551 ?
        
        <AnimatedGDPR style={OpacityButt}>
              <Label>
              <Checkbox name='GDPR' type="checkbox" value="Souhlasím" required/>
                Souhlasím s podmínkami a pravidly použití
              </Label>
                    <Button type="submit">Odeslat</Button>
           </AnimatedGDPR>
        
        : null}
  
      
          <DivCont>
          <AnimatedFirstCont style={FirstContDown} >

              <InputCont>
                <Input 
                  type="text" 
                  placeholder='Jméno/Přijmení *' 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required 
                />
                <NameSVG fill={activeFields.name || formData.name ? '#00ffd7' : '#7e98af'} />
              </InputCont>
              <InputCont >
                <Input 
                  type="tel" 
                  placeholder='Telefoní číslo *' 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required 
                />
                <PhoneSVG fill={activeFields.phone || formData.phone ? '#00ffd7' : '#7e98af'} />
              </InputCont>
              <InputCont  >
                <Input 
                  type="email" 
                  placeholder='Email *' 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required 
                />
                <MailSVG fill={activeFields.email || formData.email ? '#00ffd7' : '#7e98af'} />
              </InputCont>
            
            </AnimatedFirstCont>
              
            
            
            <AnimatedFirstCont style={SecFirstDown} >
             
                <InputCont style={{flexDirection: width <= 1551 ? "row-reverse": "row"}} >
                 <LikeSVG fill={activeFields.facebook || formData.facebook ? '#00ffd7' : '#7e98af'}  />
                    <Input
                        type="url"
                        placeholder=' URL/Facebook' 
                        name="facebook" 
                        value={formData.facebook} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                </InputCont>
                <InputCont style={{flexDirection: width <= 1551 ? "row-reverse": "row"}} >
                  <InstaSVG stroke={activeFields.instagram || formData.instagram ? '#00ffd7' : '#7e98af'} />
                    <Input 
                        type="url" 
                        placeholder=' URL/Instagram' 
                        name="instagram" value={formData.instagram} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                </InputCont>
                <InputCont style={{flexDirection: width <= 1551 ? "row-reverse": "row"}}>
                  <WebSVG fill={activeFields.website || formData.website ? '#00ffd7' : '#7e98af'} />
                    <Input 
                        placeholder=' URL/Web' 
                        type="url" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                </InputCont>
                {/* <Text placeholder='Napište nám' name="info" value={formData.info} onChange={handleChange} />   */}
                </AnimatedFirstCont>
                      { width < 1551 ?
                      
                      <AnimatedGDPR style={OpacityButt}>
                            <Label>
                            <Checkbox name='GDPR' type="checkbox" value="Souhlasím" required/>
                              Souhlasím s podmínkami a pravidly použití
                            </Label>
                                  <Button type="submit">Odeslat</Button>
                        </AnimatedGDPR>
              
              : null}
            </DivCont>
            
        </AnimatedForm>
      </>
    )
  }
  
  export default AnalyzeForm
