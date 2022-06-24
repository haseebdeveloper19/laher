import axios from 'axios';
import { UPDATE_ADMIN, GET_ADMIN, DELETE_ADMIN, REG_ADMIN , GET_ERRORS } from './types';
  

export const registerAdmin = (user) => async dispatch => {
   axios.post('/api/newAdmin/register', user)
            .then(res =>{
               dispatch({
                   type: REG_ADMIN,
                   payload : res.data
               })
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}




export const updateAdmin = (data , history ) =>  dispatch => {
     axios.post(`/api/newAdmin/updateProduct/${data._id}` , data)
    .then(res =>{
        

               dispatch({
                   type: UPDATE_ADMIN,
                   payload : res.data
               })
    
                history.push('/View_Product')
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}





export const GetAdmin = () =>  dispatch =>{
   axios.get('/api/newAdmin/Get_NewAdmin')
    .then(res =>{
         dispatch({
             type: GET_ADMIN,
             payload : res.data.data
         })
         
     })
     .catch(error =>{

         dispatch({
             type : GET_ERRORS,
             payload : error.reposnse
         })
     })
   
}



export const delete_Admin = (id) =>  dispatch =>{
     axios.get(`/api/newAdmin/Delete_NewAdmin/${id}`)
    .then(res =>{
         dispatch({
             type: DELETE_ADMIN,
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

