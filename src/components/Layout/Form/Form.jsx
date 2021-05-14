import React from 'react';

import style from './Form.module.css';

export default function Form(props) {
  return <div className={style.form}>{props.children}</div>;
}
