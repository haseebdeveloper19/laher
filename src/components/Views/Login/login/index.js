
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAdmin, } from '../../../../Redux/actions/Admin';
import { loginUser } from '../../../../Redux/actions/UserAction'
import { Formik, Form, Field, ErrorMessage } from "formik";
import logo from '../logook.jpg'
import * as Yup from "yup";
// import Loading from '../../Loading';
// import LoadingLow from '../../Loading/loaderLowop'
// import { Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isloading: false,
            loading: false,
            ischecked: false,
            errors: {
                validate: false,
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hendleCheck = (e) => {
        this.setState({ ischecked: !this.state.ischecked })
    }


    handleInputChange(e) {
        this.setState({

            [e.target.name]: e.target.value,

        })

    }




    handleSubmit(values) {
        const user = {
            email: values.email,
            password: values.password,
        }
        // if (this.state.errors != '') {
        //     this.setState({ validate: true, isloading: true })
        this.props.loginAdmin(user);
        // }
    }
    
    componentDidMount() {



        if (this.props.auth.isAuthenticated) {


            this.props.history.push('/');


        }
        else if (this.props.admin.isAuthenticated) {
            this.props.history.push('/Admin_Dashboard')
        }
    }





    componentWillReceiveProps(nextProps) {

        if (nextProps.auth.isAuthenticated) {
            // setTimeout(() => {
            //     this.setState({ isloading: false })
            this.props.history.push('/')
            // }, 2000);
        }
        else if (nextProps.admin.isAuthenticated) {

            this.props.history.push('/Admin_Dashboard')

        }
        else if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }



    render() {
        
    
        return (
            <div>



                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                            <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                <div className="logo-img" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
                                    <img src={logo} alt="logo_image" style={{ width: '80px', height: '80px', textAlign: 'center' }} />
                                </div>
                                {this.state.errors.message ? <div className="alert alert-danger">{this.state.errors.message}</div> : ""}
                                <div className="forgot-form">

                                    {

                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success text-center">{this.state.message}</div> : null

                                    }

                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={
                                            Yup.object().shape({
                                                email: Yup.string().email().required("Email  is required * "),
                                                password: Yup.string().required("Password is required *"),
                                            })
                                        }
                                        onSubmit={(values) => {
                                            this.handleSubmit(values)
                                        }}
                                    >
                                        {() => (
                                            <Form className="form-horizontal" style={{ border: '1pt solid gray', borderRadius: '5px', padding: '30px' }} >
                                                {/* <form onSubmit={this.state.ischecked ? this.UserSubmit : this.handleSubmit} className="form-data" style={{ border: '1pt solid gray', borderRadius: '5px', padding: '50px' }}> */}
                                                {/* <h3>Login</h3>
                                                <p>We'll ask for this  associated whenever you sign-In </p> */}
                                                <span>Email</span>
                                                <Field type="email"
                                                    name="email"
                                                    className="form-control" />
                                                <ErrorMessage name="email" style={{ color: 'red' }} component="div" />
                                                <br></br>
                                                <span>Password</span>
                                                <Field type="password"
                                                    name="password"
                                                    className="form-control" />
                                                <ErrorMessage name="password" style={{ color: 'red' }} component="div" />
                                                <br></br>
                                                <div className="count">
                                                    <button className="btn btn-secondary  btn-block" type="submit">SignIn</button>
                                                </div>
                                                {/* <div class="sigin-up pt-3" >
                                                    <h6 className="text-right ">Don't have account ? <Link to="/Register">Sign Up Here </Link></h6>

                                                </div> */}

                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                
                            </div>

                            <div className="col-lg-3 col-md-1 col-sm-4"></div>
                        </div>
                    </div>
                </div>

                {/* {  this.state.isloading && this.props.auth.isAuthenticated ?  <LoadingLow/> : null } 
            {  this.state.isloading && this.props.admin.isAuthenticated ?  <LoadingLow/> : null }  */}


            </div >
        )
    }
}

Login.propTypes = {
    loginAdmin: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    admin: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    userAuth: state.auth.User,
    message: state.auth.MessageAdmin,
    admin: state.admin,
    errors: state.errors
})

export default connect(mapStateToProps, { loginAdmin, loginUser })(Login)



