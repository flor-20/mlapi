import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/home.css';

const Home = () => {
    return (
       <div className="containerHome">
           <h1 className="title">BIENVENIDOS A MERCADO HENRY</h1>
           <h3 className="subtitle">El mejor sitio de compras de Latinoamérica</h3>

           <button className="btn btn-outline-dark"><Link to="/search" className="botonLink">INGRESAR</Link></button>
       </div>
    );
}

export default Home;