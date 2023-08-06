import React, {useState} from 'react'
import styled from 'styled-components'
import NameSVG from '../../../images/NameSVG'
import PhoneSVG from '../../../images/PhoneSVG'
import MailSVG from '../../../images/MailSVG'





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
        border-radius: 15px;
        content: "";
        width: 64%;
        height: 613px;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        background-color: #00000030;
    }
    
`



const Input = styled.input`
    height: 12px;
    padding: 30px 12px;
    width: 288px;
    background: none;
    border: 1px solid #466888;
    font-size: 20px;
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
    font-family: Roboto;
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
            border-radius: 0px;
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

const SecondCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 384px;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
`


const DivCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1108px;
    border: 1px solid rgb(0 255 215 / 30%);
    padding: 50px;
    height: 408px;
    
`




const InputCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 388px;
`




const AnalyzeForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      facebook: '',
      instagram: '',
      youtube: '',
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
        <Form action="" method="POST" name="Analyze" data-netlify="true">
        
        <input type="hidden" name="form-name" value="Analyze" />

        <input type="hidden" name="bot-field" />
        
  
          {step === 0 ?
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
                    <Button onClick={(event) => {
                        event.preventDefault();
                        setStep(1);
                    }}>
                        Pokračovat
                    </Button>

            </DivCont>
            :
            <DivCont>
            <SecondCont>
                <InputCont>
                    <Input
                        type="url"
                        placeholder=' URL/Facebook' 
                        name="facebook" 
                        value={formData.facebook} 
                        onChange={handleChange} />
                </InputCont>
                <InputCont>
                    <Input 
                        type="url" 
                        placeholder=' URL/Instagram' 
                        name="instagram" value={formData.instagram} 
                        onChange={handleChange} />
                </InputCont>
                <InputCont>
                    <Input 
                        type="url" 
                        placeholder=' URL/Youtube' 
                        name="youtube" 
                        value={formData.youtube} 
                        onChange={handleChange} />
                </InputCont>
                <InputCont>
                    <Input 
                        placeholder=' URL/Web' 
                        type="url" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleChange} />
                </InputCont>
                {/* <Text placeholder='Napište nám' name="info" value={formData.info} onChange={handleChange} />   */}
              
            </SecondCont>
            
            <Button onClick={()=> setStep(0)}>Zpět</Button>
            <Button type="submit">Odeslat</Button>

            </DivCont>
            }
        </Form>
      </>
    )
  }
  
  export default AnalyzeForm
