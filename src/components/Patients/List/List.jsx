import React from 'react';
import {
  CalendarDateFill,
  FileMedicalFill,
  PersonBadgeFill,
  PersonFill,
} from 'react-bootstrap-icons';

import ListItem from './ListItem/ListItem';
import Heading from '../../Layout/Heading/Heading';
import SearchItemNotFound from '../../Common/SearchItemNotFound/SearchItemNotFound';

import style from './List.module.css';

export default function List({ patients }) {
  // const patients = Object.values(props.patients)[0];

  return (
    <div className={style.listContainer}>
      {patients.length ? (
        <>
          <Heading type="primary">Resultado da busca:</Heading>
          <div className={style.listHeader}>
            <span>
              <FileMedicalFill className={style.icon} /> Cartão do SUS
            </span>
            <span>
              <PersonBadgeFill className={style.icon} /> CPF
            </span>
            <span>
              <PersonFill className={style.icon} /> Nome do paciente
            </span>
            <span>
              <CalendarDateFill className={style.icon} /> Data de nascimento
            </span>
          </div>
          <ul className={style.list}>
            {patients &&
              patients.map((patient) => <ListItem key={patient.cpf} patient={patient} />)}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject="paciente" link="/patient" />
      )}
    </div>
  );
}
