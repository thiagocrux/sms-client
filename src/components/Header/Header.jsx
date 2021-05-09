import React from 'react';
import Navigation from './Navigation/Navigation';

import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style['flex-container']}>
        <p className={style.brand}>Sistema de Monitoramento de Sífilis de Petrolina</p>
        <ul className={style['session-info']}>
          <li>Login</li>
          <li>Sair</li>
        </ul>
      </div>
      <Navigation />
    </header>
  );
}
