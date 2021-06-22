import React from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

import style from './Textarea.module.css';

export default function Textarea(props) {
  return (
    <Field>
      {props.label ? <Label name={props.name} label={props.label} /> : null}
      <textarea
        className={style.textarea}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      ></textarea>
    </Field>
  );
}
