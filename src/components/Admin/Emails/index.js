import React, { Component } from 'react'
import Nav from '../../navbar/nav'
import Sidebar from '../../navbar/sidebar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { Get_Email } from '../../../Redux/actions/Email'


class Emails extends Component {
	constructor(props) {
		super(props);
		this.state = { filterText: "" };
		
	}

	
	componentDidMount() {
		this.props.Get_Email()
	}



	render() {
		// const data = this.props.checkoutData.map((item) => ({ id: item.customer_id, fname: item.fname, lname: item.lname, email: item.email, city: item.city, state: item.state, zipcode: item.zipcode, amount: item.amount, date: item.date, view: <Link to={`Orders/${item._id}`}> <i className="fa fa-eye"></i></Link> }))
		const filteredItems = this.props.EmailData && this.props.EmailData.filter(
			(item) =>{
			 
				return item.name  && item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1 }
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
														<span>Email List </span>
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

										<div className="table-wrapper">
											<table className="fl-table">
												<thead>
													<tr>
														<th>Sr#</th>
														<th>Full Name</th>
														<th>Email</th>
														<th>Subject </th>
														<th>Message</th>
														<th>Date</th>
													</tr>
												</thead>
												<tbody>
													{ filteredItems && filteredItems.length > 0  ? filteredItems.map((item)=> {
														return(
														<tr>
															<td>{item._id }</td>
															<td>{item.name }</td>
															<td>{item.email }</td>
															<td>{item.subject }</td>
															<td>{item.message }</td>
															<td>{item.date}</td>
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
	EmailData: state.Email.Email
})

export default connect(mapToStateToProps, { Get_Email })(Emails)