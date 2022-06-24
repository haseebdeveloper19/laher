import React, { Component } from 'react'
import Nav from '../../navbar/nav'
import Sidebar from '../../navbar/sidebar'
import logo from '../SoucePictur/logo.PNG'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerBanner } from '../../../Redux/actions/sliderAction'
class Banner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Title1: '',
			Title2: '',
			Title3: '',
			Title4: '',
			desc1: '',
			desc2: '',
			desc3: '',
			desc4: '',

			errors: {},
			image1: logo,
			image2: logo,
			image3: logo,
			image4: logo,
			images: [],
		}
	}

	ChangeValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	ChangeFile = (e) => {
		const name = e.target.name;
		const imagesdata = this.state.images
		if (e.target.files[0]) {
			imagesdata.push(e.target.files[0])
		}
		this.setState({
			[name]: URL.createObjectURL(e.target.files[0]),
			images: imagesdata
		})
	}


	handleValidation() {
		const { Title1,
			Title2,
			Title3,
			Title4,
			desc1,
			desc2,
			desc3,
			desc4, } = this.state
		let errors = {};
		let formIsValid = true;

		//Name
		if (!Title1) {
			formIsValid = false;
			errors.Title1 = "Cannot be empty";
		}
		if (!Title2) {
			formIsValid = false;
			errors.Title2 = "Cannot be empty";
		}
		if (!Title3) {
			formIsValid = false;
			errors.Title3 = "Cannot be empty";
		}
		if (!Title4) {
			formIsValid = false;
			errors.Title4 = "Cannot be empty";
		}
		if (!desc1) {
			formIsValid = false;
			errors.desc1 = "Cannot be empty";
		}
		if (!desc2) {
			formIsValid = false;
			errors.desc2 = "Cannot be empty";
		}
		if (!desc3) {
			formIsValid = false;
			errors.desc3 = "Cannot be empty";
		}
		if (!desc4) {
			formIsValid = false;
			errors.desc4 = "Cannot be empty";
		}

		this.setState({ errors: errors, formIsValid: formIsValid });
		return formIsValid;
	}

	SendForm = (e) => {
		e.preventDefault()
		const { Title1, Title2, Title3, Title4, desc1, desc2, desc3, desc4, images } = this.state




		let formData = new FormData();

		let i = 0;
		images.forEach(file => {
			i++;
			formData.append(`file${i}`, file)
		});

		formData.append('Title1', Title1)
		formData.append('Title2', Title2)
		formData.append('Title3', Title3)
		formData.append('Title4', Title4)
		formData.append('desc1', desc1)
		formData.append('desc2', desc2)
		formData.append('desc3', desc3)
		formData.append('desc4', desc4)


		if (this.handleValidation()) {
			this.props.registerBanner(formData);


			setTimeout(() => {
				this.setState({
					Title1: '',
					Title2: '',
					Title3: '',
					Title4: '',
					desc1: '',
					desc2: '',
					desc3: '',
					desc4: '',

					errors: ''
				})

			}, 1500);
		}

	}
	render() {

		console.log("state of banner", this.state)

		const { errors } = this.state
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
												<span>Create Banner</span>
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
													this.state.formIsValid === true ?

														<div class="sufee-alert alert with-close alert-primary alert-dismissible fade show">
															<span class="badge badge-pill badge-primary">Success</span>
                                           New Slider data  are successfully Registered
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														: null

												}

												<form className="form-horizontal" onSubmit={this.props.data ? this.UpdateForm : this.SendForm}>


													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Product Title 1 *</label>
																<input id="Tittle1"
																	value={this.state.Title1}
																	onChange={this.ChangeValue}
																	name="Title1"
																	placeholder="AVAILABLE QUANTITY"
																	className="form-control input-md"
																	type="text" />
																{errors.Title1 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.Title1}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
															<textarea className="form-control"
																id="desc1"
																value={this.state.desc1}
																onChange={this.ChangeValue} name="desc1"></textarea>
															{errors.desc1 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.desc1}</div> : null}

														</div>
													</div>

													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Product Title 2 *</label>
																<input id="Tittle2"
																	value={this.state.Title2}
																	onChange={this.ChangeValue}
																	name="Title2"
																	placeholder="AVAILABLE QUANTITY"
																	className="form-control input-md"
																	type="text" />
																{errors.Title2 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.Title2}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
															<textarea className="form-control"
																id="desc2"
																value={this.state.desc2}
																onChange={this.ChangeValue} name="desc2"></textarea>
															{errors.desc2 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.desc2}</div> : null}

														</div>
													</div>
													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Product Title 3 *</label>
																<input id="Tittle3"
																	value={this.state.Title3}
																	onChange={this.ChangeValue}
																	name="Title3"
																	placeholder="AVAILABLE QUANTITY"
																	className="form-control input-md"
																	type="text" />
																{errors.Title3 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.Title3}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
															<textarea className="form-control"
																id="desc3"
																value={this.state.desc3}
																onChange={this.ChangeValue} name="desc3"></textarea>
															{errors.desc3 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.desc3}</div> : null}

														</div>
													</div>
													<div className="row">
														<div className="col-6">
															<div className="form-group">
																<label htmlFor="cc-exp" className="control-label mb-1">Product Title 4 *</label>
																<input id="Title4"
																	value={this.state.Title4}
																	onChange={this.ChangeValue}
																	name="Title4"
																	placeholder="AVAILABLE QUANTITY"
																	className="form-control input-md"
																	type="text" />
																{errors.Title4 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.Title4}</div> : null}

															</div>
														</div>
														<div className="col-6">
															<label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
															<textarea className="form-control"
																id="desc4"
																value={this.state.desc4}
																onChange={this.ChangeValue} name="desc4"></textarea>
															{errors.desc4 ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.desc4}</div> : null}

														</div>
													</div>



													<div className="row">


														<div className="col-12">
															<label htmlFor="x_card_code" className="control-label mb-1">Select Images</label>
															<div className="row">
																<div className="col-sm-3 " >
																	<div className="profile-img">
																		<label htmlFor="file-input1">
																			<img src={this.state.image1} alt="image2" />
																		</label>

																		<div className="file btn btn-lg btn-primary">
																			<input name="image1" id="file-input1" type="file" accept="image/*" capture onChange={this.ChangeFile} />
																		</div>
																	</div>
																</div>
																<div className="col-sm-3 col-xs-3">
																	<div className="profile-img">
																		<label htmlFor="file-input2">
																			<img src={this.state.image2} alt="image2" />
																		</label>
																		<div className="file btn btn-lg btn-primary">

																			<input name="image2" id="file-input2" type="file" accept="image/*" capture onChange={this.ChangeFile} />
																		</div>
																	</div>
																</div>
																<div className="col-sm-3">
																	<div className="profile-img">
																		<label htmlFor="file-input3">
																			<img src={this.state.image3} alt="image3" />
																		</label>
																		<div className="file btn btn-lg btn-primary">

																			<input name="image3" id="file-input3" type="file" accept="image/*" capture onChange={this.ChangeFile} />
																		</div>
																	</div>
																</div>
																<div className="col-sm-3 ">
																	<div className="profile-img">
																		<label htmlFor="file-input4">
																			<img src={this.state.image4} alt="image4" />
																		</label>
																		<div className="file btn btn-lg btn-primary">

																			<input name="image4" id="file-input4" type="file" style={{ border: 'none' }} accept="image/*" capture onChange={this.ChangeFile} />
																		</div>
																	</div>


																</div>
															</div>

															{errors.picture ? <div style={{ color: 'red', paddingTop: '5px' }}>{errors.picture}</div> : null}

														</div>
													</div>


													<div>
														<button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block mt-4">

															<span id="payment-button-amount">Add Product</span>
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

// const mapToStateToProps = ( state) =>{

// }
export default connect(null, { registerBanner })(Banner)