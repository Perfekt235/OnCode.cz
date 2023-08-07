import React, {useState} from 'react'
import styled from 'styled-components'
import NameSVG from '../../../images/NameSVG'
import PhoneSVG from '../../../images/PhoneSVG'
import MailSVG from '../../../images/MailSVG'
import LikeSVG from '../../../images/LikeSVG'





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
        height: 483px;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        background-color: #00000030;
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
    border: 1px solid #466888;
    font-family: 'Roboto Mono';
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s ease-out;
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
  height: 408px;
  margin: 0px auto;
    
`




const InputCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 388px;
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
                   

          
            
            
            <FirstCont>
                <InputCont>
                 <LikeSVG />
                    <Input
                        type="text"
                        placeholder=' URL/Facebook' 
                        name="facebook" 
                        value={formData.facebook} 
                        onChange={handleChange} />
                </InputCont>
                <InputCont>
                    <Input 
                        type="text" 
                        placeholder=' URL/Instagram' 
                        name="instagram" value={formData.instagram} 
                        onChange={handleChange} />
                </InputCont>
                <InputCont>
                    <Input 
                        placeholder=' URL/Web' 
                        type="text" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleChange} />
                </InputCont>
                {/* <Text placeholder='Napište nám' name="info" value={formData.info} onChange={handleChange} />   */}
                </FirstCont>
            <Button type="submit">Odeslat</Button>

            </DivCont>
            
        </Form>
      </>
    )
  }
  
  export default AnalyzeForm
