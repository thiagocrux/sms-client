import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

import style from './ButtonReturn.module.css';

export default function ButtonReturn(props) {
  const history = useHistory();

  return (
    <button
      className={style.button}
      onClick={props.link ? () => history.push(props.link) : history.goBack()}
    >
      <ArrowLeft className={style.icon} />
    </button>
  );
}
