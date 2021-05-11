import React from 'react';

import style from './Button.module.css';

export default function Button(props) {
  const conditionalStyling = {
    color: '#FFFFFF',
    backgroundColor: props.action === 'submit' ? 'slateblue' : 'palevioletred',
  };

  return (
    <button
      type={props.type}
      onClick={() => props.click(props.action)}
      style={conditionalStyling}
      className={style.button}
    >
      {props.children}
    </button>
  );
}
