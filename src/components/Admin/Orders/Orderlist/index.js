import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { Link } from 'react-router-dom'
// import ServerTable from 'react-strap-table';
import { connect } from 'react-redux'
// import DataTable from 'react-data-table-component';

import './style.css'
import { getCkoutInfo } from '../../../../Redux/actions/checkoutAction'

// const columns = [
// 	{
// 		name: '#',
// 		selector: 'id',
// 		sortable: true,
// 	},
// 	{
// 		name: 'Fname',
// 		selector: 'fname',
// 		sortable: true,
// 	},
// 	{
// 		name: 'Lname',
// 		selector: 'lname',
// 		sortable: true,
// 	},
// 	{
// 		name: 'Email',
// 		selector: 'email',
// 		sortable: true,
// 	},
// 	{
// 		name: 'City',
// 		selector: 'city',
// 		sortable: true,
// 	},
// 	{
// 		name: 'State',
// 		selector: 'state',
// 		sortable: true,
// 	},
// 	{
// 		name: 'ZipCode',
// 		selector: 'zipcode',
// 		sortable: true,
// 	},
// 	{
// 		name: 'Amount',
// 		selector: 'amount',
// 		sortable: true,
// 	},
// 	{
// 		name: 'Date',
// 		selector: 'date',
// 		sortable: true,
// 	},
// 	{
// 		name: 'View',
// 		selector: 'view',
// 		sortable: true,
// 	},
// ];



class OrderList extends Component {
	constructor(props) {
		super(props);
		this.state = { filterText: "" };
		
	}

	










	componentDidMount() {
		this.props.getCkoutInfo()
	}



	render() {
		// const data = this.props.checkoutData.map((item) => ({ id: item.customer_id, fname: item.fname, lname: item.lname, email: item.email, city: item.city, state: item.state, zipcode: item.zipcode, amount: item.amount, date: item.date, view: <Link to={`Orders/${item._id}`}> <i className="fa fa-eye"></i></Link> }))
		const filteredItems = this.props.checkoutData &&  this.props.checkoutData.filter(
			(item) =>{			 
				return item.fname  && item.fname.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1}
		);
            

		return (
			<div>
				<aside id="left-panel" class="left-panel">

					<Sidebar />
				</aside>


				<div id="right-panel" className="right-panel" >

					<Nav />






					<div class="container">
						<div class="row">
							<div className="container">

								<div className="col-md-12" style={{ padding: '10px' }} >
									<div className="breadcrumb-option">
										<div className="container">
											<div className="row">
												<div className="col-lg-12">
													<div className="breadcrumb__links">
														<Link to="/Admin_Dashboard"><i className="fa fa-home"></i> Home</Link>
														<span>Order List </span>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="pt-4">
										<div className="row">

											<div className="col-md-3"></div>
											<div className="col-md-6">

												<div className="input-group mb-3">
													<input tye="text " className="form-control" placeholder="search here" value={this.state.filterText} name='filterText' onChange={(e) => this.setState({ filterText : e.target.value})} />
													<div className="input-group-prepend">
														<label className="input-group-text" for="inputGroupSelect01"><i className="fa fa-search"></i></label>
													</div>
												</div>
											</div>
											<div className="col-md-3"></div>

										</div>

										<div className="table-wrapper" style={{maxHeight:'400px' ,overflowY:'scroll'}}>
											<table className="fl-table" >
												<thead>
													<tr>
														<th>CheckOut Id</th>
														<th>Full Name</th>
														<th>Email</th>
														<th>City </th>
														<th>Amount</th>
														<th>Status</th>
														<th>View</th>
													</tr>
												</thead>
												<tbody>
													{ filteredItems && filteredItems.length > 0  ? filteredItems.map((item)=> {
														return(
														<tr>
															<td>{item.customer_id }</td>
															<td>{item.fname + item.lname }</td>
															<td>{item.email }</td>
															<td>{item.city }</td>
															<td>{item.amount }</td>
															<td>pendding</td>
															<td><Link to={`Orders/${item._id}`}> <i className="fa fa-eye"></i></Link></td>
														</tr>
														)
													})
													: <h2 style={{textAlign:'center ' , fontSize:'18px'}}>No Record Found</h2>
												}
													
												</tbody>
											</table>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		)
	}
}

const mapToStateToProps = (state) => ({
	checkoutData: state.checkout.CheckOuts
})

export default connect(mapToStateToProps, { getCkoutInfo })(OrderList)