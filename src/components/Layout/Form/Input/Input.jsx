import React from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

import style from './Input.module.css';

export default function Input(props) {
  return (
    <Field>
      <Label name={props.name} label={props.label} />
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </Field>
  );
}
