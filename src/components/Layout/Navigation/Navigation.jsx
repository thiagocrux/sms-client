import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ClipboardData,
  House,
  JournalMedical,
  PeopleFill,
  PersonCheck,
} from 'react-bootstrap-icons';

import style from './Navigation.module.css';

export default function Navigation() {
  /* FIXME: Ao definir padrão do layout, definir a cor correta */
  const activeStyle = {
    color: '#809bce',
    borderBottom: '.1rem solid #809bce',
  };

  return (
    <nav className={style.navigation}>
      <div className={style.divContainer}>
        <NavLink exact to="/" className={style.link} activeStyle={activeStyle}>
          <House className={style.icon} />
          Página inicial
        </NavLink>
      </div>
      <div className={style.linksContainer}>
        <div className={style.divContainer}>
          <NavLink
            exact
            to="/users"
            className={style.link}
            activeStyle={activeStyle}
          >
            <PersonCheck className={style.icon} />
            Usuários
          </NavLink>
        </div>
        <div className={style.divContainer}>
          <NavLink
            exact
            to="/patients"
            className={style.link}
            activeStyle={activeStyle}
          >
            <PeopleFill className={style.icon} />
            Pacientes
          </NavLink>
        </div>
        <div className={style.divContainer}>
          <NavLink
            exact
            to="/monitorings"
            className={style.link}
            activeStyle={activeStyle}
          >
            <JournalMedical className={style.icon} />
            Monitoramento
          </NavLink>
        </div>
        <div className={style.divContainer}>
          <NavLink
            exact
            to="/reports"
            className={style.link}
            activeStyle={activeStyle}
          >
            <ClipboardData className={style.icon} />
            Relatórios
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
