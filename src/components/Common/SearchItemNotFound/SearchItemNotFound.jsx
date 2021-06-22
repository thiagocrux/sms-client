import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle, PersonPlusFill } from 'react-bootstrap-icons';

import style from './SearchItemNotFound.module.css';

export default function SearchItemNotFound({ link, subject }) {
  return (
    <div className={style.messageBox}>
      <p>
        <ExclamationCircle className={style.icon} />A busca não encontrou
        resultados. Se deseja cadastrar um novo {subject} clique no botão
        abaixo.
      </p>
      <Link to={link}>
        <button className={`${style.button} ${style.infoButton}`}>
          Cadastrar {subject}
          <PersonPlusFill className={style.icon} />
        </button>
      </Link>
    </div>
  );
}
