import { REG_CHECKOUT_DATA , FETCH_CHECKOUT_DATA} from "../actions/types"


const initialState = {
    CheckOuts: [],
   
}





const CheckoutReducer = (state = initialState, action) => {

    switch (action.type) {

        case REG_CHECKOUT_DATA:

        return{
            ...state,
            CheckOuts : action.payload
        }
            

        case FETCH_CHECKOUT_DATA:
        return{
                ...state,
                CheckOuts: action.payload,
            }









       

        default:
            return state;
    }
}

export default CheckoutReducer