import React from 'react';
import { Gear, PersonCircle } from 'react-bootstrap-icons';

import Navigation from '../Navigation/Navigation';

import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style['brand-session-bar']}>
        <div className={style['flex-container']}>
          <p className={style.brand}>Sistema de Monitoramento de Sífilis de Petrolina</p>
          <ul className={style['session-info']}>
            <li>
              <PersonCircle />
            </li>
            <li>
              <Gear />
            </li>
          </ul>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
