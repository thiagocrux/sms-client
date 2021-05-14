import React from 'react';

import style from './FlexContainer.module.css';

export default function FlexContainer(props) {
  const flexProperties = {
    margin: props.margin || 0,
    flexDirection: props.direction || 'row',
    justifyContent: props.justify || null,
    alignContent: props.align || null,
  };

  return (
    <div className={style.flex} style={flexProperties} {...props}>
      {props.children}
    </div>
  );
}
