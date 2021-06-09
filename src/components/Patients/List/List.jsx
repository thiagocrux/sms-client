import React, { useEffect, useState } from "react";
import {
  CalendarDateFill,
  FileMedicalFill,
  PersonBadgeFill,
  PersonFill,
} from "react-bootstrap-icons";

import Heading from "../../Layout/Heading/Heading";
import SearchItemNotFound from "../../Common/SearchItemNotFound/SearchItemNotFound";

import style from "./List.module.css";
import Pagination from "../../Layout/Pagination/Pagination";

export default function List({ filteredPatients }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(filteredPatients);
  }, [filteredPatients, patients]);

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
            {patients && <Pagination items={patients} />}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject="paciente" link="/patient" />
      )}
    </div>
  );
}
