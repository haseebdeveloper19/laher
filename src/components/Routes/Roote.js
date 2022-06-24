import React, { Component } from 'react'
import { Route ,  Switch, } from 'react-router-dom';
import NavHeader from '../Views/Home/Header/HeaderNav/Headers';
import Footer from  '../Views/Home/Footer/Footer';
import Checkout from '../Views/Checkout';
import NotFound from '../Views/NotFound';
import SingleProduct from '../Views/Products/singleProduct';
import ProductLists from '../Views/Products/MainPrducts';
import SuccessPage from '../Views/SuccessPage/Success'
import Cart from '../Views/Cart';
import Main from '../Views/Home/Header/main';
import ContactUs from '../Views/contact us';
import AboutUs from '../Views/About us';
class Root extends Component{

        
   

    render(){
   
        
        return(
            <div>
                
                <Switch>
                <Route exact path="/" component={Main}/>
                <div>
                 <div style={{backgroundColor:'black' ,}}> <NavHeader /></div>
                 <Route path="/Cart" component={Cart}/>
                 <Route path="/Checkout" component={Checkout}/>
                 <Route path="/InfoSucess" component={SuccessPage}/>
                 <Route path="/Single" component={SingleProduct}/>
                 <Route  path="/Product_Cata" component={ProductLists}/>
                 <Route  path="/ContactUs" component={ContactUs}/>
                 <Route  path="/AboutUs" component={AboutUs}/>
                


                </div>
                {/* <Route path="/profile" component={Profile} /> */}
                <Route path="*" component={NotFound}/>

                </Switch>

                <Footer/>

            </div>
        )
    }
}
export default Root