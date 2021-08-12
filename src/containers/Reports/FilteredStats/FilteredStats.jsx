import React from 'react';

import Card from '@components/Common/Card/Card';
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
    <div className={style.filteredStats}>
      <Card>
        <div className={style.flex}>
          <h1>Informações cadastradas (em números)</h1>
          <Select
            label="Filtro por ano"
            name="yearFilter"
            options={filterOptions}
            change={handleSelectInput}
          />
        </div>
        <div>
          <h2>Pacientes</h2>
          <h4>Números gerais</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Pacientes cadastrados</span>
              <p className={style.stats}>{stats && stats.numberOfPatients}</p>
            </div>
          </div>
          <h4>Sexo</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Pacientes do sexo feminino</span>
              <p className={style.stats}>
                {stats && stats.numberOfFemalePatients}
              </p>
            </div>
            <div>
              <span className={style.field}>Pacientes do sexo Masculino</span>
              <p className={style.stats}>
                {stats && stats.numberOfMalePatients}
              </p>
            </div>
            <div>
              <span className={style.field}>Pacientes intersexuais</span>
              <p className={style.stats}>
                {stats && stats.numberOfIntersexPatients}
              </p>
            </div>
          </div>
          <h4>Gênero</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Pacientes cisgênero</span>
              <p className={style.stats}>{stats && stats.cisgenderPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes transgênero</span>
              <p className={style.stats}>
                {stats && stats.transgenderPatients}
              </p>
            </div>
            <div>
              <span className={style.field}>Pacientes não-binários</span>
              <p className={style.stats}>{stats && stats.nonBinaryPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes agênero</span>
              <p className={style.stats}>{stats && stats.nongenderPatients}</p>
            </div>
          </div>
          <h4>Sexualidade</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Pacientes heterossexuais</span>
              <p className={style.stats}>
                {stats && stats.heterosexualPatients}
              </p>
            </div>
            <div>
              <span className={style.field}>Pacientes homossexuais</span>
              <p className={style.stats}>{stats && stats.homosexualPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes bissexuais</span>
              <p className={style.stats}>{stats && stats.bisexualPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes assexuais</span>
              <p className={style.stats}>{stats && stats.asexualPatients}</p>
            </div>
            <div>
              <span className={style.field}>
                Pacientes com outro tipo de sexualidade
              </span>
              <p className={style.stats}>
                {stats && stats.patientsWithAnotherSexualityType}
              </p>
            </div>
          </div>
          <h4>Raça/cor</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Pacientes de cor parda</span>
              <p className={style.stats}>{stats && stats.mixedRacePatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes de cor branca</span>
              <p className={style.stats}>{stats && stats.whitePatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes de cor preta</span>
              <p className={style.stats}>{stats && stats.blackPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes de origem indígena</span>
              <p className={style.stats}>{stats && stats.indigenousPatients}</p>
            </div>
            <div>
              <span className={style.field}>Pacientes de cor amarela</span>
              <p className={style.stats}>{stats && stats.yellowPatients}</p>
            </div>
          </div>
          <h4>Nível de escolaridade</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Analfabetos</span>
              <p className={style.stats}>{stats && stats.illiteratePatients}</p>
            </div>
            <div>
              <span className={style.field}>Educação básica incompleta</span>
              <p className={style.stats}>
                {stats && stats.patientsWithUnfinishedBasicEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Educação básica completa</span>
              <p className={style.stats}>
                {stats && stats.patientsWithBasicEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Ensino fundamental incompleto</span>
              <p className={style.stats}>
                {stats && stats.patientsWithUnfinishedFundamentalEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Ensino fundamental completo</span>
              <p className={style.stats}>
                {stats && stats.patientsWithFundamentalEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Ensino médio incompleto</span>
              <p className={style.stats}>
                {stats && stats.patientsWithUnfinishedHighSchoolEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Ensino médio completo</span>
              <p className={style.stats}>
                {stats && stats.patientsWithHighScoolEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Educação superior incompleta</span>
              <p className={style.stats}>
                {stats && stats.patientsWithUnfinishedHigherEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Educação superior completa</span>
              <p className={style.stats}>
                {stats && stats.patientsWithHigherEducation}
              </p>
            </div>
            <div>
              <span className={style.field}>Não se aplica</span>
              <p className={style.stats}>
                {stats && stats.patientsWhoseEducationNotApply}
              </p>
            </div>
          </div>
          <h4>Tipo de monitoramento</h4>
          <div className={`${style.grid} ${style.lastGrid}`}>
            <div>
              <span className={style.field}>Casos de sífilis adquirida</span>
              <p className={style.stats}>
                {stats && stats.acquiredSyphilisOcurrences}
              </p>
            </div>
            <div>
              <span className={style.field}>Casos de sífilis congênita</span>
              <p className={style.stats}>
                {stats && stats.congenitalSyphilisOcurrences}
              </p>
            </div>
            <div>
              <span className={style.field}>Casos de sífilis em gestante</span>
              <p className={style.stats}>
                {stats && stats.gestationalSyphilisOcurrences}
              </p>
            </div>
          </div>
          <h2>Exames</h2>
          <h4>Números gerais</h4>
          <div className={`${style.grid} ${style.lastGrid}`}>
            <div>
              <span className={style.field}>Total de exames cadastrados</span>
              <p className={style.stats}>{stats && stats.numberOfExams}</p>
            </div>
            <div>
              <span className={style.field}>Testes rápidos</span>
              <p className={style.stats}>{stats && stats.numberOfQuickTests}</p>
            </div>
            <div>
              <span className={style.field}>FTA-ABS IgMs</span>
              <p className={style.stats}>{stats && stats.numberOfIgMTests}</p>
            </div>
            <div>
              <span className={style.field}>FTA-ABS IgGs</span>
              <p className={style.stats}>{stats && stats.numberOfIgGTests}</p>
            </div>
            <div>
              <span className={style.field}>Resultados reagentes</span>
              <p className={style.stats}>
                {stats && stats.numberOfReagentResults}
              </p>
            </div>
            <div>
              <span className={style.field}>Resultados não-reagentes</span>
              <p className={style.stats}>
                {stats && stats.numberOfNonReagentResults}
              </p>
            </div>
          </div>
          <h2>Notificações</h2>
          <h4>Números gerais</h4>
          <div className={`${style.grid} ${style.lastGrid}`}>
            <div>
              <span className={style.field}>Notificações cadastradas</span>
              <p className={style.stats}>
                {stats && stats.numberOfNotifications}
              </p>
            </div>
          </div>
          <h2>Observações</h2>
          <h4>Números gerais</h4>
          <div className={`${style.grid} ${style.lastGrid}`}>
            <div>
              <span className={style.field}>Observações cadastradas</span>
              <p className={style.stats}>
                {stats && stats.numberOfObservations}
              </p>
            </div>
          </div>
          <h2>Tratamentos</h2>
          <h4>Números gerais</h4>
          <div className={style.grid}>
            <div>
              <span className={style.field}>Tratamentos cadastrados</span>
              <p className={style.stats}>{stats && stats.numberOfTreatments}</p>
            </div>
          </div>
          <h4>Medicamento</h4>
          <div className={`${style.grid} ${style.lastGrid}`}>
            <div>
              <span className={style.field}>Tratamentos usando penicilina</span>
              <p className={style.stats}>
                {stats && stats.numberOfTreatmentsUsingPenicillin}
              </p>
            </div>
            <div>
              <span className={style.field}>
                Tratamentos usando doxiciclina
              </span>
              <p className={style.stats}>
                {stats && stats.numberOfTreatmentsUsingDoxycycline}
              </p>
            </div>
            <div>
              <span className={style.field}>
                Tratamentos usando ceftriaxona
              </span>
              <p className={style.stats}>
                {stats && stats.numberOfTreatmentsUsingCeftriaxone}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
