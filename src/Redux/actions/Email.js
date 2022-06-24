import axios from 'axios';
import { GET_EMAIL, GET_ERRORS, REG_EMAIL, } from './types';

export const registerEmail =  doctor =>  dispatch => {
     
    axios.post('http://localhost:8000/api/email/register', doctor)
            .then(res =>{
              dispatch({
                type: REG_EMAIL,
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





export const  Get_Email = () =>  dispatch => {
    axios.get('http://localhost:8000/api/email/Get_Email')
    .then(res=>{
        
      
        dispatch({
            type : GET_EMAIL,
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


