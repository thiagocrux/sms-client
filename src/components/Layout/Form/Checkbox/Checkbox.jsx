import React from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

import style from './Checkbox.module.css';

export default function Input(props) {
  return (
    <Field>
      <div className={style.flex}>
        <Label name={props.name} label={props.label} />
        <input
          className={style.input}
          type="checkbox"
          checked={props.checked}
          onChange={props.change}
        />
      </div>
    </Field>
  );
}
