import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from '../Routes/Roote';
import Login from '../Views/Login/login';
import Dashboard from '../Admin/AdminDashboard';
import NotFound from '../Views/NotFound';
import PrivateAdmin from './PrivateRoute/PrivateAdmin';
// import AdminProfile from '../Admin/Profile'
import ProductsParent from '../Admin/product'
import Addpro from '../Admin/product/addProduct/addproduct'

import Register from '../Views/Login/Register';
// import Event from '../Admin/Events/AddEvnt'
// import ViewEven from '../Admin/Events/ViewEven';
import OrderList from '../Admin/Orders/Orderlist';
import Order from '../Admin/Orders/SingleOrder';
import YearBase from '../Admin/Orders/YearBase';
import Emails from '../Admin/Emails';
class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <PrivateAdmin path="/Admin_Dashboard" component={Dashboard} />
                        <PrivateAdmin path="/Add_Product" component={Addpro} />
                        <PrivateAdmin path="/Products" component={ProductsParent} />
                        {/* <PrivateAdmin path="/Products/Edit_Product" component={Editproduct} /> */}
                        {/* <PrivateAdmin path="/Adminprofile" component={AdminProfile} /> */}
                        {/* <PrivateAdmin path="/event" component={Event} /> */}
                        {/* <PrivateAdmin path="/eventView" component={ViewEven} /> */}
                        <PrivateAdmin path="/OrderList" component={OrderList} />
                        <PrivateAdmin path="/EmailList" component={Emails} />
                        <PrivateAdmin path="/Orders" component={Order} />
                        <PrivateAdmin path="/YearBase" component={YearBase}/>

                        <Route path="/">
                            <Root />
                        </Route>
                        <Route path="*" component={NotFound} />





                    </Switch>



                </div>
            </Router>
        )
    }
}

export default Routes