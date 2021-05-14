import React from 'react';

import style from './SubmitContainer.module.css';

export default function SubmitContainer(props) {
  return <div className={style['submit-container']}>{props.children}</div>;
}
