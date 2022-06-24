import React, { Component } from 'react';
import { connect  } from 'react-redux';
import store from './Redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentAdmin, logoutAdmin } from './Redux/actions/Admin';
import { setCurrentUser ,logoutUser } from './Redux/actions/UserAction';
import Routes from './components/Routes/Routers';
// import Steeper from './components/Stepper';


if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentAdmin(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    alert("Hellow this Alert for time out")
    store.dispatch(logoutAdmin());
    window.location.href = '/login'
  }
}

else if(localStorage.UserjwtToken)
{
  setAuthToken(localStorage.UserjwtToken);
  const decod = jwt_decode(localStorage.UserjwtToken);
  store.dispatch(setCurrentUser(decod));
  const cTime = Date.now() / 1500;
  if(decod.exp < cTime)
  {
    alert("Hellow this Alert form Doctor time out")
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}




class App extends Component {

  // componentDidMount(){
   
  // }
 
  render() {
    return (
        
    <div>
    <Routes/>
      </div>
      
        
    );
  }
}

const maptoStatetoProps = (state)=>({
   auth : state.auth,
   doctor : state.doctor
})

export default connect(maptoStatetoProps)(App);
