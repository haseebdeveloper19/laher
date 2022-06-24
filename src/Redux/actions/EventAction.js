import axios from 'axios'
import { FETCH_EVENT_DATA, INSERT_EVENT_DATA ,GET_ERRORS } from './types'


export const GetEvent = () => async dispatch =>{
    
    try {
      const users = await axios
        .get('/api/event/Get_Event')
        .then(res => res.data.data)
  
      dispatch({
        type: FETCH_EVENT_DATA,
        payload: users,
      })
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
          
           
     
  }
  
  export const registerEvent = (product) => async dispatch =>{
      console.log("products" , product)
     
      try {
          const resp = await axios.post('/api/event/register', product)
          .then(res => res.data.data)
         
          dispatch({
                       type: INSERT_EVENT_DATA,
                       payload : resp
                   })
      } catch (err) {
          console.error(err);
      }
      
     
  }


  export const ModifyEventDate = (product) => async dispatch =>{
   
    try {
        await axios.post('/api/event/eventDate', product)
        .then(res => res.data.data)

    } catch (err) {
        console.error(err);
    }
    
   
}