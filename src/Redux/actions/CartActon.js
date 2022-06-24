import axios from 'axios';
import { GET_ERRORS, REG_CART ,INCREMENT_CLIENT_PRODUCT , GET_CART_USER, GET_CART , UPDATE_CART_QUANTITY_CLIENT , DELETE_CART , INCREMENT, DECREMENT, INSERT_LOCAL_DATA, FETCH_LOCAL_DATA, FILTER_CART_BY_CATA  } from './types';

export const registerCart =  doctor =>  dispatch => {
    axios.post('http://localhost:8000/api/cart/register', doctor)
            .then(res =>{
              dispatch({
                type: REG_CART,
                payload: res.data.data
            });

            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}



export const registerCartLocal =  doctor =>{
   
        return{
            
             type : INSERT_LOCAL_DATA,
             payload : doctor
        }
}

export const GetCartLocal = () => async dispatch => {
   try{
        dispatch({
            type : FETCH_LOCAL_DATA
        })
    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        })
    }
}


// export const Filter_All_Catagory = () => async dispatch => {
//     try{
//          dispatch({
//              type : FILTER_CART_BY_CATA,
//          })
//         }
//      catch(err){
//          dispatch({
//              type: GET_ERRORS,
//              payload : err.response.data
//          })
//      }
//  }




export const  Get_Cart_User = ( ) =>  dispatch => {
     axios.get('/api/cart/Get_all_cart')
    .then(res=>{
      
        dispatch({
            type : GET_CART_USER,
            payload : res.data.data
        })
     

    })
    .catch(error =>{
        dispatch({
            type : GET_ERRORS,
            payload : error.response
        })

    })
}

export const  Get_Cart = () =>  dispatch => {
    axios.get('http://localhost:8000/api/cart/Get_Cart')
    .then(res=>{
      
        dispatch({
            type : GET_CART,
            payload : res.data.data
        })
     

    })
    .catch(error =>{
        dispatch({
            type : GET_ERRORS,
            payload : error.response.data
        })

    })
}


export const Inrement = ( data ) => {
    return { 
          type : INCREMENT ,
          id : data._id ,
    }
}

export const Decrement = ( data ) => {
    
    return { 
          type : DECREMENT ,
          id : data._id
    }
}


export const  UpdateCartQuantity = ( data ) =>  dispatch => {
     axios.post(`http://localhost:8000/api/cart/updateClientProduct/${data._id}`,data)    
    .then(res=>{
        dispatch({
            type : INCREMENT_CLIENT_PRODUCT,    
            payload: res.data
        })
    }) 
  
      
    .catch(error => { 
       dispatch({
           type:GET_ERRORS,
           payload : error.response
       })
    })    
       
}


export const InrementQuantityClient = ( ) => {
    return { 
          type : UPDATE_CART_QUANTITY_CLIENT ,
    }
}





export const Delete_Cart = (data) =>   {

    
        return{
            type : DELETE_CART ,
            id : data._id    
    }

}


