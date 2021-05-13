import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardPlus, DropletFill, Eye } from 'react-bootstrap-icons';

import Heading from '../../Heading/Heading';

import style from './NotificationTabs.module.css';

export default function NotificationTabs() {
  return (
    <>
      <Heading type="primary">Que tipo de notificação você deseja criar?</Heading>
      <nav className={style.navigation}>
        <Link exact to="/treatment" className={style.tab}>
          <ClipboardPlus className={style.icon} />
          Novo tratamento
        </Link>
        <Link exact to="/monitoring" className={style.tab}>
          <Eye className={style.icon} />
          Novo monitoramento
        </Link>
        <Link exact to="/exam" className={style.tab}>
          <DropletFill className={style.icon} />
          Novo exame
        </Link>
      </nav>
    </>
  );
}
