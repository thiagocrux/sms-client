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
            <Info
              class="regular"
              label="Total de pacientes cadastrados"
              info={stats && stats.numberOfPatients}
            />
            <Info
              class="regular"
              label="Pacientes do sexo feminino"
              info={stats && stats.numberOfFemalePatient}
            />
            <Info
              class="regular"
              label="Pacientes do sexo masculino"
              info={stats && stats.numberOfMalePatients}
            />
            <Info
              class="regular"
              label="Pacientes intersexuais"
              info={stats && stats.numberOfIntersexPatients}
            />
            <Info
              class="regular"
              label="Casos de sífilis adquirida"
              info={stats && stats.acquiredSyphilisOcurrences}
            />
            <Info
              class="regular"
              label="Casos de sífilis congênita"
              info={stats && stats.congenitalSyphilisOcurrences}
            />
            <Info
              class="regular"
              label="Casos de sífilis em gestante"
              info={stats && stats.gestationalSyphilisOcurrences}
            />
            <Info
              class="regular"
              label="Total de exames cadastrados"
              info={stats && stats.numberOfExams}
            />
            <Info
              class="regular"
              label="Nº de testes rápidos"
              info={stats && stats.numberOfQuickTests}
            />
            <Info
              class="regular"
              label="Nº de FTA-ABS IgMs"
              info={stats && stats.numberOfIgMTests}
            />
            <Info
              class="regular"
              label="Nº de FTA-ABS IgGs"
              info={stats && stats.numberOfIgGTests}
            />
            <Info
              class="regular"
              label="Nº de resultados reagentes"
              info={stats && stats.numberOfReagentResults}
            />
            <Info
              class="regular"
              label="Nº de resultados não-reagentes"
              info={stats && stats.numberOfNonReagentResults}
            />
            <Info
              class="regular"
              label="Total de notificações"
              info={stats && stats.numberOfNotifications}
            />
            <Info
              class="regular"
              label="Total de observações cadastradas"
              info={stats && stats.numberOfObservations}
            />
            <Info
              class="regular"
              label="Total de tratamentos cadastrados"
              info={stats && stats.numberOfTreatments}
            />
            <Info
              class="regular"
              label="Tratamentos usando penicilina"
              info={stats && stats.numberOfTreatmentsUsingPenilicillin}
            />
            <Info
              class="regular"
              label="Tratamentos usando doxiciclina"
              info={stats && stats.numberOfTreatmentsUsingDoxycycline}
            />
            <Info
              class="regular"
              label="Tratamentos usando ceftriaxona"
              info={stats && stats.numberOfTreatmentsUsingCeftriaxone}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
