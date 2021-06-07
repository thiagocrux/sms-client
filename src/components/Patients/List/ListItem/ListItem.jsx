import React from 'react';
import { FileMedical, Person, PersonBadge } from 'react-bootstrap-icons';
import { Link, useRouteMatch } from 'react-router-dom';

import { formatCPF } from '../../../../utils/formatting';

import style from './ListItem.module.css';

export default function ListItem({ patient }) {
  const { url } = useRouteMatch();

  return (
    <Link
      to={{ pathname: `${url}/${patient.id}`, state: patient }}
      className={style['list-item']}
    >
      <span className={style['inner-divider']}>
        <FileMedical className={style.icon} />
        {patient.susCardNumber}
      </span>
      <span className={style['inner-divider']}>
        <PersonBadge className={style.icon} />
        {formatCPF(patient.cpf)}
      </span>
      <span className={style['inner-divider']}>
        <Person className={style.icon} />
        {patient.socialName ? patient.socialName : patient.name}
      </span>
    </Link>
  );
}
