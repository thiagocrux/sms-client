import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

import Field from '../../Layout/Form/Field/Field';
import Heading from '../../Layout/Heading/Heading';

import style from './SearchForm.module.css';

export default function PatientSearch(props) {
  const [criterion, setCriterion] = useState('sus-card-number');

  function handleSearchCriterionInputValue(event) {
    setCriterion(event.target.value);
  }

  return (
    <div className={style['patient-search']}>
      <Heading type="primary">Localize o paciente que será notificado</Heading>
      <div className={style['grid-container']}>
        <Field>
          <label htmlFor="search-criterion">Critério de pesquisa</label>
          <select
            name="search-criterion"
            className={style['search-criterion']}
            onChange={handleSearchCriterionInputValue}
          >
            <option value="sus-card-number">Número do cartão do SUS</option>
            <option value="cpf">Número do CPF</option>
            <option value="name">Nome do paciente</option>
          </select>
        </Field>
        <Field>
          <label htmlFor="search-input">&nbsp;</label>
          <input
            name="search-input"
            type="text"
            placeholder={
              criterion === 'sus-card-number'
                ? 'Insira o número do cartão do SUS do paciente'
                : criterion === 'cpf'
                ? 'Insira o CPF do paciente'
                : 'Insira o nome do paciente'
            }
            className={style['search-input']}
          />
        </Field>
      </div>
      <div className={style['flex-container']}>
        <button className={style.button}>
          <Search className={style.icon} />
          Pesquisar
        </button>
      </div>
    </div>
  );
}
