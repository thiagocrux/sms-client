import React from 'react';
import { PenFill, PersonLinesFill, XCircleFill } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';

import {
  formatCPF,
  formatDate,
  formatSUSCardNumber,
} from '../../../utils/dataFormatter';

import style from './PatientListItem.module.css';

export default function PatientListItem({ patient }) {
  const { _id, susCardNumber, cpf, name, socialName, birthDate } = patient;
  const { listItem, innerDivider, icon, controls } = style;

  const location = useLocation();
  const url = location.pathname === '/patients' ? '' : '/notifications';

  // console.log('[LIST ITEM]: ' + patient._id);

  return (
    <Link
      patient={patient}
      to={{
        pathname: `${url}/patients/${_id}/`,
        state: patient,
      }}
      className={listItem}
    >
      <span className={innerDivider}>{formatSUSCardNumber(susCardNumber)}</span>
      <span className={innerDivider}>{formatCPF(cpf)}</span>
      <span className={innerDivider}>{socialName ? socialName : name}</span>
      <span className={innerDivider}>{formatDate(birthDate)}</span>
      <span className={controls}>
        <PersonLinesFill className={icon} />
        <PenFill className={icon} />
        <XCircleFill className={icon} />
      </span>
    </Link>
  );
}
