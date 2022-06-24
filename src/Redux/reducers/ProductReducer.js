
import { GET_PRODUCT, REG_PRODUCT, GET_PRODUCT_WOMAN, DELETE_PRODUCT, UPDATE_PRODUCT, SUCESS_MESSAGE, GET_ONE_PRODUCT, FILTER_MAN_WOMAN } from '../actions/types'


const initialState = {
    Products: [],
    WomanProduct: [],
    Loading: [],
    Price: [],
    OneProduct: {},
    cata: '',
    Filter: [],
    Premium: [],
    Royal: [],
    Designer: [],
    Khaddi: [],
    WKhaddi: [],
    WGoli: [],
    Handmad: [],
    WDesigner: [],
    tototal: 0,
    visibleProducts: [],
    SucessMessage: '',

}

// const total = (data) =>{

//    let tototal = data.reduce((result, cartItem) => result +  parseInt(cartItem.Avaliable_Quantity), 0);
//     return( tototal)
// }

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case REG_PRODUCT:
            if (!state.Products.find(item => item._id === action.payload._id))
                state.Products.push({
                    ...action.payload
                })
            return { Products: [...state.Products], ...state, }

        case SUCESS_MESSAGE:
            return {
                ...state,
                Message: action.payload.message
            }

        case GET_PRODUCT:

            return {
                ...state,
                Products: action.payload,
            }


       
        
        
        case FILTER_MAN_WOMAN:
            state.Products.filter(item => {

                if (item.Size === "Premium Khaddi") {
                    state.Premium.push(item)
                }
                if (item.Size === "Royal Organza") {
                    state.Royal.push(item)
                }
                if (item.Size === "Summer Designer Plus") {
                    state.Designer.push(item)
                }
                if (item.Size === "Summer Khaddi") {
                    state.Khaddi.push(item)
                }
                if (item.Size === "Winter Khaddi") {
                    state.WKhaddi.push(item)
                }
                if (item.Size === "Winter Goli") {
                    state.WGoli.push(item)
                }
                if (item.Size === "Handmade Series") {
                    state.Handmad.push(item)
                } if (item.Size === "Designer Plus") {
                    state.WDesigner.push(item)
                }

                return item
            })

            return {
                ...state,
            }









        case GET_ONE_PRODUCT:
            let Onedata = state.Products.find(item => item._id === action.payload)
            return {
                ...state,
                OneProduct: Onedata
            }

        case DELETE_PRODUCT:
            let FilterData = state.Products.filter(item => item._id !== action.id)
            return {
                ...state,
                Products: FilterData
            }

        case GET_PRODUCT_WOMAN:
            state.Products[state.Products.findIndex(item => item._id === action.payload)].loading = true

            return {
                ...state,
                Products: [...state.Products]
            }

       
        case UPDATE_PRODUCT:
            debugger
          console.log("action" , action.payload);
          
            return Object.assign({}, state, {
                Products: state.Products.map((todo) => {
                    if (todo.id === action.payload.id)
                        todo = action.payload
                    return todo
                })
            })



        


        default:
            return state;
    }
}

export default ProductReducer