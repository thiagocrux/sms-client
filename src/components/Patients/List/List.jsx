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

export default function List({ filteredResult }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filteredResult);
  }, [filteredResult, items]);

  return (
    <div className={style.listContainer}>
      {items.length ? (
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
            {items && <Pagination items={items} />}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject="paciente" link="/patient" />
      )}
    </div>
  );
}
