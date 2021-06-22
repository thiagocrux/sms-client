import React from 'react';
import { X } from 'react-bootstrap-icons';

import style from './ButtonClose.module.css';

export default function ButtonClose(props) {
  return (
    <button className={style.button} onClick={props.click}>
      <X className={style.icon} />
    </button>
  );
}
