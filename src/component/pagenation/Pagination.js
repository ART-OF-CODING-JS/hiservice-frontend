import React from "react";
import "./pagination.css";
const Pagination = ({ recordsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination container-com">
      <ul className="pagination pagination-lg">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
