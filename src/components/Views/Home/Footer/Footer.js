import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from './logook.jpg'

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer" >
					<div className="container">
						<div className="row" >
							<div className="col-lg-2 col-md-3 col-12">
								<div className="footer__about">
									<div className="footer__logo">
										<Link to="/"><img src={logo} id="logo_img" alt="logo_image" /></Link>
									</div>


								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-6" >
								<div className="footer__widget">
									<h6 style={{ color: '#ffff' }}>Quick links</h6>
									<ul>
										<li><Link to="#">Home</Link></li>
										<li><Link to="#">About Us</Link></li>
										<li><Link to="#">Contact Us</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-4">
								<div className="footer__widget">
									<h6 style={{ color: '#ffff' }}>SUMMER</h6>
									<ul>
										
												<li><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
												<li><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
												<li><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
												<li><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
											

									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-4">
								<div className="footer__widget">
									<h6 style={{ color: '#ffff' }}>WINTER</h6>
									<ul>

										
												<li><Link to="/Product_Cata/Winter_Khaddi" className="links_data" >Winter Khaddi</Link></li>
												<li><Link to="/Product_Cata/Winter_Goli" className="links_data" >Winter Goli</Link></li>
												<li><Link to="/Product_Cata/Winter_Handmade" className="links_data" >Handmade Series</Link></li>
												<li><Link to="/Product_Cata/Winter_designer" className="links_data" >Designer Plus</Link></li>
										

									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-3 col-sm-8">
								<div className="footer__newslatter">
									<h6 style={{ color: '#ffff' }}>NEWSLETTER</h6>
									{/* <form action="#">
										<input type="text" placeholder="Email" />
										<button type="submit" className="site-btn">Subscribe</button>
									</form> */}
									<div className="footer__social">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-instagram"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="footer__copyright__text">
									Copyright &copy; <p>{new Date().getFullYear()} All Rights Reserved  <a href="https://github.com/laherasif" target="_blank"  rel="noopener noreferrer">Laher Asif</a></p>
								</div>
							</div>
						</div>
					</div>
				</footer>


			</div>
		)
	}
}
export default Footer