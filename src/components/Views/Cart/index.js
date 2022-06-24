import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart.css'
import { Inrement, Decrement, Delete_Cart } from "../../../Redux/actions/CartActon";
// import { GetProduct } from '../../../Redux/actions/ProductAction'

import LoadingLow from '../Loading/loaderLowop';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            loder: false,
            // stock : false ,
            data: this.props.localdata,
            cartData: [],
            Newdata: [],
            // product: []
        }
    }
    componentDidMount() {


        if (JSON.parse(localStorage.getItem("_id" && "carts")) === null) {
            console.log("localstorage are null")
        } else {

            const localItems = JSON.parse(localStorage.getItem("carts"));


            this.setState({ cartData: localItems })
        }
        // this.props.GetProduct()



    }



    Increse = (data) => {

        this.props.Inrement(data)
        this.setState({ loder: true })

        // let stoc =  this.state.product.filter((item) => {
        //     if (item._id === data._id && item.Quantity > data.Avaliable_Quantity)
        //            return  data.Quantity = 0 ,  this.setState({ stock : true })
        //         // return item 
        //         // return    this.setState({ stock : true })
                
        // })

        // console.log("stock" , stoc);
        
        
        
        setTimeout(() => {



            this.setState({ loder: false })

        }, 1500);


    }

    Decrese = (data) => {
        this.props.Decrement(data)

        // this.state.product.filter((item) => {
        //     if (item._id === data._id){
        //            if(item.Quantity < data.Avaliable_Quantity){
        //                this.setState({ stock : false })
        //             } 
        //             return item 
        //         }
        // })

        this.setState({ loder: true })

        setTimeout(() => {
            this.setState({ loder: false })

        }, 1500);
    }
    Delete = (data) => {
        this.props.Delete_Cart(data)
        this.setState({ loder: true })

        setTimeout(() => {
            this.setState({ loder: false })

        }, 1500);
    }



    componentWillReceiveProps(netprops) {
        if (netprops.cardata) {
            this.setState({
                data: netprops.cardata
            })
        }
        if (netprops.productdata) {
            this.setState({
                product: netprops.productdata
            })
        }
    }





    render() {

        console.log("state " , this.state);
        

        let totalamountState = this.props.localdata ? this.props.localdata.reduce((total, product) => product.real_price === 'undefined' ? total + product.product_price * product.Quantity : total + product.real_price * product.Quantity, 0).toFixed(2) : null

        let totalItemState = this.props.localdata ? this.props.localdata.reduce((total, product) => total + product.Quantity, 0) : null


        return (
            <div style={{ padding: '0px', backgroundColor: '#fff', }}>
                <div className="breadcrumb-option pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                    <span>Shopping cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="stockMessage">
               { this.state.stock && this.state.stock ? <div className="alert alert-danger">Product are out of stock</div> : null }
               </div>

                <section className="shop-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shop__cart__table" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                                    <table>
                                        {this.props.localdata ?
                                            <thead>
                                                <tr id="heading">
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            : null}
                                        <tbody>

                                            {


                                                this.props.localdata ? this.props.localdata.map((item, index) => {
                                                    return (


                                                        <tr key={index}>
                                                            <td className="cart__product__item">
                                                                <img src={`https://www.uffabrics.com/uploads/${item.media}`} alt="pic" style={{ width: '80px', height: '80px' }} />
                                                                <div className="cart__product__item__title">
                                                                    <h6>{item.ProductName}</h6>

                                                                </div>
                                                            </td>
                                                            <td className="cart__price">Rs {item.real_price === 'undefined' ? item.product_price : item.real_price}</td>
                                                            <td className="cart__quantity">
                                                                <div className="pro-qty">
                                                                    <div className="quantity buttons_added" style={{ display: 'flex' }}>
                                                                        <div className="value-button" id="decrease" onClick={() => item.Quantity > 0 ? this.Decrese(item) : null} >-</div>
                                                                        <input type="number" id="number" value={item.Quantity} />
                                                                        <div className="value-button" id="increase" onClick={() => this.Increse(item)} >+</div>

                                                                    </div>

                                                                </div>
                                                            </td>
                                                            <td className="cart__total">Rs {item.real_price === 'undefined' ? item.product_price * item.Quantity : item.real_price * item.Quantity}</td>
                                                            <td className="cart__close"><span className="fa fa-close" onClick={() => this.Delete(item)}></span></td>
                                                        </tr>
                                                    )
                                                })
                                                    : null
                                            }

                                            {this.props.localdata ? null : <h2 className="text-center">your basket are <i className="fa fa-shopping-cart"></i> empty go to <Link to="/">home  </Link></h2>}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {this.props.localdata ?
                            <div className="row" style={{ marginTop: '5rem' }}>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="cart__btn">
                                        <Link to="/Product_Cata">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">

                                    <div className="cart__total__procced">
                                        <h6>Cart total</h6>
                                        <ul>
                                            <li>Subtotal <span>{this.state.cartData ? totalItemState : null}</span></li>
                                            <li>Total <span>Rs {this.props.cardata ? totalamountState : null}</span></li>
                                        </ul>
                                        <Link to="/Checkout" className="primary-btn">Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                            : null}

                        {this.state.loder ?

                            <div className="loder" >
                                <LoadingLow />
                            </div>

                            : null}

                    </div>
                </section>


            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    // productdata: state.Product.Products,
    cardata: state.Cart.AddCart,
    itemcount: state.Cart.data,
    localdata: state.Cart.localD,
    totalamount: state.Cart.totalamount,


})


export default connect(mapStateToProps, { Inrement, Decrement, Delete_Cart })(Cart)