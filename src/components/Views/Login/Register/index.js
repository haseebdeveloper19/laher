
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAdmin } from '../../../../Redux/actions/Admin'
// import Loading from '../../Loading';
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import logo from '../nn.JPG'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsValid  :false,
            errors: {}
        }
    }



    AddUserSubmit = (values) => {
        const user = {
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirm: values.password_confirm
        }
        this.props.registerAdmin(user)
        setTimeout(() => {
            values.name = ''
            values.email= ''
            values.password =  ''
            values.password_confirm =  ''
            this.setState({ formIsValid : true })
        }, 1500)

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }



    render() {
       
            return (
                <div>

                    <div className="login" style={{paddingBottom:'5rem'}}>
                        <div className="container">
                            <div className="row">
                                <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                                <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                    <div className="logo-img" style={{ textAlign: 'center', marginBottom: '10px', marginTop: '20px' }}>
                                        {/* <img src={logo} alt="logo_image" style={{ width: '80px', height: '80px' }} /> */}
                                    </div>




                                    <div className="forgot-form">

              

                                        {
                                            this.state.errors.message ? <div className="alert alert-danger">{this.state.errors.message}</div> : ""
                                        }


                                        { this.state.formIsValid ? <div className="alert-alert-success">Congrates Your are Successfully Registered</div> : null}
                                        <Formik
                                            initialValues={{ name : '' ,  email: '', password: '' , password_confirm : ''   }}
                                            validationSchema={
                                                Yup.object().shape({
                                                    name: Yup.string().required("Name is required *"),
                                                    email: Yup.string().email().required("Email  is required * "),
                                                    password: Yup.string().required("Password is required *"),
                                                    password_confirm: Yup.string().required("Conform Password is required *")
                                                    .oneOf([Yup.ref("password"), null], "Passwords must match"),
                                                })
                                            }
                                            onSubmit={(values) => {
                                                this.AddUserSubmit(values)
                                            }}
                                        >
                                            {() => (
                                                <Form className="form-horizontal" style={{ border: '1pt solid gray', borderRadius: '5px', padding: '30px' }} >

                                                    <h3>Create your account</h3>
                                                    <p>We'll ask for this  associated whenever you sign-In </p>
                                                    <span>Enter name </span>
                                                    <Field type="text" name="name" className="form-control" />
                                                    <ErrorMessage name="name" component="div" style={{color:'red'}} />
                                                    <br></br>
                                                    <span>Enter email*</span>
                                                    <Field type="email" name="email" className="form-control" />
                                                    <ErrorMessage name="email" component="div" style={{color:'red'}} />

                                                    <br></br>
                                                    <span>Enter password*</span>
                                                    <Field type="password" name="password" className="form-control" />
                                                    <ErrorMessage name="password" component="div" style={{color:'red'}} />

                                                    <br></br>
                                                    <span>Re-inter  password*</span>
                                                    <Field type="password" name="password_confirm" className="form-control" />
                                                    <ErrorMessage name="password_confirm" component="div" style={{color:'red'}} />
                                                    <div className="count pt-3" >
                                                        <button className="btn btn-secondary btn-lg btn-block">SignUp</button>
                                                    </div>
                                                    <div className="already-signin pt-3">
                                                        <h6 className="text-right">Have already account <Link to="/login">SignIn</Link></h6>

                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
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

Register.propTypes = {

    registerAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    userAuth: state.auth.User,
    message: state.auth.MessageAdmin,
    errors: state.errors
})

export default connect(mapStateToProps, { registerAdmin })(Register)



