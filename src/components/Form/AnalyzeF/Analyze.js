import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideRight = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const slideLeft = keyframes`
  0% { right: -100%; }
  100% { right: 100%; }
`;

const slideDown = keyframes`
  0% { top: -100%; }
  100% { top: 100%; }
`;

const slideUp = keyframes`
  0% { bottom: -100%; }
  100% { bottom: 100%; }
`;


    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const Button = styled.button`
      border: 1px solid #00c1a38a;
      position: ${props => props.position || 'relative'};
      display: inline-block;
      padding: 14px 20px;
      color: #00ffd7;
      letter-spacing: 2.7px;
      text-decoration: none;
      font-size: 12px;
      overflow: hidden;
      transition: 0.2s;
      background: ${props => props.bckgColr === "true" ? "rgb(0 0 0 / 19%)" : "#0a192f"};
      width: 190px;
      font-family: 'Roboto Mono';
      cursor: pointer;
      word-spacing: -3px;
      ${props => props.position === 'absolute' ? 'right: 27px;' : null}
      ${props => props.border === 'none' ? 'border: none;' : null}

      &:hover {
        border: none
      }


      & span {
          position: absolute;
          display: block;
      }

      & span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg,transparent,#00ffd7);
      }

    

      & span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg,transparent,#00ffd7);
      }

     

      & span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg,transparent,#00ffd7);
      }

      
      & span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg,transparent,#00ffd7);
      }

      &:hover span:nth-child(1) {
        animation: ${slideRight} 1s infinite;
      }
    
      &:hover span:nth-child(3) {
        animation: ${slideLeft} 1s 0.5s infinite;
      }
    
      &:hover span:nth-child(2) {
        animation: ${slideDown} 1s 0.25s infinite;
      }
    
      &:hover span:nth-child(4) {
        animation: ${slideUp} 1s 0.75s infinite;
      }
`

const Analyze = ({ position, children, border, bckgColr, props }) => {

    const handleSendData = () => {
        props.handleClick(!props.dataNav);
      }

  return (
    <Div>
      <Button onClick={handleSendData} bckgColr={bckgColr} border={border} position={position}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        {children}
      </Button>
    </Div>
  )
}

export default Analyze
