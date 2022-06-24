import React, { Component } from 'react'
import { forgot } from '../../../Redux/actions/UserAction'
import { connect } from 'react-redux'
import { Link }  from 'react-router-dom'
import './forgot.css';
class Forgot extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            message: '',
            Show: false,
            ismessage: false,
            error: {}
        }
    }

    handleInputChange = (e) => {


        this.setState({

            [e.target.name]: e.target.value,

        })

    }


    componentDidUpdate() {
        this.Fun()

    }

    Fun = () => {
        setTimeout(() => {
            this.setState({ ismessage: false })
        }, 6000);
    }


    componentWillUnmount() {
        clearTimeout(this.Fun)
    }






    hendleSubmit = (e) => {
        e.preventDefault();

        let value = {
            email: this.state.email
        }

        this.props.forgot(value)


    }


    componentWillReceiveProps(nextprop) {
        if (nextprop.message) {
            this.setState({ message: nextprop.message })
        }
    }



    render() {

        console.log("state of forgot ", this.state)
        return (
            <div>
                {/* <div className="forgot" style={{ marginBottom: '30px' }}>
                    <div className="container-fluid">

                        <div class="row">
                            <div className="col-sm-2 col-md-4 col-xs-2 "></div>
                            <div class="col-sm-6 col-md-4 col-xs-6  ">
                                <div className="img-logo">
                                    <img src="images/logo.png" className="image"/>

                                </div>
                                <div class="login-form">



                                    {

                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success">{this.state.message}</div> : null

                                    }


              

                                    <form onSubmit={this.hendleSubmit} className="form-data">
                                    <h3>Password assistance</h3>
                                    <p>Enter the email address or mobile number associated with your Site </p>

                                      <span>enter email address</span>
                                        <input type="email" className="form-control" placeholder="email" onChange={this.handleInputChange} name="email" value={this.state.email} />

                                        
                                        <button onClick={() => this.setState({ ismessage: !this.state.ismessage, Show: true })} className="btn btn-default">Continue</button>

                                    </form>

                                </div>
                                {this.state.Show ?
                                            <div className="alert alert-success col-md-12" role="alert" id="notes" style={{ marginTop: '2rem' }}>
                                                <ul>
                                                    <li style={{ listStyle:'none'}}>If somehow, you did not recieve the verification email then <a href="#">resend the verification email</a></li>
                                                </ul>
                                            </div>
                                            : null}
                            </div>
                            <div className="col-sm-2 col-md-4 col-xs-2 ">
                            </div>
                        </div>
                    </div>
                </div> */}


<div className="login">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                            <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                <div className="logo-img">
                                    <img src="images/logo.png" alt="image_logo" />
                                </div>
                                <div className="forgot-form">

                                    {

                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success">{this.state.message}</div> : null

                                    }
                                    <form onSubmit={this.hendleSubmit} className="form-data">
                                    <h3>Password assistance</h3>
                                    <p>Enter the email address or mobile number associated with your Site </p>
                                    <span>enter email address</span>
                                        <input type="text" placeholder="email address" className="form-control" />
                                        <div className="count">
                                        <button onClick={() => this.setState({ ismessage: !this.state.ismessage, Show: true })} className="btn btn-info">Continue</button>

                                        </div>
                                    </form>
                                </div>
                                {this.state.Show ?
                                            <div className="alert alert-success col-md-12" role="alert" id="notes" style={{ marginTop: '2rem' }}>
                                                <ul>
                                                    <li style={{ listStyle:'none' , fontSize:'12px'}}>If somehow, you did not recieve the verification email then <Link to="/">resend the verification email</Link></li>
                                                </ul>
                                            </div>
                                            : null}
                            </div>
                            
                            <div className="col-lg-3 col-md-1 col-sm-4"></div>
                        </div>
                    </div>
                </div>


            </div >
        )
    }
}

const mapStateToProps = (state) => ({

    message: state.auth.MessageAdmin


})
export default connect(mapStateToProps, { forgot })(Forgot)