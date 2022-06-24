import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/admin.css'
import Sidebar from '../../navbar/sidebar'
import Nav from '../../navbar/nav'
import { UserCount, GetVisister } from '../../../Redux/actions/UserAction'
import { GetProduct, Filter_Man_and_Woman } from '../../../Redux/actions/ProductAction'
import { Get_Cart } from '../../../Redux/actions/CartActon'
import { Get_Email } from '../../../Redux/actions/Email'
import { getCkoutInfo } from '../../../Redux/actions/checkoutAction'
// import { getNotificInfo } from '../../../Redux/actions/Notification'
import { connect } from 'react-redux'
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			notification: [],
			Premium: [],
			Royal: [],
			Designer: [],
			Khaddi: [],
			WKhaddi: [],
			WGoli: [],
			Handmad: [],
			WDesigner: [],

		}
	}

	componentDidMount() {
		this.props.UserCount()
		this.props.Get_Email()
		this.props.GetProduct()
		this.props.getCkoutInfo()
		this.props.Get_Cart()
		this.props.GetVisister()

		setTimeout(() => {
			this.props.Filter_Man_and_Woman()
		}, 1500);


	}

	componentWillReceiveProps(NextProps) {
		if (NextProps.Premium) {
			this.setState({ Premium: NextProps.Premium })
		}
		if (NextProps.Royal) {
			this.setState({ Royal: NextProps.Royal })

		}
		if (NextProps.Designer) {
			this.setState({ Designer: NextProps.Designer })

		}
		if (NextProps.Khaddi) {
			this.setState({ Khaddi: NextProps.Khaddi })

		}
		if (NextProps.WKhaddi) {
			this.setState({ WKhaddi: NextProps.WKhaddi })

		}
		if (NextProps.WGoli) {
			this.setState({ WGoli: NextProps.WGoli })

		}
		if (NextProps.Handmad) {
			this.setState({ Handmad: NextProps.Handmad })

		}
		if (NextProps.WDesigner) {
			this.setState({
				WDesigner: NextProps.WDesigner
			})

		}

	}



	render() {


		// this.props.checkoutData && this.props.checkoutData.lenght > 0 ? this.props.checkoutData.map(item => {
		// 	return item.products
		// })
		// :null


		const Premium = []
		const Royal = []
		const Designer = []
		const Khaddi = []
		const WKhaddi = []
		const WGoli = []
		const Handmad = []
		const WDesigner = []

		this.props.checkoutData && this.props.checkoutData.length > 0 ? this.props.checkoutData.map(element => {
			return element.products.filter(item => {
				if (item.Size === "Premium Khaddi") {
					return Premium.push(item)
				}
				if (item.Size === "Royal Organza") {
					return Royal.push(item)
				}
				if (item.Size === "Summer Designer Plus") {
					return Designer.push(item)
				}
				if (item.Size === "Summer Khaddi") {
					return Khaddi.push(item)
				}
				if (item.Size === "Winter Khaddi") {
					return WKhaddi.push(item)
				}
				if (item.Size === "Winter Goli") {
					return WGoli.push(item)
				}
				if (item.Size === "Handmade Series") {
					return Handmad.push(item)
				} if (item.Size === "Designer Plus") {
					return WDesigner.push(item)
				}
				else
					return item

			})
		


		})
		: null 

		const P = Premium && Premium.reduce(

			(accumulatedTotal, cartItem) =>
				accumulatedTotal + parseInt(cartItem.Quantity , 10),
			0
		) 
		 const R = Royal && Royal.reduce(

			(accumulatedTotal, cartItem) =>
				accumulatedTotal + parseInt(cartItem.Quantity  , 10),
			0
		)
			const D = Designer && Designer.reduce(

				(accumulatedTotal, cartItem) =>
					accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
				0
			)
			const K =Khaddi && Khaddi.reduce(

				(accumulatedTotal, cartItem) =>
					accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
				0, 10
			)
			const Wk = WKhaddi && WKhaddi.reduce(

				(accumulatedTotal, cartItem) =>
					accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
				0
			)  
			const WG = WGoli && WGoli.reduce(

				(accumulatedTotal, cartItem) =>
					accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
				0
			)
				const Hnd = Handmad && Handmad.reduce(

					(accumulatedTotal, cartItem) =>
						accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
					0
				)
				const Wd = WDesigner && WDesigner.reduce(

					(accumulatedTotal, cartItem) =>
						accumulatedTotal + parseInt(cartItem.Quantity, 10 ),
					0
				)

		const TotalSummerProductSales = P + R + D + K;
		const TotalWinterProductSales = Wk + WG + Hnd + Wd;



		const TotalSummerProduct = this.state.Premium + this.state.Royal + this.state.Designer + this.state.Khaddi;
		const TotalWinterProduct = this.state.WKhaddi   + this.state.WDesigner + this.state.WGoli + this.state.Handmad;
	
		



		//// Count Total Sales Per Day  ///

		let fo = this.props.checkoutData && this.props.checkoutData.filter(element => {
			return  (element.date.substring(0, 10) === new Date().toISOString().slice(0, 10))
			
			



		});


		let emails = this.props.EmailData && this.props.EmailData.filter(element => {
			return element.date.substring(0, 10) === new Date().toISOString().slice(0, 10)
			
			



		})

		let salespday = fo && fo.map(item => {
			return item.products.reduce((total, product) => product.real_price === 'undefined' ?  total + product.product_price * product.Quantity : total + product.real_price * product.Quantity , 0);
		})

		let RealValue =  salespday && salespday.reduce((total, dat) => total + dat, 0).toFixed(2)


		//// Get Current date convert into mm-dd-yyyy ///

		var today = new Date();
		today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


		//// Get Current date convert into mm-dd-yyyy ///

		let cartdetail = this.props.CartInfo && this.props.CartInfo.filter(element => {
			return (element.date.substring(0, 10) === new Date().toISOString().slice(0, 10)) 
			
			



		});




		//// Count Total Item and Total Sales ///

		let nwesit = this.props.checkoutData && this.props.checkoutData.map(item => {
			return item.products.reduce((total, product) => total + parseInt(product.Quantity, 10), 0);

		})
		let totalItem = nwesit && nwesit.reduce((totoal, value) => totoal + value, 0);

		// let sales =this.props.checkoutData && this.props.checkoutData.map(item => {
		// 	return item.products.reduce((total, product) => product.real_price === 'undefined' ?  total + product.product_price * product.Quantity : total + product.real_price * product.Quantity, 0).toFixed(2);

		// })


		let TotalSales = this.props.checkoutData.reduce((total , amounts) =>  total + parseInt(amounts.amount , 10), 0).toFixed(2)

	
		
		// let= sales && sales.reduce((totoal, value) => totoal + parseInt(value , 10), 0).toFixed(2)

		/// Count Visister WEb ///

		let webvist = this.props.webvisiter && this.props.webvisiter.reduce((total, visit) => total + parseInt(visit.visiters, 10), 0)





		return (


			<div>
				<aside id="left-panel" className="left-panel">

					<Sidebar />
				</aside>


				<div id="right-panel" className="right-panel" style={{ width: '100%' }} >

					<Nav />


					<div className="col-md-12 mb-4">
						<div className="card-group">
							<div className="card col-lg-3 col-md-12 no-padding bg-flat-color-1">
								<div className="card-body">
									<div className="h1 text-muted text-right mb-4">
										<i className="fa fa-users text-light"></i>
									</div>

									<div className="h4 mb-0 text-light">
										<span className="count">{webvist}</span>
									</div>
									<small className="text-uppercase font-weight-bold text-light">visiters</small>
									<div className="progress progress-xs mt-3 mb-0 bg-light" style={{ width: '40%', height: '5px' }}></div>
								</div>
							</div>
							<div className="card col-lg-3 col-md-12 no-padding bg-flat-color-5 ml-1">
								<div className="card-body">
									<div className="h1 text-muted text-right mb-4">
										<i className="fa fa-envelope text-light"></i>
									</div>

									<div className="h4 mb-0 text-light">
										<span className="count">{this.props.EmailData ? this.props.EmailData.length : null}</span>
									</div>
									<small className="text-uppercase font-weight-bold text-light">Total Email</small>
									<div className="progress progress-xs mt-3 mb-0 bg-light" style={{ width: '40%', height: '5px' }}></div>
								</div>
							</div>
							<div className="card col-lg-3 col-md-12  no-padding no-shadow  ml-1">
								<div className="card-body bg-flat-color-4">
									<div className="h1 text-muted text-right mb-4">
										<i className="fa fa-shopping-bag text-light fontSize-20px"></i>
									</div>
									<div className="h4 mb-0 text-light">
										<span className="count">{this.props.CartInfo ? this.props.CartInfo.length : null}</span>
									</div>
									<small className="text-uppercase font-weight-bold text-light">New Orders</small>
									<div className="progress progress-xs mt-3 mb-0 bg-light" style={{ width: '40%', height: '5px' }}></div>
								</div>
							</div>
							<div className="card col-lg-3 col-md-12 no-padding no-shadow ml-1">
								<div className="card-body bg-flat-color-3">
									<div className="h1 text-right mb-4">
										<i className="fa fa-cart-plus text-light"></i>
									</div>
									<div className="h4 mb-0 text-light">
										<span className="count">{totalItem}</span>
									</div>
									<small className="text-light text-uppercase font-weight-bold">Products sold</small>
									<div className="progress progress-xs mt-3 mb-0 bg-light" style={{ width: '40%', height: '5px' }}></div>
								</div>
							</div>


						</div>
					</div>



					<div className="col-lg-3 col-md-6">
						<div className="card">
							<div className="card-body">
								<div className="stat-widget-four">
									<div className="stat-icon dib">
										<i className="fa fa-users text-muted"></i>
									</div>
									<div className="stat-content">
										<div className="text-left dib">
											<div className="stat-heading">Daily Orders</div>
											<div className="stat-text">Total:{cartdetail ? cartdetail.length : null }</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="card">
							<div className="card-body">
								<div className="stat-widget-four">
									<div className="stat-icon dib">
										<i className="fa fa-envelope text-muted"></i>
									</div>
									<div className="stat-content">
										<div className="text-left dib">
											<div className="stat-heading">Daily Email</div>
											<div className="stat-text">Total:{emails ? emails.length : null}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="card">
							<div className="card-body">
								<div className="stat-widget-four">
									<div className="stat-icon dib">
										<i className="fa fa-book text-muted"></i>
									</div>
									<div className="stat-content">
										<div className="text-left dib">
											<div className="stat-heading">Daily Sales</div>
											<div className="stat-text" >Total: <span style={{color:'green'}} > Rs {RealValue} </span> </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="card">
							<div className="card-body">
								<div className="stat-widget-four">
									<div className="stat-icon dib">
										<i className="fa fa-star text-muted"></i>
									</div>
									<div className="stat-content">
										<div className="text-left dib">
											<div className="stat-heading">Total Sales</div>
											<div className="stat-text">Total: <span style={{color:'green'}} >Rs { TotalSales} </span> </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>




					<div className="col-lg-6">
						<div className="card">
							<div className="card-header">
								<strong className="card-title">Client Info</strong>
							</div>
							<div className="card-body">
								<table className="table table-responsive">
									<thead>

										<tr>
											<th scope="col">#</th>
											<th scope="col">Email</th>
											<th scope="col">Last Onlion</th>
											<th scope="col">View</th>
										</tr>
									</thead>
									<tbody>
										{this.props.checkoutData && this.props.checkoutData.length > 0 ? this.props.checkoutData.map((item, index) => {
											return (
												(index < 5) ?
													<tr key={index}>
														<th>{index + 1}</th>
														<td>{item.email}</td>
														<td>{item.date.substring(0, 10)}</td>
														<td><Link to={`Orders/${item._id}`}><i className="fa fa-eye"></i></Link></td>
													</tr>
													: null
											)
										})
											: null
										}


									</tbody>
								</table>
							</div>
						</div>





					</div>

					<div className="col-md-6 col-lg-6">
						<div className="card">
							<div className="card-header">
								<strong className="card-title">Product Sold In Day</strong>
							</div>




							<div className="accordion" id="accordionExample1">
								<div className="card mb-0">
									<div className="card-header" id="heading">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
												<i className="fa fa-user"></i>Winter Clothes <span className="badge badge-primary pull-right">
													{TotalWinterProductSales ? TotalWinterProductSales : 0}
												</span>
											</button>
										</h2>
									</div>

									<div id="collapse1" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample1">
										<div className="card-body">
											<ul className="list-group list-group-flush">

												<li className="list-group-item">
													<i className="fa fa-envelope-o"></i> Winter Khaddi <span className={Wk ? "badge badge-success pull-right" : "badge badge-danger pull-right"}  >{Wk ? Wk : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-tasks"></i> Winter Goli <span className={WG ? "badge badge-info pull-right" : "badge badge-danger pull-right"}>{WG ? WG : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-bell-o"></i>Handmade Series <span className={Hnd ? "badge badge-success pull-right" : "badge badge-warning pull-right"}>{Hnd ? Hnd : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-comments-o"></i> Designer Plus <span className={Wd ? "badge badge-success pull-right" : "badge badge-warning pull-right "}>{Wd ? Wd : 0}</span>
												</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card mb-0">
									<div className="card-header" id="heading2">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
												<i className="fa fa-user"></i>Summer Clothes  <span className={TotalSummerProductSales ? "badge badge-success pull-right" : "badge badge-danger pull-right"}>
													{TotalSummerProductSales ? TotalSummerProductSales : 0}
												</span>
											</button>
										</h2>
									</div>
									<div id="collapse2" className="collapse" aria-labelledby="collaps2" data-parent="#accordionExample1">
										<div className="card-body">
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													<i className="fa fa-envelope-o"></i>Premium Khaddi <span className={P ? "badge badge-success pull-right" : "badge badge-danger pull-right"} >{P ? P : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-tasks"></i> Royal Organza <span className={R ? "badge badge-success pull-right" : "badge badge-danger pull-right"} >{R ? R : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-bell-o"></i>Summer Designer Plus <span className={ D ? "badge badge-success pull-right" :  "badge badge-warning pull-right"}>{D ? D : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-comments-o"></i> Summer Khaddi <span className={K ? "badge badge-success pull-right" :"badge badge-warning pull-right "}>{K ? K : 0}</span>
												</li>

											</ul>
										</div>
									</div>

								</div>

							</div>

						</div>



						<div className="card">
							<div className="card-header">
								<strong className="card-title">Stock Avaliablity </strong>
							</div>

							<div className="accordion" id="accordionExample">
								<div className="card mb-0">
									<div className="card-header" id="headingOne">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<i className="fa fa-user"></i>Winter Clothes <span className={TotalWinterProduct ? "badge badge-primary pull-right" : "badge badge-danger pull-right"} >
													{TotalWinterProduct ? TotalWinterProduct : 0}
												</span>
											</button>
										</h2>
									</div>

									<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group list-group-flush">

												<li className="list-group-item">
													<i className="fa fa-envelope-o"></i> Winter Khaddi <span className={this.state.WKhaddi ? "badge badge-success pull-right" : "badge badge-primary pull-right"}  >{this.state.WKhaddi ? this.state.WKhaddi : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-tasks"></i> Winter Goli <span className={this.state.WGoli ? "badge badge-success pull-right" : "badge badge-danger pull-right"}>{this.state.WGoli ? this.state.WGoli : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-bell-o"></i>Handmade Series <span className={this.state.Handmad ? "badge badge-success pull-right" : "badge badge-success pull-right"}>{this.state.Handmad ? this.state.Handmad : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-comments-o"></i> Designer Plus <span className={this.state.WDesigner ? "badge badge-success pull-right" : "badge badge-warning pull-right r-activity"}>{this.state.WDesigner ? this.state.WDesigner : 0}</span>
												</li>

											</ul>
										</div>
									</div>
								</div>
								<div className="card mb-0">
									<div className="card-header" id="headingTwo">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<i className="fa fa-user"></i>Summer Clothes  <span className={TotalSummerProduct ? "badge badge-primary pull-right" : "badge badge-danger pull-right"}>
													{TotalSummerProduct ? TotalSummerProduct : 0}
												</span>
											</button>
										</h2>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="collapseTwo" data-parent="#accordionExample">
										<div className="card-body">
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													<i className="fa fa-envelope-o"></i>Premium Khaddi <span className={this.state.Premium ? "badge badge-success pull-right" : "badge badge-danger pull-right"} >{this.state.Premium ? this.state.Premium : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-tasks"></i> Royal Organza <span className={this.state.Royal ? "badge badge-success pull-right" : "badge badge-danger pull-right"}>{this.state.Royal ? this.state.Royal : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-bell-o"></i>Summer Designer Plus <span className={this.state.Designer ? "badge badge-success pull-right" : "badge badge-success pull-right"}>{this.state.Designer ? this.state.Designer : 0}</span>
												</li>
												<li className="list-group-item">
													<i className="fa fa-comments-o"></i> Summer Khaddi <span className={this.state.Khaddi ? "badge badge-success pull-right" : "badge badge-warning pull-right r-activity"}>{this.state.Khaddi ? this.state.Khaddi : 0}</span>
												</li>

											</ul>
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

const mapToStateToProps = (state) => ({
	CartInfo: state.Cart.AddCart,
	webvisiter: state.auth.Webcount,
	checkoutData: state.checkout.CheckOuts,
	EmailData: state.Email.Email,
	Premium: state.Product.Premium && state.Product.Premium.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	Royal: state.Product.Royal && state.Product.Royal.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	Designer:  state.Product.Designer && state.Product.Designer.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	Khaddi: state.Product.Khaddi && state.Product.Khaddi.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	WKhaddi: state.Product.WKhaddi && state.Product.WKhaddi.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	WGoli: state.Product.WGoli && state.Product.WGoli.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	Handmad:  state.Product.Handmad && state.Product.Handmad.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),
	WDesigner: state.Product.WDesigner && state.Product.WDesigner.reduce(

		(accumulatedTotal, cartItem) =>
			accumulatedTotal + parseInt(cartItem.Avaliable_Quantity, 10),
		0
	),

})


export default connect(mapToStateToProps, { UserCount, GetProduct, Get_Email ,  getCkoutInfo, GetVisister, Filter_Man_and_Woman, Get_Cart })(Dashboard)