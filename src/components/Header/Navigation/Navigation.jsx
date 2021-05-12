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
      <NavLink exact to="/" activeStyle={active}>
        Página inicial
      </NavLink>
      <NavLink exact to="/paciente" activeStyle={active}>
        Cadastrar paciente
      </NavLink>
      <NavLink exact to="/tratamento" activeStyle={active}>
        Criar tratamento
      </NavLink>
      <NavLink exact to="/monitoramento" activeStyle={active}>
        Criar monitoramento
      </NavLink>
      <NavLink exact to="/exame/" activeStyle={active}>
        Criar exame
      </NavLink>
    </nav>
  );
}
