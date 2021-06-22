import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

import style from './ButtonReturn.module.css';

export default function ButtonReturn(props) {
  const history = useHistory();

  return (
    <button className={style.button} onClick={() => history.push(props.link)}>
      <ArrowLeft className={style.icon} />
    </button>
  );
}
