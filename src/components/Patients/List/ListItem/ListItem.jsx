import React from 'react';
import { PenFill, PersonLinesFill, XCircleFill } from 'react-bootstrap-icons';
import { Link, useRouteMatch } from 'react-router-dom';

import { formatCPF } from '../../../../utils/formatting';

import style from './ListItem.module.css';

export default function ListItem({ patient }) {
  const { url } = useRouteMatch();
  const date = new Date(patient.birthDate);
  const dateFormatted = Intl.DateTimeFormat('pt-BR').format(date);

  return (
    <Link
      to={{ pathname: `${url}/patients/${patient.id}`, state: patient }}
      className={style['list-item']}
    >
      <span className={style['inner-divider']}>{patient.susCardNumber}</span>
      <span className={style['inner-divider']}>{formatCPF(patient.cpf)}</span>
      <span className={style['inner-divider']}>
        {patient.socialName ? patient.socialName : patient.name}
      </span>
      <span className={style['inner-divider']}>{dateFormatted}</span>
      <span>
        <PersonLinesFill className={style.icon} />
        <PenFill className={style.icon} />
        <XCircleFill className={style.icon} />
      </span>
    </Link>
  );
}
