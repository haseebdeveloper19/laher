import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerCart, InrementQuantityClient } from "../../../Redux/actions/CartActon";
import { Link } from 'react-router-dom'
import './checkout.css'
import '../SuccessPage/style.css'
import Loading from '../Loading'
import { GetProduct, Update_Avaliable_qunty } from '../../../Redux/actions/ProductAction'
import { registerCheckout } from '../../../Redux/actions/checkoutAction'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // carType: '',
            fname: '',
            lname: '',
            email: '',
            city: '',
            country: '',
            zipcode: '',
            phone: '',
            address: '',
            loading: true,
            isloading: false,
            message: false,
            paypal: false,
            isShow : false , 
            Auth: ''
        }
    }

    componentDidMount() {
        this.props.GetProduct();
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })

        }, 2000);
       
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isloading !== this.state.isloading) {
            this.setState({ loading : true})
        }
      }

    ChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,


        })
    }


    OnSubmitData = (values) => {

        let arr2 = this.props.localdata
        let arr3 = this.props.productdata
        let Totalamount = this.props.localdata ? this.props.localdata.reduce((total, product) =>  product.real_price === 'undefined' ?  total + product.product_price * product.Quantity : total + product.real_price * product.Quantity, 0).toFixed(2) : null
        let TotalQunty = this.props.localdata ? this.props.localdata.reduce((total, product) => total + product.Quantity, 0) : null

        let value = {
            fname: values.fname,
            lname: values.lname,
            mobile: values.phone,
            country: values.country,
            email: values.email,
            city: values.city,
            zipcode: values.zipcode,
            address: values.address,
            amount: Totalamount,
            quantity: TotalQunty,
            products: this.props.localdata
        }






        for (var i = 0; i < arr2.length; i++) {
            this.props.productdata.map(item => {
                if (item._id === arr2[i]._id);

                return item.Avaliable_Quantity = item.Avaliable_Quantity - arr2[i].Quantity

            })





        }

        // let product = {
        //     products: this.props.localdata
        // }


        this.setState({ message: true, isloading : true ,  })

        this.props.registerCheckout(value)


        this.props.registerCart({ products: this.props.localdata, })
        this.props.Update_Avaliable_qunty(arr3)
        setTimeout(() => {
            this.setState({
                fname: '',
                lname: '',
                phone: '',
                country: '',
                city: '',
                email: '',
                zipcode: '',

                address: '',
                
                errors: {}
            })
            setTimeout(() => {
                this.setState({
                    isloading: false,
                    message: false,
                })
                this.props.InrementQuantityClient()
                this.props.history.push({pathname : '/InfoSucess',  state: { detail:values.email  }})
            }, 3000);

        }, 1500);



    }

    
    
    render() {



        let totalamount = this.props.localdata ? this.props.localdata.reduce((total, product) =>  product.real_price === 'undefined' ?  total + product.product_price * product.Quantity : total + product.real_price * product.Quantity, 0).toFixed(2) : null
        let totalItem = this.props.localdata ? this.props.localdata.reduce((total, product) => total + product.Quantity, 0) : null

        
        const SignInSchema = Yup.object().shape({
            phone: Yup.string().required("Mobile No  is required * "),
            fname: Yup.string().required("First Name is required *"),
            lname: Yup.string().required("Last Name is required"),
            // email: Yup.string().required("Email  is required"),
            city: Yup.string().required("City  is required"),
            country: Yup.string().required(" Country State  is required"),
            zipcode: Yup.string().required("Zipcode is required"),
            address: Yup.string().required("Permanent address is required"),



        });

        const initialValues = { fname: '', phone: '', city: '', email: '', lname: '', picture: '', country: '', zipcode: '', address: '' }




        if (this.state.loading && this.props.localdata ) {
            return (
                <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'center' }}>
                    <Loading />

                </div>
            )
        }
        else {


            return (
                <div style={{ padding: '0px', backgroundColor: '#fff', paddingBottom: '120px' }}>


                    <div className="breadcrumb-option pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__links">
                                        <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                        <Link to="/Cart"><i className="fa fa-home"></i> Shopping cart</Link>
                                        <span> Checkout </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.localdata && this.props.localdata.length > 0  ?
                        <section className="checkout spad pt-5" >
                            <div className="container " >

                                {this.state.isloading ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loading /> </div> : null}

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignInSchema}
                                    onSubmit={(values) => {
                                        this.OnSubmitData(values)



                                    }
                                    }
                                >

                                    {() => (
                                        <Form className="checkout__form">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h5>Billing detail</h5>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                            <div >
                                                                <p>First Name <span>*</span></p>
                                                                <Field className="form-control " type="text"
                                                                    //  value={this.state.fname} 
                                                                    //  onChange={this.ChangeValue}
                                                                    name="fname" />
                                                            </div>
                                                            <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="fname" component="div" />

                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                            <div >
                                                                <p>Last Name <span>*</span></p>
                                                                <Field className="form-control " type="text"
                                                                    //   value={this.state.lname}
                                                                    //     onChange={this.ChangeValue}
                                                                    name="lname" />
                                                            </div>
                                                            <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="lname" component="div" />

                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                            <div >
                                                                <p>Phone <span>*</span></p>
                                                                <Field className="form-control" type="text"
                                                                    // value={this.state.phone}  
                                                                    // onChange={this.ChangeValue}
                                                                    name="phone" />
                                                            </div>
                                                            <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="phone" component="div" />

                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                            <div >
                                                                <p>Email <span>*</span></p>
                                                                <Field className="form-control" type="email"
                                                                    //  value={this.state.email}
                                                                    //    onChange={this.ChangeValue} 
                                                                    name="email" />
                                                                {/* <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="email" component="div" /> */}
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-12">

                                                            <div >
                                                                <p>Country/State <span>*</span></p>
                                                                <Field className="form-control" as="select"
                                                                    name="country"
                                                               
                                                                >
                                                                    <option defaultChecked >Select State</option>
                                                                    <option value="Punjab">Punjab</option>
                                                                    <option value="Sindh">Sindh</option>
                                                                    <option value="Balochistan">Balochistan</option>
                                                                    <option value="KPK">KPK</option>
                                                                    <option value="KPK">Azad kashmir</option>
                                                                </Field>
                                                                <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="country" component="div" />

                                                            </div>

                                                            <div className="checkout__form__input ">
                                                                <p>Postcode/Zip <span>*</span> </p>
                                                                <Field className="form-control" type="text"
                                                                    //  value={this.state.zipcode}
                                                                    //   onChange={this.ChangeValue} 
                                                                    name="zipcode" />
                                                                <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="zipcode" component="div" />
                                                            </div>


                                                            <div >
                                                                <p>Town/City <span>*</span></p>
                                                                <Field className="form-control"

                                                                    name="city"
                                                               
                                                               
                                                                />
                                                                    
                                                                <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="city" component="div" />

                                                            </div>
                                                            <div className="checkout__form__input ">
                                                                <p>Street Address <span>*</span></p>
                                                                <Field className="form-control" type="text"
                                                                    //  value={this.state.address} 
                                                                    //   onChange={this.ChangeValue}
                                                                    name="address" />
                                                                <ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="address" component="div" />

                                                            </div>

                                                            {/* <div className="checkout__order__widget">
                                                                            <label style={{fontSize:'16px' , fontWeight:'bold'}}>
                                                                              Payment Method 
                                                                                
                                                                            </label>
                                                                            <p>Now Cash on -delivery are avaliable also we are working to improve our payment method should be on payoneer or bank account  </p>
                                                                           
                                                                            <label>
                                                                                Cash On-delivery
                                                                                <Field className="form-control" type="checkbox"
                                                                                 value={!this.state.paypal }
                                                                                  onChange={this.ChangeValue} 
                                                                                  id="paypal" name="paypal"/>
                                                                                <span className="checkmark" ></span>
                                                                            </label>
                                                                        </div> */}

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="checkout__order">
                                                        <div className="checkout__order__total" style={{ height: '400px', overflowY: 'scroll' }}>
                                                            <h4>YOUR ORDER</h4>
                                                            <h5 class="subdetal">PRODUCT <span className='subtoal' > SUBTOTAL</span></h5>
                                                            {this.props.localdata.map((item, index) => {
                                                                return (
                                                                    <ul className="product-list" key={index}>
                                                                        <li> {item.ProductName} ({item.real_price === 'undefined' ?   item.product_price  : item.real_price }  * {item.Quantity} ) <span>Rs {item.real_price === 'undefined' ? item.product_price * item.Quantity :  item.real_price * item.Quantity }</span> </li>
                                                                    </ul>
                                                                )
                                                            })}

                                                            <ul>
                                                                <li>Items <span> {totalItem}</span></li>
                                                                <li>Price <span>Rs {totalamount}</span></li>
                                                            </ul>
                                                        </div>


                                                        <button  type="submit" href="#mode" data-toggle="modal" className="site-btn" >Order Place</button>


                                                    </div>
                                                </div>
                                            </div>
                                        </Form>


                                    )}

                                </Formik>

                            </div>

                        </section>

                        : 
                        null

                    }


                    <div style={{ paddingTop: '30px' }}>

                        {this.props.localdata ? null : <h2 className="text-center">your basket are <i className="fa fa-shopping-cart"></i> empty go to <Link to="/">home  </Link></h2>}
                    </div>



                    <section>
                         
                         { this.state.isShow ?
                       
                            <div id="mode" className={ "modal fade"}>
                                <div className="modal-dialog modal-confirm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="icon-box">
                                                <i className="material-icons fa fa-check"></i>
                                            </div>
                                            <h4 className="modal-title w-100">Thank You For Shopping!</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : false}
                           
                        }


                    </section>


                    
    
    
    
                </div>
                    )
                }
        
            }
        }
        
const mapStateToProps = (state) => ({

                        productdata: state.Product.Products,
                    localdata: state.Cart.localD,
                    auth: state.auth
                
                
                })
                
                
export default connect(mapStateToProps, {registerCart, registerCheckout, InrementQuantityClient, GetProduct, Update_Avaliable_qunty })(Checkout)