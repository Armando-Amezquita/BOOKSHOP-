import axios from 'axios';
import constantes from '../../Constantes';
import { GET_BOOKS } from "./constantes.actions";

export const getBooks = () =>{
    return async (dispatch) => {
        const books = await axios(constantes.BOOKS_URL);
        console.log(books.data)
        dispatch({
            type: GET_BOOKS,
            payload: books.data
        })
    }
}
