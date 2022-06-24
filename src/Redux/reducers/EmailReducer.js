import { GET_EMAIL, REG_EMAIL } from "../actions/types"


const initialState = {
    Email: [],

}





const EmailReducer = (state = initialState, action) => {

    switch (action.type) {

        case REG_EMAIL:
            return {
                ...state,
                Email: action.payload
            }

        case GET_EMAIL:
            return {
                ...state,
                Email: action.payload,
            }



        default:
            return state;
    }
}

export default EmailReducer