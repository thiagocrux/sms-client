import React, { useEffect } from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

import style from './Textarea.module.css';

export default function Textarea(props) {
  useEffect(() => {
    console.log(props.message);
  }, []);
  return (
    <Field>
      {props.label ? <Label name={props.name} label={props.label} /> : null}
      <textarea
        className={style.textarea}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      ></textarea>
      <p>{props.message}</p>
    </Field>
  );
}
