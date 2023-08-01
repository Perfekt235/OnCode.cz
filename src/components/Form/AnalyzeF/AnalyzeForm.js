import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    position: fixed;
    z-index: 6;
    top: 300px;
    width: 58%;
    left: 26%;
    height: 508px;

    



`

const Form = styled.form`
    flex-direction: column;
    justify-content: space-around;
    display: flex;
    height: 100%;
    width: 500px;

`

const Label = styled.label`
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto';
    padding: 10px;
    color: white;
`


const Input = styled.input`
    height: 12px;
    padding: 15px 12px;
`

const Text = styled.textarea`
    width: 287px;
    height: 186px;
    padding: 12px;
`
const Button = styled.button`

`


const AnalyzeForm = () => {
  return (
    <Container>
      <Form method='POST'>
      <Input type="hidden" name="form-name" value="contact" />

            <Label>
                Jméno:
                <Input type="text" name="name" required />
            </Label>

            <Label>
                Příjmení:
                <Input type="text" name="surname" required />
            </Label>

            <Label>
                Telefonní číslo:
                <Input type="tel" name="phone" required />
            </Label>

            <Label>
                Email:
                <Input type="email" name="email" required />
            </Label>

            <Label>
                Facebook:
                <Input type="url" name="facebook" />
            </Label>

            <Label>
                Instagram:
                <Input type="url" name="instagram" />
            </Label>

            <Label>
                YouTube:
                <Input type="url" name="youtube" />
            </Label>

            <Label>
                Adresa Webu:
                <Input type="url" name="website" />
            </Label>

            <Label>
                Další informace:
                <Text name="info" />
            </Label>

                <Button type="submit">Odeslat</Button>
      </Form>
    </Container>
  )
}

export default AnalyzeForm
