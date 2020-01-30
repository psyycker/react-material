import React from "react";
import styled from "styled-components";

const Container = styled.label`
     z-index: 0;
    position: relative;
    display: inline-block;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 16px;
    line-height: 1.5;
    
    
    & > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
    
    &:checked {
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }
    
    &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
    }
    }
    
    & > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    
    &::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 2px 10px 2px 0;
    border: solid 2px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    vertical-align: top;
    transition: border-color 0.2s;
    }
    
    &::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transform: translate(5px, 5px) scale(0);
    transition: transform 0.2s;
    }
    }
    
    & > input:checked +  span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }
    
    & > input:checked + span:after {
    transform: translate(5px, 5px) scale(1);
    }
    
    &:hover > input {
    opacity: 0.04;
    }
    
    & > input:focus {
    opacity: 0.12;
    }
    
    &:hover > input:focus {
    opacity: 0.16;
    }
    
    & > input:active + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }
    
    & > input:disabled {
    opacity: 0;
    }
    
    & > input:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    cursor: initial;
    }
    
    & > input:disabled + span::before {
    border-color: currentColor;
    }
    
    & > input:disabled + span::after {
    background-color: currentColor;
    }
`;


type RadioProps = {
  color: string;
}

export default function Radio(props: RadioProps): React.ReactElement {
  return (
    <Container>
      <input type="radio" name="radio" id="radio1"/>
      <span>Toto</span>
    </Container>
  )
}
