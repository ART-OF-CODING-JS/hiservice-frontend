import React from 'react';
import "./pagination.css"
const Pagination = ({ recordsPerPage, totalPosts, setCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / recordsPerPage); i++) {
    pageNumbers.push(i);
}

return (
  <div className="pagination container-com">
  <nav aria-label="Page navigation example">
    <ul className='pagination pagination-lg'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <button onClick={() => setCurrentPage(number)} className='page-link'>{number}</button>
        </li>
      ))}
    </ul>
  </nav>
  </div>
);
};

  export default Pagination;