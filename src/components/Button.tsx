import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
};

export default function Button(props: ButtonProps): React.ReactElement {
  const TheButton = styled.button``;

  return <TheButton>{props.label}</TheButton>;
}
