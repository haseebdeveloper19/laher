import { REG_CART, GET_CART, DELETE_CART, UPDATE_CART_QUANTITY_CLIENT, INCREMENT, DECREMENT, INSERT_LOCAL_DATA, FETCH_LOCAL_DATA, FILTER_CART_BY_CATA } from "../actions/types"


const initialState = {
    AddCart: [],
    totalamount: 0,
    loading: false,
    User: {},
    local: [],
    localD: [],
    Updated: [],
    man: [],
    woman: [],
    Id: ''
}





const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case INSERT_LOCAL_DATA:
            let arr = []
            let data = action.payload
            if (JSON.parse(localStorage.getItem('carts')) === null) {

                arr.push(data);
                localStorage.setItem("carts", JSON.stringify(arr));
            }
            else {
                const localItems = JSON.parse(localStorage.getItem("carts"));

                localItems.map(item => {
                    if (item._id === data._id) {

                        // data.Quantity = item.Quantity + 1
                        data.Quantity = item.Quantity + data.Quantity

                        //    item.Quantity = data.Quantity
                        data.date = Date.now()
                        return item

                    }

                    return arr.push(item);

                });

                arr.push(data);
                localStorage.setItem('carts', JSON.stringify(arr));

            }





        case FETCH_LOCAL_DATA:

            let storage = JSON.parse(localStorage.getItem("carts"))
            return {
                ...state,
                localD: storage,
            }

        case FILTER_CART_BY_CATA:

            let woman = state.AddCart.filter(item => {
                if (item.Catagory === "Woman's") {
                    return state.woman.push(item)
                }
                if (item.Catagory === "Men's") {
                    return state.man.push(item)
                }

                else {

                    return item
                }
            })

            return {
                ...state,
                woman: woman,


            }


        case REG_CART:
            return {
                ...state,
                AddCart: action.payload
            }

        case GET_CART:
            return {
                ...state,
                AddCart: action.payload,
            }

        case UPDATE_CART_QUANTITY_CLIENT:
            let remove = localStorage.removeItem("carts")

            return {
                ...state,
                localD: remove

            }
        case INCREMENT:
            state.localD[state.localD.findIndex(item => item._id === action.id)].Quantity++
            
            localStorage.setItem('carts', JSON.stringify(state.localD));



            return ({
                ...state,
                localD: [...state.localD],
            });

        case DECREMENT:
            
             state.localD[state.localD.findIndex(item => item._id === action.id)].Quantity--
            
           
            localStorage.setItem('carts', JSON.stringify(state.localD));
            return ({
                ...state,
                localD: [...state.localD]
            });

        case DELETE_CART:
            let user = state.localD.filter(item => item._id !== action.id)
            localStorage.setItem('carts', JSON.stringify(user));
            return ({
                ...state,
                localD: user
            });



        default:
            return state;
    }
}

export default CartReducer