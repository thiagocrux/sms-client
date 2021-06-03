import React from 'react';

import ListItem from './ListItem/ListItem';
import Heading from '../../Layout/Heading/Heading';
import SearchItemNotFound from '../../Common/SearchItemNotFound/SearchItemNotFound';

import style from './List.module.css';

export default function List({ patients }) {
  // const patients = Object.values(props.patients)[0];

  return (
    <div className={style['list-container']}>
      {patients.length ? (
        <>
          <Heading type='primary'>Resultado da busca:</Heading>
          <div className={style['list-header']}>
            <span>Cartão do SUS</span>
            <span>CPF</span>
            <span>Nome do paciente</span>
          </div>
          <ul className={style.list}>
            {patients &&
              patients.map(patient => (
                <ListItem key={patient.cpf} patient={patient} />
              ))}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject='paciente' link='/patient' />
      )}
    </div>
  );
}
