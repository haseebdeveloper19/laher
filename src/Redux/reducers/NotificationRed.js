import { FETCH_NOTIFICATION_DATA, HIDE_NOTIFICATION } from "../actions/types";


const initialState = {
    Notifi: [],
   
}





const NotifiReducer = (state = initialState, action) => {

    switch (action.type) {

      
            

        case FETCH_NOTIFICATION_DATA:
        return{
                ...state,
                Notifi: action.payload,
            }

            case HIDE_NOTIFICATION  :
                debugger
                let NewStaff = state.Notifi.filter(item => {
                    if (item.IsNotification === true){
                        item.IsNotification = false
                    }
                       return item
    
                })
    
                return {
                    ...state,
                      Notifi : NewStaff
                }









       

        default:
            return state;
    }
}

export default NotifiReducer