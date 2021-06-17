import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle, PlusCircleFill } from 'react-bootstrap-icons';

import style from './NotificationNotFoundMessage.module.css';

export default function NotificationNotFoundMessage({ link, subject }) {
  return (
    <div className={style.messageBox}>
      <p>
        <ExclamationCircle className={style.icon} />A busca não encontrou
        resultados. Se deseja cadastrar um novo {subject} clique no botão
        abaixo.
      </p>
      <Link to={link}>
        <button className={`${style.button} ${style.infoButton}`}>
          <PlusCircleFill className={style.icon} />
          Cadastrar {subject}
        </button>
      </Link>
    </div>
  );
}
