import React from 'react';

type ButtonProps = {
  label: string;
};

export default function Button(props: ButtonProps): React.ReactElement {
  return <input type="submit" value={props.label} />;
}
