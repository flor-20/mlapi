
import {FETCH_PRODUCTS} from './type';

import Axios from 'axios';



export function fetchProduct(query){
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/api/search?q=${query}`)
        .then(json => {
            dispatch({ type: FETCH_PRODUCTS, payload: json.data });
        });
    }   
}


