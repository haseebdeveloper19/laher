import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Editproduct from './update/'
import Viewpro from './ViewProduct/Viewpro'
import Addpro from './addProduct/addproduct'
import OrderList from '../Orders/Orderlist'
import YearBase from '../Orders/YearBase'
import Order from '../Orders/SingleOrder'
import Emails from '../Emails'
import Dashboard  from '../AdminDashboard'
import { connect } from 'react-redux'
import { GetProduct } from '../../../Redux/actions/ProductAction'
import PrivateAdmin from '../../Routes/PrivateRoute/PrivateAdmin'
class ProductsParent extends Component {

    componentDidMount() {
        this.props.GetProduct()

    }

   

    render() {

        return (
            <Router>
                <Switch>
                    <PrivateAdmin path="/Admin_Dashboard" component={Dashboard} />
                    <PrivateAdmin path="/Add_Product" component={Addpro} />
                    <PrivateAdmin path="/Products/Edit_Product" component={Editproduct} />
                    <PrivateAdmin path="/Products/View_Product" component={Viewpro} />
                    <PrivateAdmin path="/Orders" component={Order} />
                    <PrivateAdmin path="/OrderList" component={OrderList} />
                    <PrivateAdmin path="/YearBase" component={YearBase} />
                    <PrivateAdmin path="/EmailList" component={Emails} />

                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state) => ({

    productdata: state.Product.Products,

})


export default connect(mapStateToProps, { GetProduct })(ProductsParent)

