import React from 'react';

import style from './FlexContainer.module.css';

export default function FlexContainer(props) {
  const flexProperties = {
    margin: props.margin || 0,
    flexDirection: props.direction || 'row',
    justifyContent: props.justify || null,
  };

  return (
    <div sytle={style.flex} {...props}>
      {props.children}
    </div>
  );
}
