import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  CalendarDateFill,
  FileMedicalFill,
  PersonBadgeFill,
  PersonFill,
} from 'react-bootstrap-icons';

import Heading from '../../../components/Common/Heading/Heading';
import SearchItemNotFound from '../../../components/Common/SearchItemNotFound/SearchItemNotFound';
import PatientListItem from '../PatientListItem/PatientListItem';

import style from './PatientList.module.css';

export default function PatientList({ filteredResult }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filteredResult);
  }, [filteredResult, items]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = items.length / itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map(item => {
      return <PatientListItem key={item._id} patient={item} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // console.log('[LIST]: ' + { ...items });

  return (
    <div className={style.listContainer}>
      {items.length ? (
        <>
          <Heading type='primary'>Resultado da busca:</Heading>
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
            {items && (
              <>
                {displayItems}
                <ReactPaginate
                  previousLabel='Anterior'
                  nextLabel='Próximo'
                  breakLabel='...'
                  pageCount={pageCount}
                  onPageChange={changePage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName={style.paginationContainer}
                  breakClassName={style.paginationBreak}
                  pageLinkClassName={style.paginationLink}
                  previousClassName={style.paginationPrevious}
                  previousLinkClassName={style.paginationPreviousLink}
                  nextClassName={style.paginationNext}
                  nextLinkClassName={style.paginationNextLink}
                  disabledClassName={style.paginationDisabled}
                  activeLinkClassName={style.paginationActive}
                />
              </>
            )}
          </ul>
        </>
      ) : (
        <SearchItemNotFound subject='paciente' link='/patient' />
      )}
    </div>
  );
}
