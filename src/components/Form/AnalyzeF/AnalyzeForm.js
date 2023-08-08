import React, {useState} from 'react'
import styled from 'styled-components'
import NameSVG from '../../../images/NameSVG'
import PhoneSVG from '../../../images/PhoneSVG'
import MailSVG from '../../../images/MailSVG'
import LikeSVG from '../../../images/LikeSVG'
import InstaSVG from '../../../images/InstaSVG'
import WebSVG from '../../../images/WebSVG'





const Form = styled.form`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 50%;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;

    &::before {
        content: "";
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        background-color: rgb(0 0 0 / 0%);
        backdrop-filter: blur(3px);
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
`



const DivCont = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  width: 114%;
  min-height: 264px;
  border-radius: 16px;
  margin: 0px auto;
  box-shadow: rgb(3, 14, 30) 0px 0px 20px 12px inset;
  position: relative;
  z-index: 3;
    
`




const InputCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 388px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    transform: scale(1.5);
    margin-right: 15px;
    margin-bottom: 15px; 
`;


const GdprCont = styled.div`
  position: absolute;
  height: 480px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: center;
}
`
const Label = styled.label`
  color: #8492a6;
  font-size: 15px;
  font-family: "Roboto";
`




const AnalyzeForm = () => {
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
    
  
    return (
      <>
        <Form method="POST" name="Analyze" data-netlify="true">
        
        <input type="hidden" name="form-name" value="Analyze" />

        <input type="hidden" name="bot-field" />
        
  
      
          <DivCont>
            <FirstCont>
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
              <InputCont>
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
              <InputCont>
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
            
            </FirstCont>
                

            <GdprCont>
              <Label>
              <Checkbox name='GDPR' type="checkbox" value="Souhlasím" required/>
                Souhlasím s podmínkami a pravidly použití
              </Label>
                    <Button type="submit">Odeslat</Button>
           </GdprCont>
            
            
            <FirstCont>
             
                <InputCont>
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
                <InputCont>
                  <InstaSVG stroke={activeFields.instagram || formData.instagram ? '#00ffd7' : '#7e98af'} />
                    <Input 
                        type="url" 
                        placeholder=' URL/Instagram' 
                        name="instagram" value={formData.instagram} 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}/>
                </InputCont>
                <InputCont>
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
                </FirstCont>
          

            </DivCont>
            
        </Form>
      </>
    )
  }
  
  export default AnalyzeForm
