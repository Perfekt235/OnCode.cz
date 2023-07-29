import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

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
      background: ${props => props.bckgColr === "true" ? "rgb(0 0 0 / 19%)" : null};
      width: 190px;
      font-family: 'Roboto Mono';
      cursor: pointer;
      word-spacing: -3px;
      ${props => props.position === 'absolute' ? 'right: 27px;' : null}
      ${props => props.border === 'none' ? 'border: none;' : null}

      &:hover {
        border: none
      }

      &:hover {
          color: ${colors.DarknestBlue};
          background: #00ffd7;
          box-shadow: 0 0 10px #00ffd78f , 0 0 40px #00ffd78f , 0 0 80px #00ffd78f;
          transition-delay: 1s;
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

      &:hover span:nth-child(1) {
          left: 100%;
          transition: 1s;
      }

      & span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg,transparent,#00ffd7);
      }

      &:hover span:nth-child(3) {
          right: 100%;
          transition: 1s;
          transition-delay: 0.5s;
      }

      & span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg,transparent,#00ffd7);
      }

      &:hover span:nth-child(2) {
          top: 100%;
          transition: 1s;
          transition-delay: 0.25s;
      }

      & span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg,transparent,#00ffd7);
      }

      &:hover span:nth-child(4) {
          bottom: 100%;
          transition: 1s;
          transition-delay: 0.75s;
      }
`

const Analyze = ({ position, children, border, bckgColr }) => {
  return (
    <Div>
      <Button bckgColr={bckgColr} border={border} position={position}>
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
