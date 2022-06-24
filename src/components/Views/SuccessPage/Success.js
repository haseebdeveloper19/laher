import React, { Component } from 'react'
import { getCkoutInfo } from '../../../Redux/actions/checkoutAction'
import { connect } from 'react-redux'
import './style.css'
import { Link  ,  } from 'react-router-dom'
class SuccessPage extends Component {

    componentDidMount() {

        this.props.getCkoutInfo(this.props.auth.User.id)

    }



    render() {
          
            
        return (
            <div>



              <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                            <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                <div className="logo-img">
                                    {/* <img src="images/logo.png" alt="image_logo" /> */}
                                </div>
                                <div className="forgot-form">

                                    {/* {
                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success">{this.state.message}</div> : null
                                    } */}
                                    <h3 className="text-center text-uppercase font-bold mt-4">Thank You <br></br>For Shopping !</h3>
                                    <br></br>
                                    <div className="panel-body " style={{ textAlign: 'center' }}>
                                     <i className="fa fa-shopping-cart" style={{fontSize:'150px' }}></i>
                                    <p className="text-muted">
                                        Hello <b>{this.props.location.state.detail}</b>. Congratulation your CheckOut Request  are Successfully Completed.
                                        <br></br>
                                       <strong style={{color:'darkblue'}}> Our Person Will Content with You Soon</strong>
                                        <br></br>
                                        More Shopping <strong><Link to="/" style={{color:'darkred' , textDecoration:'underline'}}> Home </Link></strong>
                    </p>
                                </div>
                                        
                                </div>
                               
                            </div>
                            
                            <div className="col-lg-3 col-md-1 col-sm-4"></div>
                        </div>
                    </div>
                </div>


                

            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    Getdata: state.checkout.CheckOuts,
    auth: state.auth


})
export default connect(mapStateToProps, { getCkoutInfo })(SuccessPage)