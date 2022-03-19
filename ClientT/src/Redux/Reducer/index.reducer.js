import { GET_BOOKS } from '../Actions/constantes.actions';
const initialState = {
    books: [], 
    allbooks: [],
    
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
                allbooks: action.payload
            }
        default:
            return{
                ...state
            }
    }
}
