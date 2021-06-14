import React from 'react';
import { Link } from 'react-router-dom';
import { PenFill, PersonLinesFill, TrashFill } from 'react-bootstrap-icons';

import style from './PatientControls.module.css';

export default function PatientControls({ patientID }) {
  return (
    <div className={style.controls}>
      <Link to={`/`}>
        <PersonLinesFill className={`${style.icon} ${style.info}`} />
      </Link>
      <Link to={`/patients/${patientID}/edit`}>
        <PenFill className={`${style.icon} ${style.edit}`} />
      </Link>
      <Link to={`/`}>
        <TrashFill className={`${style.icon} ${style.delete}`} />
      </Link>
    </div>
  );
}
