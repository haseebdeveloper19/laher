import isEmpty from '../../../validation/is-empty';
import { REG_ADMIN, GET_ADMIN, DELETE_ADMIN, UPDATE_ADMIN, SET_CURRENT_ADMIN, FORGOT_PASS, RESET_PASS, UPDATE_PASS } from '../../actions/types';

const initialState = {
    isAuthenticated: false,
    user: [],
    Admin: [],
    MessageAdmin: {},

}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_ADMIN:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                Admin: action.payload,

            };

        case REG_ADMIN:
            debugger;
            return {
                ...state,
                Admin: action.payload
            }
        case GET_ADMIN:
            debugger;
            return {
                ...state,
                Admin: action.payload
            }

        case DELETE_ADMIN:


            let FilterData = state.Admin.filter(item => item._id !== action.id)
            return { ...state, Admin: FilterData }

        case UPDATE_ADMIN:
            debugger;
            let NewStaff = state.Admin.filter(item => {
                if (item._id === action.payload.id);
                NewStaff.unshift(action.payload)
               return item 
            })

            return { ...state, Admin: NewStaff }


        case FORGOT_PASS:
            // debugger;

            return {
                ...state,
                MessageAdmin: action.payload.message
            };

        case RESET_PASS:
            // debugger;

            return {
                ...state,
                MessageAdmin: action.payload
            }

        case UPDATE_PASS:
            debugger;

            return {
                ...state,
                MessageAdmin: action.payload.message
            }


       



        default:
            return state;
    }
}