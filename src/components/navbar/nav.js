import React, { Component } from 'react'
import { logoutAdmin } from '../../Redux/actions/Admin'
import { getNotificInfo, Hide_Notification_Mes, Update_date } from '../../Redux/actions/Notification'
import ReactTimeAgo from 'react-time-ago'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import adminpc from  './images/admin.jpg'
class Nav extends Component {
	constructor(props) {
		super(props)
		// let d = new Date()

		this.state = {
			isShow: false,
			dropdown: false,
			notificationMes: false,
			notification: false,
			Data: {},
			Notificatios: [],


		}
	}


	// countingSecond = () =>  {
	// 	let value ={
	// 		date : Date.now()
	// 	}

	// 	this.props.Update_date(value)
	// }

	componentDidMount() {
		this.props.getNotificInfo()
	}


	// componentWillMount() {
	// 	setInterval(this.countingSecond, 1000)
	// }



	HideNotifi = () => {

		this.props.Hide_Notification_Mes()

	}



	Logout = () => {
		this.props.logoutAdmin(this.props.history)
	}

	componentWillReceiveProps(nextprops) {
		if (nextprops.AuthUser) {
			let object = Object.assign({}, ...nextprops.AuthUser)
			this.setState({ Data: object })
		}


	}



	render() {
		let NotificationMes = []
		let DataNotification = []
		// let UserVerification = []

		this.props.notifi && this.props.notifi.length > 0 ? this.props.notifi.filter(item => {
			this.props.AuthUser.filter(user => {
				if (item.UserId === user._id);
					return DataNotification.push(user)

			})
			if (item.IsNotification === true) {
				return NotificationMes.push(item)
			}

			return item


		}):null

		this.props.AuthUser && this.props.AuthUser.length > 0 ? this.props.AuthUser.filter(user => {

			if (user.IsNotification === true) {
				return DataNotification.push(user)
			}

			return user


		}):null










		

		return (
			<div>
				<header id="header" className="header " >

					{this.state.isShow ?

						<div className="form-inline">
							<form className="search-form">
								<input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
								<button className="search-close" onClick={() => this.setState({ isShow: false })}><i className="fa fa-close"></i></button>
							</form>
						</div>
						: null
					}


					<div className="header-menu">

						<div className="col-sm-7 col-md-6" >
							<a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks" ></i></a>
							<div className="header-left">
								<button className="search-trigger" onClick={() => this.setState({ isShow: true })}><i className="fa fa-search"></i></button>


								<div className="dropdown">
									<button className="btn btn-secondary dropdown-toggle" type="button" onClick={() => { this.setState({ Notification: !this.state.Notification }) }}>
										<i className="fa fa-bell" onClick={() => NotificationMes.length > 0 ? this.HideNotifi() : null}></i>
										{NotificationMes && NotificationMes.length > 0 ? <span className="count bg-danger">{NotificationMes && NotificationMes.length}</span> : null}

									</button>
									{this.state.Notification && this.props.notifi.length > 0 ?
										<div id="dropdown-menu">
											<div className="scroll"  >

												{ this.props.notifi && this.props.notifi.map((item, index) => {

													return (
														<div key={index} >



															<div className="row">
																<div className="col-md-12">
																	<div className="dropdown-item media">
																		
																			<div className="row">
																				<div className="col-md-3">
																					<span className="photo">
																						<img alt="avatar" className="user-avatar rounded-circle float-left" src={item.picture} /></span>

																				</div>
																				<div className="col-md-9">

																					<span className="message media-body">
																						<strong><span className="name">{item.name}</span></strong>
																						<span className="time pt-3" ><ReactTimeAgo date={item.date} locale="en-US" timeStyle="round-minute" /></span>
																					</span>
																				</div>




																			</div>
																		
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-md-12">
																	<div id="para">
																		<strong><p  > New Order from {item.name}</p></strong>
																	</div>
																</div>
															</div>

														</div>


													)

												})}
											</div>







										</div>
										: null}
								</div>


							</div>
						</div>

						<div className="col-sm-5 col-md-6">
							<div className="user-area dropdown float-right" >

								<div className="float-left">
									<img className="user-avatar rounded-circle float-left " style={{ cursor: 'pointer' }} onClick={() => this.setState({ dropdown: !this.state.dropdown, })} src={adminpc} alt="User Avatar" />


								</div>
								{this.state.dropdown ?
									<div className="user-menu ">
										{/* <Link className="nav-link" to="/"><i className="fa fa-users"></i> My Profile</Link>



										<Link className="nav-link" to="/"><i className="fa fa-cog"></i> Settings</Link> */}

										<span className="nav-link" onClick={()=> this.Logout()}><i className="fa fa-power-off"></i> Logout</span>
									</div>
									: null}
							</div>

							<div className="language-select dropdown" id="language-select">
								<Link className="dropdown-toggle" to="#" data-toggle="dropdown" id="language" aria-haspopup="true" aria-expanded="true">
									<i className="flag-icon flag-icon-us"></i>
								</Link>
								<div className="dropdown-menu" aria-labelledby="language">
									<div className="dropdown-item">
										<span className="flag-icon flag-icon-fr"></span>
									</div>
									<div className="dropdown-item">
										<i className="flag-icon flag-icon-es"></i>
									</div>
									<div className="dropdown-item">
										<i className="flag-icon flag-icon-us"></i>
									</div>
									<div className="dropdown-item">
										<i className="flag-icon flag-icon-it"></i>
									</div>
								</div>
							</div>

						</div>
					</div>

				</header>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({

	AuthUser: state.auth.User,
	notifi: state.Notification.Notifi,

})


export default connect(mapStateToProps, { logoutAdmin, getNotificInfo, Hide_Notification_Mes, Update_date })(Nav)