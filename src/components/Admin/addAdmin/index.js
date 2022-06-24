import React, { Component } from 'react'
import Nav from '../../navbar/nav'
import Sidebar from '../../navbar/sidebar'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerAdmin } from '../../../Redux/actions/NewAdminAct'
class AddAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname:this.props.fname ? this.props.fname : '',
			lname:this.props.lname ? this.props.lname : '',
			gender:this.props.gender ? this.props.gender : '',
			mobile:this.props.mobile ? this.props.mobile : '',
			role:this.props.role ? this.props.role : '',
			email:this.props.email ? this.props.email : '',
			password:this.props.password ? this.props.password : '',
			picture:this.props.picture ? this.props.picture : '',
			address:this.props.address ? this.props.address : '',
			errors: {},
			SendMessage: {}

		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
		if (nextProps.SendMessage) {
			this.setState({
				SendMessage: nextProps.SendMessage
			})
		}
	}

	ChangeFile = (e) => {
		this.setState({ [e.target.id]: e.target.files[0] })
	}


	ChangeValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value

		},

		)

	}


	handleValidation() {
		const { fname,
			lname,
			gender,
			mobile,
			role,
			email,
			password,
			picture,
			address, } = this.state
		let errors = {};
		let formIsValid = true;

		//Name
		if (!fname) {
			formIsValid = false;
			errors.fname = "Cannot be empty";
		}
		if (!lname) {
			formIsValid = false;
			errors.lname = "Cannot be empty";
		}
		if (!email) {
			formIsValid = false;
			errors.email = "Cannot be empty";
		}
		if (!mobile) {
			formIsValid = false;
			errors.mobile = "Cannot be empty";
		}
		if (!gender) {
			formIsValid = false;
			errors.gender = "Cannot be empty";
		}
		if (!role) {
			formIsValid = false;
			errors.role = "Cannot be empty";
		}
		if (!address) {
			formIsValid = false;
			errors.address = "Cannot be empty";
		}
		if (!password) {
			formIsValid = false;
			errors.password = "Cannot be empty";
		}

		this.setState({ errors: errors, formIsValid: formIsValid });
		return formIsValid;
	}

	
	
	OnSubmitData = (e) => {
		e.preventDefault()
		const { fname, lname, gender, mobile, role, email, picture, password, address } = this.state


		let formData = new FormData();
		formData.append('fname', fname)
		formData.append('lname', lname)
		formData.append('gender', gender)
		formData.append('mobile', mobile)
		formData.append('role', role)
		formData.append('email', email)
		formData.append('picture', picture)
		formData.append('password', password)
		formData.append('address', address)
		if (this.handleValidation()) {

			this.props.registerAdmin(formData);
			setTimeout(() => {
				this.setState({
					fname: '',
					lname: '',
					gender: '',
					mobile: '',
					role: '',
					email: '',
					picture: '',
					password: '',
					address: '',
					picture : '',
					errors: {}
				})
				//   setTimeout(() => {
				// 	this.setState({
				// 	  SendMessage: ''
				// 	})
				//   }, 5000);

			}, 1500);
		}

	}

	render() {
		const { errors } = this.state
		console.log("state", this.state)
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

												{
													this.state.formIsValid == true ?

														<div class="sufee-alert alert with-close alert-primary alert-dismissible fade show">
															<span class="badge badge-pill badge-primary">Success</span>
                                           New Slider data  are successfully Registered
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														: null

												}

												<form className="form-horizontal" onSubmit={this.OnSubmitData}>

													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">First Name </label>
																<input
																	value={this.state.fname}
																	onChange={this.ChangeValue}
																	name="fname"
																	id="cc-exp"
																	placeholder="first name"
																	className="form-control input-md"
																	type="text" />
																{errors.fname ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.fname}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="product_name" className="control-label mb-1">Last Name *</label>
															<input id="product_name"
																value={this.state.lname}
																onChange={this.ChangeValue}
																name="lname"
																placeholder="last name"
																className="form-control input-md"
																type="text" />
															{errors.lname ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.lname}</div> : null}

														</div>
													</div>
													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Email *</label>
																<input id="product_price"
																	value={this.state.email}
																	onChange={this.ChangeValue}
																	name="email"
																	placeholder="email"
																	className="form-control input-md"
																	type="email" />
																{errors.email ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.email}</div> : null}
															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code-1" className="control-label mb-1">Gender * </label>
															<select id="x_card_code-1"
																name="gender"
																value={this.state.gender}
																onChange={this.ChangeValue}
																className="form-control">
																<option defaultChecked>Select Catagory</option>
																<option value="Male">Male</option>
																<option value="Female">Female</option>
															</select>
															{errors.gender ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.gender}</div> : null}

														</div>
													</div>
													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Mobile</label>
																<input id="available_quantity"
																	value={this.state.mobile}
																	onChange={this.ChangeValue}
																	name="mobile"
																	placeholder="mobile"
																	className="form-control input-md"
																	type="text" />
																{errors.mobile ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.mobile}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code" className="control-label mb-1">Role</label>

															<select id="x_card_code"
																name="role"
																value={this.state.role}
																onChange={this.ChangeValue}
																className="form-control">
																<option defaultChecked>Select Role As</option>
																<option value="Admin">Admin</option>
																<option value="Junior-Admin">Junior-Admin</option>
															</select>
															{errors.role ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.role}</div> : null}
														</div>
													</div>

													<div className="row">

														<div className="col-6 mt-4">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Password</label>
																<input type="password" name="password" onChange={this.ChangeValue} placeholder="enter password" value={this.state.password} className="form-control" />
																{errors.password ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.password}</div> : null}

															</div>
														</div>
														<div className="col-6 mt-4">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Address</label>
																<input type="text" name="address" onChange={this.ChangeValue} placeholder="enter permanent address" value={this.state.address} className="form-control" />
																{errors.address ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.address}</div> : null}

															</div>
														</div>
													</div>


													<div className="row">


														<div className="col-12">
															<label htmlFor="x_card_code" className="control-label mb-1">Select Images</label>

															<input type="file" name="picture" id="picture" onChange={this.ChangeFile} className="form-control" />
															{errors.picture ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.picture}</div> : null}

														</div>
													</div>


													<div>
														<button id="payment-button" className="btn btn-lg btn-info btn-block mt-4">

															<span id="payment-button-amount">Register Admin</span>
															<span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
														</button>
													</div>
												</form>
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
const mapStateToProps = (state) => {

	var url = window.location.pathname
	var id = url.substr(url.lastIndexOf('/') + 1)
	return {
		data: state.NewAdmin.Admin.find(item => item._id === id),
		
	}


}
export default connect(mapStateToProps, { registerAdmin })(AddAdmin)