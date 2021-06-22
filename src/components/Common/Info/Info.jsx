import React from 'react';

import style from './Info.module.css';

export default function Info(props) {
  return (
    <div
      className={`${style.infoContainer} ${
        props.class === 'highlight' ? style.highlight : style.regular
      }`}
    >
      <span className={style.label}>{props.label}</span>
      <p className={style.info}>{props.info}</p>
    </div>
  );
}
