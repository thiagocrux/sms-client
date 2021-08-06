import React from 'react';

import Card from '@components/Common/Card/Card';
import Heading from '@components/Common/Heading/Heading';
import Info from '@components/Common/Info/Info';
import Select from '@components/Layout/Form/Select/Select';

import style from './FilteredStats.module.css';

export default function FilteredStats({ stats, selectFilter }) {
  const generateSelectOptions = () => {
    let array = [];
    const INITIAL_YEAR = 2020;
    for (let i = INITIAL_YEAR; i <= new Date().getFullYear(); i++) {
      array.push(i.toString());
    }
    return array.reverse();
  };

  const filterOptions = generateSelectOptions();

  const handleSelectInput = (event) => {
    selectFilter(event.target.value);
  };

  return (
    <div>
      <Card>
        <Heading size="medium" align="start" margin="medium">
          Informações cadastradas no sistema
        </Heading>
        <Select
          label="Ano"
          name="yearFilter"
          options={filterOptions}
          change={handleSelectInput}
        />
        <div>
          <div className={style.grid}>
            <div>
              <span>Pacientes cadastrados</span>
              <p>{stats && stats.numberOfPatients}</p>
            </div>
            <div>
              <span>Pacientes do sexo feminino</span>
              <p>{stats && stats.numberOfFemalePatients}</p>
            </div>
            <div>
              <span>Pacientes do sexo Masculino</span>
              <p>{stats && stats.numberOfMalePatients}</p>
            </div>
            <div>
              <span>Pacientes intersexuais</span>
              <p>{stats && stats.numberOfIntersexPatients}</p>
            </div>
            <div>
              <span>Casos de sífilis adquirida</span>
              <p>{stats && stats.acquiredSyphilisOcurrences}</p>
            </div>
            <div>
              <span>Casos de sífilis congênita</span>
              <p>{stats && stats.congenitalSyphilisOcurrences}</p>
            </div>
            <div>
              <span>Casos de sífilis em gestante</span>
              <p>{stats && stats.gestationalSyphilisOcurrences}</p>
            </div>
            <div>
              <span>Total de exames cadastrados</span>
              <p>{stats && stats.numberOfExams}</p>
            </div>
            <div>
              <span>Nº de testes rápidos</span>
              <p>{stats && stats.numberOfQuickTests}</p>
            </div>
            <div>
              <span>Nº de FTA-ABS IgMs</span>
              <p>{stats && stats.numberOfIgMTests}</p>
            </div>
            <div>
              <span>Nº de FTA-ABS IgGs</span>
              <p>{stats && stats.numberOfIgGTests}</p>
            </div>
            <div>
              <span>Nº de resultados reagentes</span>
              <p>{stats && stats.numberOfReagentResults}</p>
            </div>
            <div>
              <span>Nº de resultados não-reagentes</span>
              <p>{stats && stats.numberOfNonReagentResults}</p>
            </div>
            <div>
              <span>Total de notificações</span>
              <p>{stats && stats.numberOfNotifications}</p>
            </div>
            <div>
              <span>Total de observações cadastradas</span>
              <p>{stats && stats.numberOfObservations}</p>
            </div>
            <div>
              <span>Total de tratamentos cadastrados</span>
              <p>{stats && stats.numberOfTreatments}</p>
            </div>
            <div>
              <span>Tratamentos usando penicilina</span>
              <p>{stats && stats.numberOfTreatmentsUsingPenilicillin}</p>
            </div>
            <div>
              <span>Tratamentos usando doxiciclina</span>
              <p>{stats && stats.numberOfTreatmentsUsingDoxycycline}</p>
            </div>
            <div>
              <span>Tratamentos usando ceftriaxona</span>
              <p>{stats && stats.numberOfTreatmentsUsingCeftriaxone}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
