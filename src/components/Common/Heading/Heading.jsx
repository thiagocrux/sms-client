import React from 'react';

import style from './Heading.module.css';

export default function Heading(props) {
  return (
    <p
      className={`${style.heading} ${
        props.type === 'primary'
          ? style.primary
          : props.type === 'secondary'
          ? style.secondary
          : props.type === 'tertiary'
          ? style.tertiary
          : null
      }`}
    >
      {props.children}
    </p>
  );
}
