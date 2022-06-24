import axios from 'axios';
import { GET_ERRORS, REG_PRODUCT,FALSE_LOADING, UPDATE_PRODUCT_SUCCESS , GET_SORT_PRICE, GET_PRODUCT_WOMAN,  GET_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, UPDATE_PRODUCT, GET_ONE_PRODUCT, GET_FILTER_DATA, FILTER_MAN_WOMAN } from './types';


export const registerProduct = (user) => async dispatch => {
   const res = await axios.post("http://localhost:8000/api/product/register", user)
               dispatch({
                   type: REG_PRODUCT,
                   payload : res.data
               })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}




export const updateProduct = (data  ) => async dispatch => {
    try {
        const update =  await axios.post(`http://localhost:8000/api/product/updateProduct/${data.id}` , data)
               dispatch({
                   type: UPDATE_PRODUCT,
                   payload : update.data.data
               })
            
             
        }
        catch(err) {
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response
            // });
            console.log("error" , err);
            
        };

}



export const GetOneProduct = ( id ) => {
   return {
       type: GET_ONE_PRODUCT ,
       payload : id 
   }

            
}


export const LoadingUpdate = (data) => {
               return {
                   type: GET_PRODUCT_WOMAN,
                   payload : data._id
                   
               }
    
            
}


export const LoadingFalse = (data) => {
    return {
        type: FALSE_LOADING,
        payload : data._id
        
    }

 
}


export const GetProduct = () => async dispatch =>{
    debugger
  try {
    const users = await axios
      .get("http://localhost:8000/api/product/getProduct")
    dispatch({
      type: GET_PRODUCT,
      payload: users.data.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
}
}



export const Filter_Man_and_Woman = () => dispatch =>{
    
    try {
      
      dispatch({
        type: FILTER_MAN_WOMAN,
        
      })
    } catch (err) {

      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
  }
  }



export const Update_Avaliable_qunty = (product) => async dispatch =>{
   
    try {
        const resp = await axios.post('http://localhost:8000/api/product/updateAvaliableQunaty', product)
        .then(res => res.data)
       
        dispatch({
                     type: UPDATE_PRODUCT_SUCCESS,
                     payload : resp
                 })
    } catch (err) {
        console.error(err);
    }
    
   
}





export const Get_Sort_Price = (cata) => dispatch =>{
    try{
        dispatch({
            type : GET_SORT_PRICE,
             payload : cata
        })
    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        })
    }
   
}




export const Get_Catagory_Data = (cata) => dispatch =>{
    try{
        dispatch({
            type : GET_FILTER_DATA,
             payload : cata
        })
    }
    catch(err){
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        })
    }
   
}

export const delete_Product = (id) => async dispatch =>{
    await axios.get(`http://localhost:8000/api/product/deleteproduct/${id}`)
    .then(res =>{
         dispatch({
             type: DELETE_PRODUCT,
             id : id
         })
       
     })
     .catch(error =>{
         dispatch({
             type : GET_ERRORS,
             payload : error.response
         })
     })
}


export const Edit_Product = (id)=>{

         return({
             type: EDIT_PRODUCT,
             payload : id
         })
     }


