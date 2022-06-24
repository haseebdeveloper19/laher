
import { REG_ADMIN , GET_ADMIN , DELETE_ADMIN , UPDATE_ADMIN} from '../../actions/types'

const initialState = {
    Admin: [],
    WomanProduct: [],
    Loading: [],
    OneProduct: {},
    SucessMessage: '',

}

const NewAdminReducer = (state = initialState, action) => {

    switch (action.type) {

        case REG_ADMIN:
            debugger
            
            return {
                ...state,
                Admin: action.payload,
            }

        
        case GET_ADMIN:
            debugger

            return {
                ...state,
                Admin: action.payload,
            }

      

        case DELETE_ADMIN:
            let FilterData = state.Admin.filter(item => item._id !== action.id)
            return {
                ...state,
                Admin: FilterData
            }

        

        case UPDATE_ADMIN:
            debugger;
            let NewStaff = state.Admin.filter(item => {
                if (item._id === action.payload.id);
                return NewStaff.unshift(action.payload)

            })

            return {
                ...state,
                Product: NewStaff,
                Message: action.payload.message
            }


        default:
            return state;
    }
}

export default NewAdminReducer 