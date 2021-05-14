import React from 'react';
import { NavLink } from 'react-router-dom';
import { House, JournalMedical, PeopleFill } from 'react-bootstrap-icons';

import style from './Navigation.module.css';

export default function Navigation() {
  /* FIXME: Pick the right color for the active link */
  const activeStyle = {
    color: '#1976d2',
    borderBottom: '.1rem solid #1976d2',
  };

  return (
    <nav className={style.navigation}>
      <div className={style['div-container']}>
        <NavLink exact to="/" className={style.link} activeStyle={activeStyle}>
          <House className={style.icon} />
          Página inicial
        </NavLink>
      </div>
      <div className={style['div-container']}>
        <NavLink exact to="/patient" className={style.link} activeStyle={activeStyle}>
          <PeopleFill className={style.icon} />
          Pacientes
        </NavLink>
      </div>
      <div className={style['div-container']}>
        <NavLink exact to="/notification" className={style.link} activeStyle={activeStyle}>
          <JournalMedical className={style.icon} />
          Notificações
        </NavLink>
      </div>
    </nav>
  );
}
