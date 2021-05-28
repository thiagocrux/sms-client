import React from 'react';
import { FileMedical, Person, PersonBadge } from 'react-bootstrap-icons';
import { formatCPF } from '../../../../utils/formatting';

import style from './ListItem.module.css';

export default function ListItem(props) {
  return (
    <li className={style['list-item']}>
      <span className={style['inner-divider']}>
        <FileMedical className={style.icon} />
        {props.patient.susCardNumber}
      </span>
      <span className={style['inner-divider']}>
        <PersonBadge className={style.icon} />
        {formatCPF(props.patient.cpf)}
      </span>
      <span className={style['inner-divider']}>
        <Person className={style.icon} />
        {props.patient.socialName ? props.patient.socialName : props.patient.name}
      </span>
    </li>
  );
}
