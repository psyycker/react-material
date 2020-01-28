import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  color: string;
  disabled?: boolean;
  type?: 'contained' | 'text' | 'outlined';
};

const ContainedButton = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    background-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
    return 'rgb(33, 150, 243)';
    }};
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
    &::-moz-focus-inner {
      border: none;
    }
    &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transition: opacity 0.2s;
    }
    &:after {
        content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
    }
    
    &:hover, &:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }
    
    &:hover::before {
    opacity: 0.08;
    }
    
    &:focus::before {
    opacity: 0.24;
    }
    
    &hover:focus::before {
    opacity: 0.3;
    }
    
    &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    
    &:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
    }
    
    &:disabled {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
    box-shadow: none;
    cursor: initial;
    }
    
    &:disabled::before {
    opacity: 0;
    }
    
    &:disabled::after {
    opacity: 0;
    }
`;

const TextButton = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 0 8px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: ${props => {
  if (props.color && props.theme) {
    return props.theme[props.color];
  }
  return 'rgb(33, 150, 243)';
}};
    background-color: transparent;
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    
    &::-moz-focus-inner {
    border: none;
    }
    
    &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
    }
    
    &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1) ;
    transition: opacity 1s, transform 0.5s;
    }
    
    &:hover::before {
    opacity: 0.04;
    }
    
    &:focus::before {
    opacity: 0.12;
    }
    
    &:hover:focus::before {
     opacity: 0.16;
    }
    
    &:active:after {
      opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
    }
    
    &:disabled {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: transparent;
    cursor: initial;
    }
    
    &:disabled::before {
    opacity: 0;
    }
    
    &:disabled::after {
    opacity: 0;
    }
`;

const OutlinedButton = styled.button`
  position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: solid 1px;
    border-color:  ${props => {
  if (props.color && props.theme) {
    return props.theme[props.color];
  }
  return 'rgb(33, 150, 243)';
}};
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color:  ${props => {
  if (props.color && props.theme) {
    return props.theme[props.color];
  }
  return 'rgb(33, 150, 243)';
}};
    background-color: transparent;
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 14px;
    font-weight: 500;
    line-height: 34px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    
    &::-moz-focus-inner {
    border: none;
    }
    
    &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
    }
    
    &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1) ;
    transition: opacity 1s, transform 0.5s;
    }
    
    &:hover::before {
    opacity: 0.04;
    }
    
    &:focus::before {
    opacity: 0.12;
    }
    
    &:hover:focus::before {
    opacity: 0.16;
    }
    
    &:active::after {
        opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
    }
    
    &:disabled {
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: transparent;
    cursor: initial;
    }
    
    &:disabled::before {
    opacity: 0;
    }
    
    &:disabled::after {
    opacity: 0;
    }
`;

export default function Button(props: ButtonProps): React.ReactElement {

  switch (props.type) {
    case "contained":
      return <ContainedButton disabled={props.disabled} color={props.color}>{props.label}</ContainedButton>;
    case "text":
      return <TextButton disabled={props.disabled} color={props.color}>{props.label}</TextButton>;
    case "outlined":
      return <OutlinedButton disabled={props.disabled} color={props.color}>{props.label}</OutlinedButton>;
    default:
      return <TextButton disabled={props.disabled} color={props.color}>{props.label}</TextButton>;
  }

}

Button.defaultProps = {
  type: 'contained'
}
