import React from 'react';
import './Styles/pagination.css'

const Pagination = ({ProductsPerPage, totalProducts, paginate}) => {

    const PageNumbers = [];

    for(let i=1; i <= Math.ceil(totalProducts/ProductsPerPage); i++ ){
        PageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {PageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link"
                        onClick={()=> paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    );

}

export default Pagination;