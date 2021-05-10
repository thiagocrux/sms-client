import React from 'react';

import style from './Button.module.css';

export default function Button(props) {
  return (
    <button onClick={props.click} className={style.button}>
      {props.children}
    </button>
  );
}
