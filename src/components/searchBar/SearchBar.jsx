import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchProduct} from '../../actions/fetchProducts';

//estilos
import './Styles/searchBar.css'

const SearchBar = () => {

    const[search, setSearch] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchProduct(search))
        setSearch('');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                    <a className="navbar-brand" style={{fontStyle:'-moz-initial', color:'yellow'}}>Mercado Henry</a>
                        <form className="formSearchBar d-flex" onSubmit={handleSubmit}>
                            <input className="form-control me-2" 
                            type="search" placeholder="Search your product..."
                            value={search}
                            onChange= {(e)=> setSearch(e.target.value)}
                            ></input>
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
            </div>
        </nav>
    );
} 

export default SearchBar;