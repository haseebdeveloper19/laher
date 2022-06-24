import axios from 'axios';
import { FETCH_CHECKOUT_DATA, GET_ERRORS , REG_CHECKOUT_DATA } from './types';

export const registerCheckout = ( doctor , history )=>  dispatch => {
    axios.post('http://localhost:8000/api/checkout/Payment', doctor)
            .then(res =>{
              dispatch({
                type: REG_CHECKOUT_DATA,
                payload: res.data
            });

          
             

            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const getCkoutInfo = (  ) => async dispatch =>{

    
  try {
      const users = await axios
        .get(`http://localhost:8000/api/checkout/getCheckout`)
        .then(res => res.data.data)
  
      dispatch({
        type: FETCH_CHECKOUT_DATA,
        payload: users,
      })
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }



}

// export const getCkoutInfo = ( id ) => async dispatch =>{

    
//         try {
//             const users = await axios
//               .get(`/api/checkout/clientinfo/${id}`)
//               .then(res => res.data.data)
        
//             dispatch({
//               type: FETCH_CHECKOUT_DATA,
//               payload: users,
//             })
//           } catch (err) {
//             dispatch({
//               type: GET_ERRORS,
//               payload: err.response.data
//             })
//         }



// }
