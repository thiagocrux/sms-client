import React from 'react';

import style from './Button.module.css';

export default function Button(props) {
  return (
    <button
      className={`${style.button} ${
        props.size === 'big'
          ? style.big
          : props.size === 'medium'
          ? style.medium
          : style.small
      } ${
        props.class === 'success'
          ? style.success
          : props.class === 'danger'
          ? style.danger
          : style.default
      }`}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
}
