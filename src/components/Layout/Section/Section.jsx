import React from 'react';

import style from './Section.module.css';

export default function Section(props) {
  return <section className={style.section}>{props.children}</section>;
}
