import React, { useEffect, useRef } from 'react';
import { Search } from 'react-bootstrap-icons';

import Field from '../../../components/Layout/Form/Field/Field';
import Heading from '../../../components/Common/Heading/Heading';

import style from './PatientSearchForm.module.css';

export default function PatientSearchForm({
  handleSubmit,
  search,
  setSearch,
  formHeader,
}) {
  const { criterion, inputValue } = search;
  const inputRef = useRef(null);

  useEffect(() => {
    const inputListener = (event) => {
      if (
        document.activeElement === inputRef.current &&
        (event.code === 'Enter' || event.code === 'NumpadEnter')
      ) {
        return handleSubmit;
      }
    };
    document.addEventListener('keydown', inputListener);

    return () => document.removeEventListener('keydown', inputListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.patientSearchContainer}>
      <Heading size="huge" align="center" margin="big">
        {formHeader}
      </Heading>
      <div className={style.gridContainer}>
        <Field>
          <label htmlFor="search-criterion">Critério de pesquisa</label>
          <select
            value={criterion}
            name="search-criterion"
            className={style.searchCriterion}
            onChange={(event) =>
              setSearch({ ...search, criterion: event.currentTarget.value })
            }
          >
            <option value="susCardNumber">Número do cartão do SUS</option>
            <option value="cpf">Número do CPF</option>
            <option value="name">Nome do paciente</option>
          </select>
        </Field>
        <Field>
          <label htmlFor="search-input">&nbsp;</label>
          <input
            ref={inputRef}
            value={
              criterion === 'name'
                ? inputValue
                : inputValue.replace(/[^0-9]/g, '')
            }
            name="search-input"
            type="text"
            placeholder={
              criterion === 'susCardNumber'
                ? 'Insira o número do cartão do SUS do paciente'
                : criterion === 'cpf'
                ? 'Insira o CPF do paciente'
                : 'Insira o nome do paciente'
            }
            className={style.searchInput}
            onChange={(event) =>
              setSearch({ ...search, inputValue: event.currentTarget.value })
            }
          />
        </Field>
        <div className={style.buttonContainer}>
          <div>&nbsp;</div>
          <button className={style.button} onClick={handleSubmit}>
            <Search className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
