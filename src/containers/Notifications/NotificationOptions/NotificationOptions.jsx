import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClipboardPlus, DropletHalf, Eye } from 'react-bootstrap-icons';

import Heading from '../../../components/Common/Heading/Heading';

import style from './NotificationOptions.module.css';

export default function NotificationOptions() {
  const { patientID } = useParams();

  return (
    <>
      <Heading type="primary">Que tipo de notificação você deseja criar?</Heading>
      <nav className={style.navigation}>
        <Link to={`/notifications/patients/${patientID}/treatments/new`} className={style.tab}>
          <ClipboardPlus className={style.icon} />
          Novo tratamento
        </Link>
        <Link to={`/notifications/patients/${patientID}/monitorings/new`} className={style.tab}>
          <Eye className={style.icon} />
          Novo monitoramento
        </Link>
        <Link to={`/notifications/patients/${patientID}/exams/new`} className={style.tab}>
          <DropletHalf className={style.icon} />
          Novo exame
        </Link>
      </nav>
    </>
  );
}
