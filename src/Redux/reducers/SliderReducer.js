
import { REG_BANNER , GET_BANNER , DELETE_BANNER } from '../actions/types'


const initialState = {
    Sliders: [],
     Message :[],
    SuccessMessage: '',
    LoginMessage: '',
}

const SliderReducer = (state = initialState, action) => {

    switch (action.type) {

        case REG_BANNER:
            return { ...state, Sliders: action.payload }

        case GET_BANNER:
            debugger
            return { ...state, Sliders: action.payload }

        



        case DELETE_BANNER:
            debugger

            let newstate = state.Sliders.filter((item) => item._id !== action.id)
            return {...state, Sliders: newstate}

            // case UPDATE_WORKER:
            //     {
            //     debugger;
                
            //         var updateState = state.Sliders;
            //         let id = action.payload._id;
            //         let newList = updateState.filter((item) => item._id !== id);
            //          newList.unshift(action.payload);
            
            //    return ({
            //             ...state,
            //             Sliders: newList,
                        
            //         });
            //     }


        default:
            return state;
    }
}

export default SliderReducer