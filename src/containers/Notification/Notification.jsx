import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';

import Tabs from '../../components/Notifications/Tabs/Tabs';
import SearchForm from '../../components/Patients/SearchForm/SearchForm';
import List from '../../components/Patients/List/List';

import { patientsContext } from '../../context/patientsContext.js';

import style from './Notification.module.css';

export default function Notification() {
  /* TODO:
    1. De início, ao buscar o paciente, o componente <SearchForm /> deve ser o único à mostra
      1.1 Se a busca der algum resultado, mostrar a lista de pacientes;
      1.2 Se a busca não der resultado, mostrar mensagem (Ex.: "Nenhum resultado foi encontrado") e um <Link /> para a criação de um novo paciente;
    2. Escolher na lista o paciente procurado a partir dos parâmetros de busca
      2.1 A lista deve conter o número do cartão do SUS, o nome do paciente e mais qualquer informação pertinente para cada um dos pacientes encontrados;
      2.2 (Checar viabilidade) Onde as informações completas do paciente são mostradas, pode haver um link para a edição ou visualização de demais informações relacionadas ao paciente;
      2.3 Ao selecionar um paciente, a caixa de pesquisa e a lista devem ser ocultadas e dar lugar a um componente com as informações do paciente selecionado (componente <Info />), a opção de pesquisar por outro paciente (um botão) e as abas de notificação (componente <Tabs />);
      2.4 Ao pesquisar por outro paciente, tudo volta ao estado do primeiro todo;
    3. Ao clicar numa das abas de notificação, o usuário será encaminhado a sua respectiva página;
  */

  // useEffect(() => {
  //   getPatients();
  // }, []);

  // const getPatients = async () => {
  //   try {
  //     const getRequest = await await axios.get(
  //       'http://localhost:8000/api/v1/patients/'
  //     );
  //     setPatients(getRequest.data);
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // };

  const { patients } = useContext(patientsContext);
  const [search, setSearch] = useState({
    criterion: 'susCardNumber',
    inputValue: '',
  });
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleSubmit = () => {
    const { criterion, inputValue } = search;

    const filteredPatient = patients.filter(patient => {
      const key = Object.keys(patient).filter(key => key === criterion);
      return patient[key].toLowerCase() === inputValue.toLowerCase();
    });
    console.log('Patient:', filteredPatient);
    setFilteredPatients(filteredPatient);
  };

  useEffect(() => {
    const { criterion, inputValue } = search;

    const filter = patients.filter(filteredPatients => {
      const key = Object.keys(filteredPatients).filter(
        key => key === criterion
      );
      return filteredPatients[key].toLowerCase().includes(inputValue);
    });
    setFilteredPatients(filter);
  }, [patients, search]);

  return (
    <div className={style.notification}>
      <SearchForm
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <List patients={filteredPatients} />
      <Tabs />
    </div>
  );
}
