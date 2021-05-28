import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';

import style from './SearchItemNotFound.module.css';

export default function SearchItemNotFound(props) {
  return (
    <div className={style['search-item-not-found']}>
      <p>
        <ExclamationCircle className={style.icon} />A busca não encontrou resultados. Se deseja
        cadastrar um novo {props.subject}&nbsp;<Link to={props.link}>clique aqui</Link>.
      </p>
    </div>
  );
}
