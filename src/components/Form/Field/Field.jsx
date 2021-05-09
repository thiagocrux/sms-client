import React from 'react';

import style from './Field.module.css';

export default function Field(props) {
  return <fieldset className={style.field}>{props.children}</fieldset>;
}
