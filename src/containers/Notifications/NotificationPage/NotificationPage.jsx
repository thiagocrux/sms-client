import React, { useEffect, useState } from 'react';

import PatientList from '../../Patients/PatientList/PatientList';
import PatientSearchForm from '../../Patients/PatientSearchForm/PatientSearchForm';

import api from '../../../utils/api';

import style from './NotificationPage.module.css';

export default function NotificationPage() {
  /* TODO:
  1. De início, ao buscar o paciente, o componente <PatientSearchForm /> deve ser o único à mostra
  1.1 Se a busca der algum resultado, mostrar a lista de pacientes;
  1.2 Se a busca não der resultado, mostrar mensagem (Ex.: "Nenhum resultado foi encontrado") e um <Link /> para a criação de um novo paciente;
  2. Escolher na lista o paciente procurado a partir dos parâmetros de busca
  2.1 A lista deve conter o número do cartão do SUS, o nome do paciente e mais qualquer informação pertinente para cada um dos pacientes encontrados;
  2.2 (Checar viabilidade) Onde as informações completas do paciente são mostradas, pode haver um link para a edição ou visualização de demais informações relacionadas ao paciente;
  2.3 Ao selecionar um paciente, a caixa de pesquisa e a lista devem ser ocultadas e dar lugar a um componente com as informações do paciente selecionado (componente <Info />), a opção de pesquisar por outro paciente (um botão) e as abas de notificação (componente <NotificationOptions />);
  2.4 Ao pesquisar por outro paciente, tudo volta ao estado do primeiro todo;
  3. Ao clicar numa das abas de notificação, o usuário será encaminhado a sua respectiva página;
  */

  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState({
    criterion: 'susCardNumber',
    inputValue: '',
  });

  useEffect(() => {
    api.get('/patients/').then((response) => {
      setPatients(response.data.patients);
    });
  }, []);

  useEffect(() => {
    const { criterion, inputValue } = search;

    const filter = patients.filter((filteredPatients) => {
      const key = Object.keys(filteredPatients).filter(
        (key) => key === criterion
      );
      return filteredPatients[key]
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });

    setFilteredPatients(filter);
  }, [patients, search]);

  const handleSubmit = () => {
    const { criterion, inputValue } = search;

    const filteredPatient = patients.filter((patient) => {
      const key = Object.keys(patient).filter((key) => key === criterion);
      return patient[key].toLowerCase() === inputValue.toLowerCase();
    });
    setFilteredPatients(filteredPatient);
  };

  return (
    <div className={style.notification}>
      <PatientSearchForm
        formHeader="Localize o paciente que será notificado"
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <PatientList filteredResult={filteredPatients} />
    </div>
  );
}
