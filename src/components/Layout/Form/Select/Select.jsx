import React from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

// import style from './Select.module.css';

export default function Input(props) {
  return (
    <Field>
      <Label name={props.name} label={props.label} />
      <select name={props.name} value={props.value} onChange={props.change}>
        <option value="" defaultValue disabled hidden>
          Selecione uma opção
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

/*
<input
  type={props.type}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.change}
/>
<select
  name="trepTestType"
  onChange={(event) =>
    handleChange('trepTestType', event.currentTarget.value)
  }
  value={examInformation.trepTestType}
>
  <option value="" selected disabled hidden>
    Selecione uma opção
  </option>
  <option value="Teste rápido">Teste rápido</option>
  <option value="FTA-ABS IgM">FTA-ABS IgM</option>
  <option value="FTA-ABS IgG">FTA-ABS IgG</option>
</select>
*/
