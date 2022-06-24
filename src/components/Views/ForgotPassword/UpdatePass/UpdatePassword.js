import React, { Component } from 'react'
import { UpdatePass , ResetPass } from '../../../../Redux/actions/UserAction'
import { connect } from 'react-redux'
import './update.css'
class ResetPassword extends Component {
    constructor(props) {
        super();
        this.state = {
            password: '',
            conformPassword : '',
            ismessage : false,
            message : "",
            errors: {}
        }
    }




    componentDidMount(){
        var url = window.location.pathname
        var token = url.substr(url.lastIndexOf('/') + 1)
        this.props.ResetPass(token)
    }

    handleInputChange  = (e) => {


        this.setState({

            [e.target.name]: e.target.value,

        })

    }

   

   

    hendleSubmit = ( e ) =>{
        e.preventDefault();
        var url = window.location.pathname
        var token = url.substr(url.lastIndexOf('/') + 1)

        let value = {
            password : this.state.password,
            token : token

        }

        this.props.UpdatePass(value)
        this.setState({
            password : '',
            conformPassword : ''
        })

    
    }


    componentWillReceiveProps(nextprop){
        if(nextprop.message){
            this.setState({ message : nextprop.message})
        }
        else if(nextprop.errors){
            this.setState({ errors : nextprop.errors})
            
        }
    }



    render() {

        console.log("state of forgot " , this.props.errors)
        return (
            <div>
            { this.state.message.length > 0  ? <div>{this.state.message }</div> : null }
            { this.props.errors.message > 0 ? <div>{this.props.errors.message }</div> : null }
 {/* <div className="container">

 
            <div className="row bootstrap snippets bootdeys" style={{ display: 'flex', justifyContent: 'center' }}>
                       <div className="col-md-4 col-xs-1"></div>
                        <div className="col-md-4 col-xs-10" style={{ border: '1pt solid #3e3e3e3e', marginTop: '7rem' }}>
                            <div className="text-center logo-alt-box" >
                                <a href="index.html" className="logo" style={{ textAlign: 'center' }} >
                                </a>
                            </div>
                            <div className="m-t-30 card-box" >
                            <form onSubmit={this.hendleSubmit} className="form-data">
                                    <h3>Password assistance</h3>
                                    <p>Enter the email address or mobile number associated with your Site </p>

                                      <span>enter email address</span>
                                        <input type="email" className="form-control" placeholder="email" onChange={this.handleInputChange} name="email" value={this.state.email} />

                                        
                                        <button onClick={() => this.setState({ ismessage: !this.state.ismessage, Show: true })} className="btn btn-default">Continue</button>

                                    </form>
                                    
                                
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-1"></div>
                    </div>
           
                               
                    </div>
                     */}


<div className="login">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                            <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                <div className="logo-img">
                                    <img src="images/logo.png" alt="image_logo"/>
                                </div>
                                <div className="forgot-form">

                                    {

                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success">{this.state.message}</div> : null

                                    }
                                    <form onSubmit={this.hendleSubmit} className="form-data">
                                    <h3>Create new password</h3>
                                    <p>We'll ask for this  associated whenever you sign-In </p>
                                    <span>Enter new password</span>
                                        <input type="password" placeholder="New password" name="password" value={this.state.password} className="form-control" />
                                        <p>Password must be at least 6 charactor</p>
                                        
                                    <span>Re-inter  password</span>
                                        <input type="password" placeholder="New password" name="password" value={this.state.password} className="form-control" />
                                        <div className="count">
                                        <button  className="btn btn-info">Save change and Sign-In</button>

                                        </div>
                                    </form>
                                </div>
                                {/* {this.state.Show ?
                                            <div className="alert alert-success col-md-12" role="alert" id="notes" style={{ marginTop: '2rem' }}>
                                                <ul>
                                                    <li style={{ listStyle:'none' , fontSize:'12px'}}>If somehow, you did not recieve the verification email then <a href="#">resend the verification email</a></li>
                                                </ul>
                                            </div> */}
                                            {/* : null} */}
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

    message : state.auth.MessageAdmin,
    errors : state.errors


})
export default connect(mapStateToProps ,{  ResetPass ,UpdatePass }) (ResetPassword)