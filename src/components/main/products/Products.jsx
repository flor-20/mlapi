import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../product/Product';
import Pagination from "../../pagination/Pagination";

//styles
import './Styles/products.css'
//action import
import {fetchProduct/* , fetchByCondition */} from '../../../actions/fetchProducts';
import { nativeTouchData } from 'react-dom/test-utils';




const Products = () => {


let products = useSelector(state => state.shop.products)
/* console.log(products) */

//pagination
const [currentPage, setCurrentPage] = useState(1);
const [ProductsPerPage] = useState(30);


const dispatch = useDispatch();

useEffect(()=>{
    dispatch( fetchProduct() )
}, [])

const indexOfLastProduct = currentPage * ProductsPerPage;
const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
/* console.log(currentProducts) */
//change page function
const paginate = pageNumber => setCurrentPage(pageNumber);

/* Sort ------------------------------------------------------------------------------------------- */
const [sort, setSort] = useState('');


function handleChangeSort (e){
 let sortSetted = e.target.value
    setSort(sortSetted)

    listProducts();
}
const listProducts = () => {
    if(sort !== ''){
        products.sort((a, b)=> (sort === 'lowest')?(a.price < b.price?1:-1):(a.price > b.price?1:-1))
    }else{
        products.sort((a, b)=> (a.id < b.id?1:-1))
    }

    if(condition !== ''){
        products.sort((a, b)=> (condition === 'new')?(a.condition < b.condition?1:-1):(a.condition > b.condition?1:-1))
     }

}
/* ----------------------------------------------------------------------------------------------------- */

/* condition */
 const [condition, setCondition] = useState('');

/* esto quizas conviene que lo haga en redux */
function handleChangeCondition (e){
    let conditionSetted = e.target.value
  setCondition(conditionSetted)

  listProducts();
}



/* --------------------------------------------------------------------------------------------------- */
    return(
        <div className="container">
    {/*  hago el sort aca porque de otra manera no me sale--osea que esto es el sort de precio */}
                    <div className="Filter" >
                            <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <label className="Price" >
                                Price order by
                                <select className="form-controlProducts" 
                                onChange={handleChangeSort} value={sort}
                                >
                              
                                    <option value="">Select</option>
                                    <option value="lowest">lowest to highest</option>
                                    <option value="highest">highest to lowest</option>

                                </select>
                            </label>
                        </div>
            {/* Aca tuve que hacer el filter por condition */}
                        <div className="col-md-4">
                            <label className="condition">
                                choose the product condition
                                <select className="form-controlProducts" 
                                onChange={handleChangeCondition} value={condition}
                                >
                               
                                    <option value="">All</option>
                                    <option value="new">new</option>
                                    <option value="used">used</option>

                                </select>
                            </label>
                        </div>
                    </div>
                    
                        <Pagination
                       ProductsPerPage = {ProductsPerPage}
                       totalProducts = {products.length} 
                       paginate={paginate}
                       />
                   
                    <div className='row'>
                    {currentProducts.map((p) => 
                    <div className="col-3">
                    <Product 
                    p={p}
                    key={p.id}/>
                    </div>
                    
                    )}
                </div>
        </div>
    );
};

export default Products;
