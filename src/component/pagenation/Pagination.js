import React from 'react';
import "./pagination.scss"
const Pagination = ({ recordsPerPage, totalPosts, setCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / recordsPerPage); i++) {
    pageNumbers.push(i);
}

return (
  <nav aria-label="Page navigation example">
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <button onClick={() => setCurrentPage(number)} className='page-link'>{number}</button>
        </li>
      ))}
    </ul>
  </nav>
);
};

  export default Pagination;