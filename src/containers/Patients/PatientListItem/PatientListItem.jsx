import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatCPF, formatDate, formatSUSCardNumber } from '../../../utils/dataFormatter';

import PatientControls from '../PatientControls/PatientControls';

import style from './PatientListItem.module.css';

export default function PatientListItem({ patient }) {
  const { _id, susCardNumber, cpf, name, socialName, birthDate } = patient;
  const location = useLocation();
  const url = location.pathname === '/patients' ? '' : '/notifications';

  return (
    <Link
      className={style.listItem}
      patient={patient}
      to={{
        pathname: `${url}/patients/${_id}/`,
        state: patient,
      }}
    >
      <span className={style.innerDivider}>{formatSUSCardNumber(susCardNumber)}</span>
      <span className={style.innerDivider}>{formatCPF(cpf)}</span>
      <span className={style.innerDivider}>{socialName ? socialName : name}</span>
      <span className={style.innerDivider}>{formatDate(birthDate)}</span>
      <PatientControls patientID={patient._id} />
    </Link>
  );
}
