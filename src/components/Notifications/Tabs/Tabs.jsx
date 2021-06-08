import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardPlus, DropletHalf, Eye } from 'react-bootstrap-icons';

import Heading from '../../Layout/Heading/Heading';

import style from './Tabs.module.css';

export default function NotificationTabs({ patient }) {
  return (
    <>
      <Heading type='primary'>
        Que tipo de notificação você deseja criar?
      </Heading>
      <nav className={style.navigation}>
        <Link to={`/treatments/patients/${patient._id}`} className={style.tab}>
          <ClipboardPlus className={style.icon} />
          Novo tratamento
        </Link>
        <Link to={`/monitorings/patients/${patient._id}`} className={style.tab}>
          <Eye className={style.icon} />
          Novo monitoramento
        </Link>
        <Link to={`/exams/patients/${patient._id}`} className={style.tab}>
          <DropletHalf className={style.icon} />
          Novo exame
        </Link>
      </nav>
    </>
  );
}
