import React from 'react';

import style from './Divider.module.css';

export default function Divider(props) {
  return <div className={style.divider}>{props.children}</div>;
}
