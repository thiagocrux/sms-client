import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import ListItem from "../../Patients/List/ListItem/ListItem";

import "./Pagination.css";

function Pagination({ items }) {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 2;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = items.length / itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return <ListItem key={item._id} patient={item} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
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
        containerClassName="paginationContainer"
        breakClassName="paginationBreak"
        pageLinkClassName="paginationLink"
        previousClassName="paginationPrevious"
        previousLinkClassName="paginationPreviousLink"
        nextClassName="paginationNext"
        nextLinkClassName="paginationNextLink"
        disabledClassName="paginationDisabled"
        activeLinkClassName="paginationActive"
      />
    </>
  );
}

export default Pagination;
