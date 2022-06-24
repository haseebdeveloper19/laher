import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import './hom.css'
import { Web_Visister_counter, GetVisister } from '../../../Redux/actions/UserAction'
import { GetEvent, } from '../../../Redux/actions/EventAction'
import { registerCart, Get_Cart, GetCartLocal, registerCartLocal } from '../../../Redux/actions/CartActon'
import { GetProduct, Get_Catagory_Data } from '../../../Redux/actions/ProductAction'
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from '../Loading';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: {},
			Cart: this.props.cart,
			array: 0,
			local: [],
			Single: [],
			children: [],
			useremail: "",
			catagory: "",
			active: true,
			loader: true,
			isShow: false,
			SendData: true,
			loadingdata: { loading: null },
			Product: this.props.productdata,
			errors: this.props.errors,
			count: { id: "fdsfdsfds", visiters: 1212 },
			count2: { id: "fdsfdsfds", visiters: 1212 },
			totalproduct: 4,
		}

	}

	componentDidMount() {

		this.props.GetProduct();
		this.props.Get_Cart()
		this.props.GetCartLocal();
		this.props.GetVisister();

		const interval = setInterval(this.handleNextSlide, 5000);
		this.interval = interval;

		setTimeout(() => {
			let value = {
				visit: Object.values(this.state.count).length > 0 ? parseInt(this.state.count.visiters, 10) : 1,
				date: Date.now(),
				id: Object.keys(this.state.count).length > 0 ? this.state.count._id : null
			}
			this.props.Web_Visister_counter(value)
		}, 1500);



	}


	componentWillUnmount() {
		if (this.interval != null) {
			clearInterval(this.interval);
		}
	}

	handleNextSlide = () => {
		const { slides } = this.props;
		const { activeSlide } = this.state;
		if (activeSlide === (slides && slides.length) - 1) {
			this.setState({
				activeSlide: 0
			});
		} else {
			this.setState({
				activeSlide: this.state.activeSlide + 1
			});
		}
	}



	Find = (data) => {

		let value = {
			Avaliable_Quantity: data.Avaliable_Quantity,
			Catagory: data.Catagory,
			ColorPrice: data.ColorPrice,
			Description: data.Description,
			ProductId: data.ProductId,
			ProductName: data.ProductName,
			Size: data.Size,
			Quantity: 1,
			SuccessMesg: data.SuccessMesg,
			User: data.User,
			date: Date.now(),
			loading: data.loading,
			media: data.media,
			product_price: data.product_price,
			real_price: data.real_price,
			total: data.total,
			_id: data._id,
		}

		this.props.registerCartLocal({ ...value })
		this.setState({ Single: data, isShow: true })
		setTimeout(() => {
			this.setState({ isShow: false })
		}, 3000)




	}


	// Filter = (cata) => {


	// 	this.setState({ catagory: cata })

	// 	if (cata === "All") {

	// 		this.props.GetProduct()
	// 	}
	// 	else

	// 		this.props.Get_Catagory_Data(cata)





	// }

	next = () => {
		this.slider.slickNext();
	}
	previous = () => {
		this.slider.slickPrev();
	}












	componentWillReceiveProps(NextProp) {
		if (NextProp.productdata) {
			this.setState({ Product: NextProp.productdata })
		}
		if (NextProp.localdata) {
			this.setState({ local: NextProp.localdata })
		}
		if (NextProp.errors) {
			this.setState({ error: NextProp.errors })
		}

		if (NextProp.countVisiter) {
			let data = Object.assign({}, ...NextProp.countVisiter)
			this.setState({ count: data })
		}

	}












	render() {

		var settings = {
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			autoplay: true,
			speed: 2000,

			pauseOnHover: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};




		return (
			<div id="home">
				<div className="container">

					<div className="summer-heading">
						<div className="row">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<h2><strong>SUMMER/WINTER</strong></h2>
								<p>
									UF Fabrics is a house of premium quality men's wear. offering a wide range of finest unstitched fabric. We aim to combine the best of modren class and tradition touch. We are manufacturing premium quality
									 fabrics with natural yarn which is hot in winter and cool in summer.
					</p>

								<Link to="/Product_Cata" className="discover">
									DISCOVER THE COLLECTION
					</Link>
							</div>
							<div className="col-md-2"></div>
						</div>

					</div>
				</div>
				<div className="info-banner">
					<p>Free Shipping Nationwide</p>
				</div>


				{/* <section className="container" style={{ paddingBottom: '20px' }}>
					<div className="summer-content">
						<fieldset style={{ borderTop: '2px solid #e8e8e1', padding: '15px' }}>
							<legend style={{ textAlign: 'center', width: '300px', margin: '0 auto', padding: ' 0 10px' }}>
								<h2 style={{ margin: '0px' }}>New Arrival </h2>
							</legend>
						</fieldset>


						<div className="container">
							<div className="row blog">
								<div className="col-md-12">
									<div className="container">
										<div style={{ textAlign: "center", marginBottom: '10px' }}>
											<button style={{ padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.previous}>
												<span className="carousel-control-prev-icon" aria-hidden="true" />
												<span className="sr-only"  >Previous</span>
											</button>
											<button style={{ marginLeft: '10px', padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.next}>
												<span className="carousel-control-next-icon" aria-hidden="true" />
												<span className="sr-only">Next</span>
											</button>
										</div>



										<Slider ref={c => (this.slider = c)} {...settings} >

											{
												this.props.productdata && this.props.productdata.length > 0 ? this.props.productdata.map((item, index) => {
													return (
														<div className="product-container" style={{ backgroundColor: '#fff' }} key={index}>
															<div className="thumb-wrappers">
																<div className="product-image">
																	<Link to={`/Single/${item._id}`} className="product-link">View</Link>
																	<img src={`https://www.uffabrics.com/uploads/${item.media}`} alt="Lorem Ipsum" style={{ width: '100%', height: '100%' }} />
																</div>
																<div className="thumb-content">
																	<p> Catagory : {item.Catagory}</p>

																	<h4>{item.ProductName}</h4>
																	<p className="item-price">
																		<strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}>Rs {item.product_price}-/ </strike> {item.real_price === 'undefined' ? null : <span> Rs {item.real_price}-/ </span>}</p>
																	<button className="btn btn-primary" onClick={() => this.Find(item)}>Add to Cart</button>
																</div>
															</div>
														</div>
													)
												})
													: <Loading/>
											}
										</Slider>







									</div>


								</div>
							</div>
						</div>
					</div>
				</section>



				<div className="row blog">
					<div className="col-md-12">
						<div className="container">
							<section >
								<div className="subcat-head">
									<fieldset style={{ borderTop: '2px solid #e8e8e1', padding: '15px' }}>
										<legend style={{ textAlign: 'center', width: '300px', margin: '0 auto', padding: ' 0 10px' }}>
											<h2 style={{ margin: '0px' }}>Collections </h2>
										</legend>
									</fieldset>
								</div>

								<div className="collection">
									<div className="row">
										<div className="col-md-6 col-lg-6 col-sm-6">
											<Link to="/Product_Cata/Summer">
												<div className="summer-data" >
													<h2>Summer Collection</h2>
												</div>
											</Link>
										</div>
										<div className="col-md-6 col-lg-6 col-sm-6" >
											<Link to="/Product_Cata/Winter">
												<div className="winter">
													<h2>Winter Collection</h2>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div> */}
				<section className="container">
					{this.state.isShow ?
						<div className="succes-message">

							<h2>Product are added to your basket</h2>
							<Link to="/cart" className="btn btn-info"><i className="fa fa-shopping-basket"></i> Go to Cart</Link>

						</div>
						: false}

				</section>
			</div >

		)
	}
}

const mapStateToProps = (state) => ({

	productdata: state.Product.Products,
	OtherProduct: state.Product.visibleProducts,
	loading: state.Cart.loading,
	localdata: state.Cart.localD,
	cart: state.Cart.AddCart,
	errors: state.errors,
	countVisiter: state.auth.Webcount,


})


export default connect(mapStateToProps,
	{
		GetProduct,
		Get_Catagory_Data,
		GetCartLocal,
		GetEvent,
		GetVisister,
		Web_Visister_counter,
		registerCart,
		registerCartLocal,
		Get_Cart,
	})(Home)