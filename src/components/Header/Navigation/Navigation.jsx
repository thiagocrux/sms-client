import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css';

export default function Navigation() {
  const active = {
    color: 'palevioletred',
    borderBottom: '2px solid palevioletred',
  };

  return (
    <nav className={style.navigation}>
      <NavLink to="/paciente" activeStyle={active}>
        Paciente
      </NavLink>
      <NavLink to="/tratamento" activeStyle={active}>
        Tratamento
      </NavLink>
      <NavLink to="/monitoramento" activeStyle={active}>
        Monitoramento
      </NavLink>
    </nav>
  );
}
