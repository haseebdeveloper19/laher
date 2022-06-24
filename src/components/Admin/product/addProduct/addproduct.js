import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { registerProduct, updateProduct } from '../../../../Redux/actions/ProductAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/add.css'
// import Loading from '../../../Views/Loading'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
class Addpro extends Component {
	state = {
		id: '',
		product_code: '',
		product_name: '',
		product_categorie: '',
		product_description: '',
		product_size: '',
		available_quantity: '',
		product_price: '',
		real_price:'',
		loading: true,
		summer: false,
		winter: false,
		price: '',
		picture: '',
		formIsValid: false,
		errors: {}

	}








	ChangeValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}



	ChangeFile = (e) => {
		this.setState({
			[e.target.id]: e.target.files[0],
		})
	}


	onChangeVal = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	// ProductColor = (e) => {
	// 	e.preventDefault();

	// 	const { colorname, price, imagecolor1 } = this.state
	// 	let ColorData = this.state.colornames

	// 	let n = {

	// 		colorname: colorname,
	// 		price: price,
	// 		imagecolor1: imagecolor1

	// 	}





	// 	ColorData.push(n)

	// 	this.setState({
	// 		colornames: ColorData,
	// 		price: '',
	// 		colorname: '',
	// 		imagecolor1: ''

	// 	})

	// }



	componentWillMount() {
		setTimeout(() => {
			this.setState({ loading: false })
		}, 2000);
	}





	componentWillReceiveProps(Nextprops) {
		if (Nextprops.data) {
			this.setState({ Edit: Nextprops.data })
		}
	}






	

	render() {

		// const { product_categorie, picture, product_price, product_description, product_code, product_name, product_size, available_quantity } = this.state

		const SignInSchema = Yup.object().shape({
			product_code: Yup.string().required("Product code is required * "),
			product_name: Yup.string().required("product Name is required *"),
			product_price: Yup.string().required("Product Price is required"),
			product_size: Yup.string().required("Product Catagory Name is required"),
			product_description: Yup.string().required("Product Descrciption is required"),
			available_quantity: Yup.string().required("Available Product Quantity is required"),
			product_categorie: Yup.string().required("Collection Name is required"),
			// real_price:Yup.string().required("Real Price is required")


		});

		const initialValues = { product_name: '', product_code: '', product_description: '', product_size: '', product_price: '', picture: '', available_quantity: '', product_categorie: '' }




		return (
			<div>

				<div>
					<aside id="left-panel" className="left-panel">

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
												<Link to="/Admin_Dashboard"><i className="fa fa-home"></i> Home</Link>
												<span>Create Product</span>
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

														<div className="sufee-alert alert with-close alert-primary alert-dismissible fade show">
															<span className="badge badge-pill badge-primary">Success</span>
															New Product are successfully Registered
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														: null

												}
												<div className="card-title">
													<h3>{this.props.data ? "Edit Product" : "Create new product"}</h3>
												</div>
												<hr></hr>
												<Formik
													initialValues={initialValues}
													validationSchema={SignInSchema}
													onSubmit={(values) => {


														let formData = new FormData();

														formData.append(`picture`, this.state.picture)
														formData.append('product_code', values.product_code)
														formData.append('product_name', values.product_name)
														formData.append('product_description', values.product_description)
														formData.append('product_categorie', values.product_categorie)
														formData.append('product_size', values.product_size)
														formData.append('available_quantity', values.available_quantity)
														formData.append('product_price', values.product_price)
														formData.append('real_price', values.real_price)

														this.props.registerProduct(formData);


														setTimeout(() => {
															  values.product_code = ''
																values.product_name = ''
																values.product_price = ''
																values.product_categorie = ''
																values.product_description = ''
																values.product_size = ''
																values.available_quantity = ''
																values.real_price = ''

																this.setState({
																	picture: "",
																	formIsValid: true,
																})

														}, 1500);
														setTimeout(() => {
															this.setState({

																formIsValid: false,
															})
														}, 4000);
													}}
												>
													{() => (
														<Form className="form-horizontal"  >

															<div className="row">
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<div className="form-group">
																		<label htmlFor="cc-exp" className="control-label mb-1 mt-2 ">Product Id </label>
																		<Field
																			// value={this.state.product_code}
																			// onChange={this.ChangeValue}
																			name="product_code"
																			id="cc-exp"
																			placeholder="Product Id"
																			type="text"
																			className="form-control"
																		/>
																		<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_code" component="div" />

																	</div>
																</div>
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<label htmlFor="product_name" className="control-label mb-1 mt-2">Product Name *</label>
																	<Field id="product_name"
																		// value={this.state.product_name}
																		// onChange={this.ChangeValue}
																		name="product_name"
																		placeholder="Product Name"
																		className="form-control input-md"
																		type="text"

																	/>
																	<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_name" component="div" />

																</div>
															</div>
															<div className="row" >
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<div className="row">
																		<div className="col-md-6">
																			<div className="form-group">
																				<label htmlFor="cc-exp" className="control-label mb-1 mt-2">Product Price *</label>
																				<Field id="product_price"
																					// value={this.state.product_price}
																					// onChange={this.ChangeValue}
																					name="product_price"
																					placeholder="Product Price"
																					className="form-control input-md"
																					type="text" />
																				<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_price" component="div" />
																			</div>		
																			</div>
																				<div className="col-md-6">
																					<div className="form-group">

																						<label htmlFor="cc-exp" className="control-label mb-1 mt-2">Discount Price *</label>
																						<Field id="product_price"
																							// value={this.state.product_price}
																							// onChange={this.ChangeValue}
																							name="real_price"
																							placeholder="Discount Price"
																							className="form-control input-md"
																							type="text" />
																						<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="real_price" component="div" />



																					</div>
																		</div>


																	</div>
																</div>
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<label htmlFor="x_card_code" className="control-label mb-1 mt-2"> Product Catagory * </label>
																	<Field as="select" id="product_categorie"
																		name="product_categorie"
																		className="form-control">
																		<option defaultChecked>Select Catagory</option>
																		<option >Summer</option>
																		<option >Winter</option>

																	</Field>
																	<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_categorie" component="div" />


																</div>
															</div>
															<div className="row">
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<div className="form-group">
																		<label htmlFor="available_quantity" className="control-label mb-1 mt-2">Product Stock Quantity</label>
																		<Field id="available_quantity"
																			// value={this.state.available_quantity}
																			// onChange={this.ChangeValue}
																			name="available_quantity"
																			placeholder="Avaliable Qunantity"
																			className="form-control input-md"
																			type="text" />
																		<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="available_quantity" component="div" />


																	</div>
																</div>
																<div className="col-md-6 col-lg-6 col-sm-12">
																	<div className="form-group">
																		<label htmlFor="product_size" className="control-label mb-1 mt-2">Product Catagory Name</label>

																		<Field as="select" id="product_size"
																			// value={this.state.product_pric}
																			// onChange={this.ChangeValue}
																			name="product_size" className="form-control">

																			<option defaultChecked>Select Summer Catagory</option>
																			<option value="Premium Khaddi">Premium Khaddi</option>
																			<option value="Royal Organza">Royal Organza</option>
																			<option value="Summer Designer Plus">Summer Designer Plus</option>
																			<option value="Summer Khaddi">Summer Khaddi</option>

																			<option style={{ backgroundColor: 'red' }}>Select Winter Catagory</option>
																			<option value="Winter Khaddi">Winter Khaddi</option>
																			<option value="Winter Goli">Winter Goli</option>
																			<option value="Handmade Series">Handmade Series</option>
																			<option value="Designer Plus">Designer Plus</option>

																		</Field>



																		<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_size" component="div" />


																	</div>


																</div>
															</div>

															<div className="row">


																<div className="col-md-6 col-lg-6 col-sm-12 ">
																	<label htmlFor="x_card_code" className="control-label mb-1  mt-2">Select Images</label>
																	<div className="profile-img">
																		<div className="file ">
																			<input
																				className="form-control"
																				name="picture"
																				id="picture"
																				type="file"
																				accept="images/*"
																				onChange={this.ChangeFile}
																			/>
																			{/* <ErrorMessage style={{color:'red' , fontSize:'14px'}} name="picture" component="div" /> */}

																		</div>
																	</div>
																</div>

																<div className="col-md-6 col-lg-6 col-sm-12 md-4">
																	<label htmlFor="x_card_code" className="control-label mb-1 mt-2">Product Description</label>
																	<Field as="textarea"
																		className="form-control"
																		id="product_description"
																		placeholder="Product Description"

																		name="product_description" />
																	<ErrorMessage style={{ color: 'red', fontSize: '14px' }} name="product_description" component="div" />

																</div>

															</div>


															<div>
																<button id="payment-button" type="submit" className="btn btn-info mt-3">

																	<span id="payment-button-amount">Add Product</span>
																	<span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
																</button>
															</div>
														</Form>
													)
													}
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


const mapStateToProps = (state) => {

	var url = window.location.pathname
	var id = url.substr(url.lastIndexOf('/') + 1)
	return {
		data:  state.Product.Products &&  state.Product.Products.find(item => item._id === id),
		errors: state.errors
	}


}
export default connect(mapStateToProps, { registerProduct, updateProduct })(Addpro)