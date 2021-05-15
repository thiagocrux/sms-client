import React from 'react';

import Tabs from '../../components/Notifications/Tabs/Tabs';
import SearchForm from '../../components/Patients/SearchForm/SearchForm';
import List from '../../components/Patients/List/List';

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

  return (
    <div className={style.notification}>
      <SearchForm />
      <List />
      <Tabs />
    </div>
  );
}
