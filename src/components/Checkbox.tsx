import React from 'react';
import styled from 'styled-components';

//TODO : Background behind the checkbox
const CheckboxComponent = styled.input.attrs({ type: 'checkbox' })``;
const LabelComponent = styled.span``;
const Container = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  font-family: var(--pure-material-font, 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui, -apple-system);
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
    background-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
  }

  & > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
  }

  & > span::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px;
    border-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  & > span::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  & > input:checked,
  & > input:indeterminate {
    background-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
  }

  & > input:checked + span::before,
  & > input:indeterminate + span::before {
    border-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
    background-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
  }

  & > input:checked + span::after,
  & > input:indeterminate + span::after {
    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  }

  & > input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
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

  & > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  & > input:active + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  & > input:checked:active + span::before {
    border-color: transparent;
    background-color: ${props => {
      if (props.color && props.theme) {
        return props.theme[props.color];
      }
      return 'rgb(33, 150, 243)';
    }};
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

  & > input:checked:disabled + span::before,
  & > input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
  }
`;

type CheckboxProps = {
  color: string;
  disabled?: boolean;
};

export default function Checkbox(props: CheckboxProps): React.ReactElement {
  return (
    <Container color={props.color}>
      <CheckboxComponent disabled={props.disabled} />
      <LabelComponent>Test checkbox</LabelComponent>
    </Container>
  );
}

Checkbox.defaultProps = {
  disabled: false
};
