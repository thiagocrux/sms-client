import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  CalendarDateFill,
  FileMedicalFill,
  PersonBadgeFill,
  PersonFill,
} from "react-bootstrap-icons";

import ListItem from "./ListItem/ListItem";
import Heading from "../../Layout/Heading/Heading";
import SearchItemNotFound from "../../Common/SearchItemNotFound/SearchItemNotFound";

import style from "./List.module.css";

export default function List({ filteredPatients }) {
  const [patients, setPatients] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const patientsPerPage = 2;
  const pagesVisited = pageNumber * patientsPerPage;
  const pageCount = filteredPatients.length / patientsPerPage;

  useEffect(() => {
    setPatients(filteredPatients);
  }, [filteredPatients, patients]);

  const displayPatients = patients
    .slice(pagesVisited, pagesVisited + patientsPerPage)
    .map((patient) => {
      return <ListItem key={patient.cpf} patient={patient} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
            {patients && (
              <>
                {displayPatients}
                <ReactPaginate
                  previousLabel="Anterior"
                  nextLabel="Próximo"
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationButtons"
                  previousLinkClassName="previousPaginationButton"
                  nextLinkClassName="nextPaginationButton"
                  disabledClassName="disabledPaginationButton"
                  activeClassName="activePaginationButton"
                />
              </>
            )}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject="paciente" link="/patient" />
      )}
    </div>
  );
}
