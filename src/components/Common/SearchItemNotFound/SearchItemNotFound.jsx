import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle, PersonPlusFill } from 'react-bootstrap-icons';

import style from './SearchItemNotFound.module.css';

export default function SearchItemNotFound(props) {
  return (
    <div className={style.messageBox}>
      <p>
        <ExclamationCircle className={style.icon} />A busca não encontrou resultados. Se deseja
        cadastrar um novo paciente clique no botão abaixo.
      </p>
      <Link to={props.link}>
        <button className={`${style.button} ${style.infoButton}`}>
          Cadastrar paciente
          <PersonPlusFill className={style.icon} />
        </button>
      </Link>
    </div>
  );
}
