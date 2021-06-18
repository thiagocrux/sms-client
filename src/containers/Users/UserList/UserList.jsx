import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Mailbox2, PersonBadgeFill, PersonFill } from 'react-bootstrap-icons';

import Heading from '../../../components/Common/Heading/Heading';
import SearchItemNotFound from '../../../components/Common/SearchItemNotFound/SearchItemNotFound';
import UserListItem from '../UserListItem/UserListItem';

import style from './UserList.module.css';

export default function PatientList({ filteredResult }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filteredResult);
  }, [filteredResult]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = items.length / itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return <UserListItem key={item._id} user={item} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // console.log('[LIST]: ' + { ...items });

  return (
    <div className={style.listContainer}>
      {items.length ? (
        <>
          <Heading type="primary">Resultado da busca:</Heading>
          <div className={style.listHeader}>
            <span>
              <PersonBadgeFill className={style.icon} /> CPF
            </span>
            <span>
              <PersonFill className={style.icon} /> Nome do usuário
            </span>
            <span>
              <Mailbox2 className={style.icon} /> E-mail
            </span>
          </div>
          <ul className={style.list}>
            {items && (
              <>
                {displayItems}
                <ReactPaginate
                  previousLabel="Anterior"
                  nextLabel="Próximo"
                  breakLabel="..."
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
        <SearchItemNotFound subject="usuário" link="/users/new" />
      )}
    </div>
  );
}
