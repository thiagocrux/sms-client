import React from 'react';

import style from './Heading.module.css';

export default function Heading(props) {
  return (
    <p
      className={`${style.heading} ${
        props.size === 'huge'
          ? style.sizeHuge
          : props.size === 'big'
          ? style.sizeBig
          : props.size === 'medium'
          ? style.sizeMedium
          : props.size === 'small'
          ? style.sizeSmall
          : style.sizeTiny
      } ${
        props.align === 'center'
          ? style.alignCenter
          : props.align === 'end'
          ? style.alignEnd
          : style.alignStart
      } ${
        props.margin === 'huge'
          ? style.marginHuge
          : props.margin === 'big'
          ? style.marginBig
          : props.margin === 'medium'
          ? style.marginMedium
          : props.margin === 'small'
          ? style.marginSmall
          : style.marginTiny
      }`}
    >
      {props.children}
    </p>
  );
}
