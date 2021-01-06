import React from 'react';
import './Styles/product.css'

const Product = ({p}) => {
    return(
        <div className="media" >
              {/*   <div className="image"> */}
                    <img src={p.thumbnail} alt={p.title} className="align-self-center mr-3" ></img>
               {/*  </div> */}
                <div className="media-body">
                    <h6 className="mt-0">{p.title}</h6>
                    <p className="card-text">$ {p.price} {p.currency_id} </p>
                    <p className="card-text">Condition: {p.condition}</p>
                    <p className="card-text">Available: {p.available_quantity}u.</p>
                </div>
        </div>
    ); 
};

export default Product;