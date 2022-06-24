import { SET_CURRENT_USER , GET_USER, FORGOT_PASS , RESET_PASS , UPDATE_PASS  ,VERIFY_EMAIL, REG_USER, GET_EMAIL, COUNT_USERS, COUNT_WEB_VISITERS} from '../actions/types';
import isEmpty from '../../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: [],
    User:[],
    Email :[],
    count: [],
    Webcount :[],
    MessageAdmin : {},
 
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:

            return {
            
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                User: action.payload,
                
            };

            case COUNT_USERS:

                return{
                    ...state,
                    count : action.payload
                }

                case COUNT_WEB_VISITERS:
                    // debugger
                    return{
                        ...state,
                        Webcount : action.payload
                    }

            case GET_EMAIL:
                // debugger
                return {
                    ...state,
                    Email : action.payload
                }
            
            case REG_USER:
                // debugger;
               return{
                   ...state,
                   User : action.payload
               } 

               case GET_USER :
                   return {
                       ...state,
                       User : action.payload
                   }
            case FORGOT_PASS :
            // debugger;

                return{
                ...state,
                MessageAdmin : action.payload.message
                };

            case RESET_PASS :
            // debugger;

                return{
                    ...state , 
                    MessageAdmin : action.payload
                }

                case UPDATE_PASS :
                    // debugger;
        
                        return{
                            ...state , 
                            MessageAdmin : action.payload.message
                        }
                        

                case VERIFY_EMAIL:
                    debugger ;
                    return{
                        ...state,
                        MessageAdmin : action.payload
                    }        

               
            
        default: 
            return state;
    }
}