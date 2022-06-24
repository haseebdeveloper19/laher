import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { updateProduct } from '../../../../Redux/actions/ProductAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/add.css'

class Editproduct extends Component {
	state = {
		id: this.props.data ? this.props.data._id : null,
		product_code: this.props.data ? this.props.data.ProductId : '',
		product_name: this.props.data ? this.props.data.ProductName : '',
		product_categorie: this.props.data ? this.props.data.Catagory : '',
		product_description: this.props.data ? this.props.data.Description : '',
		product_size: this.props.data ? this.props.data.Size : '',
		available_quantity: this.props.data ? this.props.data.Avaliable_Quantity : '',
		product_price: this.props.data ? this.props.data.product_price : '',
		real_price: this.props.data ? this.props.data.real_price : '',
		picture: '',
		Edit: {},
		loading: true,
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

	// componentDidMount() {
	//     this.props.GetProduct()

	// }








	componentWillReceiveProps(Nextprops) {
		if (Nextprops.data) {
			this.setState({ id: Nextprops.data._id, product_code: Nextprops.data.ProductId, product_name: Nextprops.data.ProductName, product_categorie: Nextprops.data.Catagory, product_price: Nextprops.data.product_price, product_description: Nextprops.data.Description, product_size: Nextprops.data.Size, available_quantity: Nextprops.data.Avaliable_Quantity, real_price: Nextprops.data.real_price })
		}
	}

	UpdateForm = (e) => {
		e.preventDefault()
		const { id, product_categorie, product_price, real_price, product_description, product_code, product_name, product_size, available_quantity } = this.state


		let formData = new FormData();
		formData.append(`id`, id)
		formData.append('picture', this.state.picture)
		formData.append('product_code', product_code)
		formData.append('product_name', product_name)
		formData.append('product_description', product_description)
		formData.append('product_categorie', product_categorie)
		formData.append('product_size', product_size)
		formData.append('available_quantity', available_quantity)
		formData.append('product_price', product_price)
		formData.append('real_price', real_price)
		this.props.updateProduct(formData);

setTimeout(() => {
	this.setState({
		product_code: '',
		product_name: '',
		product_price: '',
		product_categorie: '',
		product_description: '',
		product_size: '',
		available_quantity: '',
		picture: '',
		real_price: ''
	})

	this.props.history.push("/Products/View_Product")

}, 1500);



	}

render() {


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
											<span>Update Product</span>
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


											<div className="card-title">
												<h3>{this.props.data ? "Edit Product" : "Create new product"}</h3>
												<hr></hr>
											</div>
											<br />




											<form className="form-horizontal" onSubmit={this.UpdateForm} >

												<div className="row">
													<div className="col-md-6 col-lg-6 col-sm-12">
														<div className="form-group">
															<label htmlFor="product_code" className="control-label mb-1">Product Id </label>
															<input id="product_code"
																value={this.state.product_code}
																onChange={this.ChangeValue}
																name="product_code"
																placeholder="Product Id"
																type="text"
																className="form-control"
															/>


														</div>
													</div>
													<div className="col-md-6 col-lg-6 col-sm-12">
														<label htmlFor="product_name" className="control-label mb-1">Product Name *</label>
														<input id="product_name"
															value={this.state.product_name}
															onChange={this.ChangeValue}
															name="product_name"
															placeholder="Product Name"
															className="form-control input-md"
															type="text"

														/>


													</div>
												</div>
												<div className="row" >
													<div className="col-md-6 col-lg-6 col-sm-12">
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<label htmlFor="cc-exp" className="control-label mb-1">Product Price *</label>
																	<input id="product_price"
																		value={this.state.product_price}
																		onChange={this.ChangeValue}
																		name="product_price"
																		placeholder="Product Price"
																		className="form-control input-md"
																		type="text" />


																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<label htmlFor="cc-exp" className="control-label mb-1">Dicount Price *</label>
																	<input id="real_price"
																		value={this.state.real_price}
																		onChange={this.ChangeValue}
																		name="real_price"
																		placeholder="Real Price"
																		className="form-control input-md"
																		type="text" />


																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-6 col-sm-12">
														<label htmlFor="x_card_code" className="control-label mb-1">Product Catagory * </label>
														<select as="select" id="product_categorie"
															name="product_categorie"
															value={this.state.product_categorie}
															onChange={this.ChangeValue}
															className="form-control">
															<option defaultChecked>Select Catagory</option>
															<option >Summer</option>
															<option >Winter</option>
														</select>



													</div>
												</div>
												<div className="row">
													<div className="col-md-6 col-lg-6 col-sm-12">
														<div className="form-group">
															<label htmlFor="available_quantity" className="control-label mb-1">Product Stock Quantity</label>
															<input id="available_quantity"
																value={this.state.available_quantity}
																onChange={this.ChangeValue}
																name="available_quantity"
																placeholder="Avaliable Qunantity"
																className="form-control input-md"
																type="text" />



														</div>
													</div>
													<div className="col-md-6 col-lg-6 col-sm-12">
														<div className="form-group">
															<label htmlFor="cc-exp" className="control-label mb-1">Product Stock Size Avaliabale</label>
															<select id="product_categorie"
																value={this.state.product_size} onChange={this.ChangeValue}
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



															</select>



														</div>


													</div>
												</div>

												<div className="row">


													<div className="col-md-6 col-lg-6 col-sm-12 md-4">
														<label htmlFor="x_card_code" className="control-label mb-1 mt-2">Select Images</label>
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

															</div>
														</div>
													</div>

													<div className="col-md-6 col-lg-6 col-sm-12 md-4">
														<label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
														<textarea
															className="form-control"
															id="product_description"
															placeholder="Product Description"
															value={this.state.product_description}
															onChange={this.ChangeValue}

															name="product_description" ></textarea>


													</div>

												</div>


												<div >
													<button id="payment-button" type="submit" className="btn btn-info mt-3">

														<span id="payment-button-amount">Update Product</span>
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
		data: state.Product.Products && state.Product.Products.find(item => item._id === id),
		errors: state.errors
	}


}
export default connect(mapStateToProps, { updateProduct })(Editproduct)