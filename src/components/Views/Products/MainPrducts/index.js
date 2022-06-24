import React, { Component } from 'react'
import { GetProduct } from '../../../../Redux/actions/ProductAction'
import { Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import All from '../MainPrducts/all'
import Designer from '../summer/designer plus'
import SummerKhaddi from '../summer/khaddi'
import Spremuim from '../summer/premium'
import Sroyal from '../summer/royal'
import Wdesigner from '../winter/designer'
import Wgoli from '../winter/goli'
import Whandmade from '../winter/handmade'
import WinterKhaddi from '../winter/winter khaddi'
import Summerproduct from '../collection/Summer';
import Winterproduct from '../collection/Winter';
import NewArival from '../NewArriaval/NewArival';
class ProductLists extends Component {

    componentDidMount() {
        this.props.GetProduct()
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/Product_Cata" component={All}/>
                    <Route path="/Product_Cata/NewArrival" component={NewArival}/>
                    <Route path="/Product_Cata/Summer" component={Summerproduct}/>
                    <Route path="/Product_Cata/Winter" component={Winterproduct}/>
                    <Route path="/Product_Cata/Designer_Plus" component={Designer}/>
                    <Route path="/Product_Cata/Summer_Khaddi" component={SummerKhaddi}/>
                    <Route path="/Product_Cata/Summer_Premium" component={Spremuim}/>
                    <Route path="/Product_Cata/Summer_Royal" component={Sroyal}/>
                    <Route path="/Product_Cata/Winter_designer" component={Wdesigner}/>
                    <Route path="/Product_Cata/Winter_Goli" component={Wgoli}/>
                    <Route path="/Product_Cata/Winter_Handmade" component={Whandmade}/>
                    <Route path="/Product_Cata/Winter_Khaddi" component={WinterKhaddi}/>
                </Switch>
            </div>
        )
    }
}

export default connect(null, { GetProduct })(ProductLists)