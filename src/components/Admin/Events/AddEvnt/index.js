import React, { Component } from 'react';
import Sidebar from '../../../navbar/sidebar'
import Nav from '../../../navbar/nav'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as Yup from 'yup';
import { Form, Formik } from 'formik'
import { registerEvent } from '../../../../Redux/actions/EventAction'
const schema = Yup.object().shape({
    date: Yup.string()
        .required("First Name is Required."),
    eventName: Yup.string()
        .required("Last Name is Required.")
        .min(1, "Last Name is Too Short."),
    discount: Yup.string()
        .required("Last Name is Required.")
        .min(1, "Last Name is Too Short."),
    picture: Yup.string()
        .required("Last Name is Required.")



});

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            eventName: '',
            discount: '',
            picture: ''
        }
    }





    render() {



        return (
            <div>
                <div>
                    <aside id="left-panel" class="left-panel">

                        <Sidebar />
                    </aside>


                    <div id="right-panel" className="right-panel" >

                        <Nav />

                        <div className="container">


                            <div className="breadcrumb-option">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="breadcrumb__links">
                                                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                                <span>Create Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="row mt-3">
                                <div className="col-lg-12">



                                    <div className="card-body">
                                        <div id="pay-invoice">
                                            <div className="card-body">



                                                <Formik
                                                    initialValues={ this.state}
                                                        
                                                    validationSchema={schema}

                                                    validateOnBlur
                                                    onSubmit={(values) => {
                                                        this.props.registerEvent(values)
                                                        

                                                    }}
                                                >
                                                    {(props) => {
                                                        const {
                                                            touched,
                                                            errors,
                                                            handleSubmit,
                                                            values,
                                                            handleChange,
                                                            handleBlur,
                                                        } = props;


                                                        return (
                                                            <form noValidate onSubmit={handleSubmit}>
                                                                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="name">First name</label>
                                                                            <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                name="date"
                                                                                placeholder="Enter your first name"

                                                                                value={values.date}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                            />
                                                                            {errors.date && touched.date && (
                                                                                <div className="input-feedback">
                                                                                    {errors.date}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="name">Last name</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="eventName"
                                                                                placeholder="Enter your last name"
                                                                                value={values.eventName}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                            />
                                                                            {errors.eventName && touched.eventName && (
                                                                                <div className="input-feedback">{errors.eventName}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="email">Email address</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="discount"
                                                                                placeholder="Enter email"
                                                                                value={values.discount}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                            />
                                                                            {errors.discount && touched.discount && (
                                                                                <div className="input-feedback">{errors.discount}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="password">Password</label>
                                                                            <input
                                                                                type="file"
                                                                                className="form-control"
                                                                                name="picture"
                                                                                onChange={(event) => props.setFieldValue('picture' , event.target.files[0])}
                                                                                onBlur={handleBlur}
                                                                            />
                                                                            {errors.picture && touched.picture && (
                                                                                <div className="input-feedback">{errors.picture}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button

                                                                    className="btn btn-lg btn-primary btn-block"
                                                                >
                                                                    Register!
                    </button>
                                                            </form>
                                                        );
                                                    }}
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        )
    }
}

export default connect(null , { registerEvent })(Event)