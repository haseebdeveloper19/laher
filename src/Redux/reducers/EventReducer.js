import { FETCH_EVENT_DATA, INSERT_EVENT_DATA } from "../actions/types"


const initialState = {
    Events: [],
   
}





const EventReducer = (state = initialState, action) => {

    switch (action.type) {

        case INSERT_EVENT_DATA:
    //  debugger
        return{
            ...state,
            Events : action.payload
        }
            

        case FETCH_EVENT_DATA:
            //   debugger
        return{
                ...state,
                Events: action.payload,
            }









       

        default:
            return state;
    }
}

export default EventReducer