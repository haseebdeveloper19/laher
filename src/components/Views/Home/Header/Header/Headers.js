import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GetCartLocal } from '../../../../../Redux/actions/CartActon'
import { logoutUser, updateDate } from '../../../../../Redux/actions/UserAction'
import { connect } from "react-redux";
import Sidebar from "react-sidebar";
import '../sidebar/sidebar.css'
import './header.css'
class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: this.props.localdata,
            cartData: [],
            count: 0,
            sidebarOpen: false
        }
    }




    componentDidMount() {
        this.props.GetCartLocal();
        // let url = window.location

    }
    componentDidUpdate(PreState) {

        if (PreState.sidebarOpen !== this.state.sidebarOpen) {
            if (this.state.sidebarOpen === true) {
                document.body.style.overflowY = 'hidden'
                
            }
            else
                document.body.style.overflowY = "scroll"
        }
        else
           return  null

    }
    componentWillReceiveProps(nextprops) {
        if (nextprops.localdata) {
            this.setState({ array: nextprops.localdata })
        }
    }


    Logout = () => {
        this.props.logoutUser(this.props.history)
        let value = {
            date: Date.now(),
            id: this.props.email,

        }
        this.props.updateDate(value)
    }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });



    }

    render() {

        let bardata = (
            <div className="sidebar">
                <ul>
                    <li className="lists"><Link to="/">HOME</Link></li>
                    <li className="lists"><Link to="/Product_Cata/NewArrival">NEW ARRIVAL</Link> </li>

                    <div  id="accordionExample">
                        <div>
                            <div className="card-heading ">
                                <li data-toggle="collapse" data-target="#collapseOne">
                                    SUMMER
                                    <i data-toggle="collapse" data-target="#collapseOne" className="fa fa-arrow-down float-right"></i>
                                </li>
                            </div>
                            <div id="collapseOne" className="collapse " data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul className="dropdown">


                                        <li className="lists"><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
                                        <li className="lists"><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
                                        <li className="lists"><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
                                        <li className="lists"><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExampleTwo">
                        <div className="">
                            <div className="card-heading ">
                                <li data-toggle="collapse" data-target="#collapseTwo">
                                   WINTER
                                    <i data-toggle="collapse" data-target="#collapseTwo" className="fa fa-arrow-down float-right"></i>
                                </li>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordionExampleTwo">
                                <div className="card-body">
                                    <ul className="dropdown">
                                        <li><Link to="/Product_Cata/Winter_Khaddi" className="links_data" >Winter Khaddi</Link></li>
                                        <li><Link to="/Product_Cata/Winter_Goli" className="links_data" >Winter Goli</Link></li>
                                        <li><Link to="/Product_Cata/Winter_Handmade" className="links_data" >Handmade Series</Link></li>
                                        <li><Link to="/Product_Cata/Winter_designer" className="links_data" >Designer Plus</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <li><Link to="/AboutUs" >ABOUT US</Link> </li>
                    <li><Link to="/ContactUs" >CONTECT US</Link></li>
                </ul>
            </div>
        )


        let totalItem = this.props.localdata ? this.props.localdata.reduce((total, product) => total + product.Quantity, 0) : null
      
             
        return (
            <div >




                <header className="header" style={{ backgroundColor: 'transparent' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2">


                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-xl-6 col-lg-7">

                                <nav className="header__menu"  >
                                    <ul>
                                        <li  className="active list"><Link to="/">Home</Link></li>
                                        <li className="list"><Link to="/Product_Cata/NewArrival">NEW ARRIVAL</Link> </li>
                                        <li className="list">SUMMER
                                            <ul className="dropdown summer">
                                                <li className="list"><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
                                            </ul>
                                        </li>
                                        <li className="list"> WINTER
                                            <ul className="dropdown winter">
                                                <li className="list"><Link to="/Product_Cata/Winter_Khaddi" className="links_data" >Winter Khaddi</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Winter_Goli" className="links_data" >Winter Goli</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Winter_Handmade" className="links_data" >Handmade Series</Link></li>
                                                <li className="list"><Link to="/Product_Cata/Winter_designer" className="links_data" >Designer Plus</Link></li>
                                            </ul>


                                        </li>
                                        <li className="list"><Link to="/AboutUs">About Us</Link></li>
                                        <li className="list"><Link to="/ContactUs">Contact Us </Link></li>
                                    </ul>
                                </nav>
                                {/* <div className="comp_name">
                                    <h2 style={{color:"white"}}>UF Fabrics</h2>

                                </div> */}

                                <div className="top-slick" >
                                <marquee direction="left" className="marqee" >
                                Free Shipping NationWide
                                
                                </marquee>
                                </div>
                            </div>




                            <div className="col-lg-3">
                                <div className="header__right">
                                    <ul className="header__right__widget">

                                        <li>
                                            <div id="ex4">
                                                <Link to="/cart">
                                                    <span className="p1 fa-stack fa-2x has-badge " data-count={totalItem}>
                                                    <i className="fa fa-shopping-bag text-light"></i>
                                                    </span>
                                                </Link>
                                            </div>


                                            

                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="canvas" style={{height:'600px' , zIndex:20000 }}>
                            <Sidebar
                                sidebar={bardata}
                                open={this.state.sidebarOpen}
                                onSetOpen={this.onSetSidebarOpen}
                                styles={{ sidebar: { background: "white", zIndex:20000} }}>
                                <div className="canvas__open" style={{zIndex:20000}} onClick={() => this.onSetSidebarOpen(true)}>
                                    <i className="fa fa-bars " ></i>
                                    <div className="shoping-cart">

                                        <Link to="/cart">
                                           {totalItem ? <span className="p1 fa-stack fa-2x has-badge "  data-count={totalItem}>{totalItem}</span> : null }
                                               <span> <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" style={{ color: '#fff'  }} data-count="4b" />
                                            </span>

                                            {/* {this.props.localdata ? <div className=" has-badge" >{totalItem}</div> : null}
                                        <span className="icon_heart_alt"><i className=" fa fa-shopping-cart fa-stack-1x xfa-inverse" style={{ fontSize: '20px', color: '#fff' }}></i></span> */}
                                        </Link>

                                    </div>

                                </div>
                            </Sidebar>
                        </div>



                    </div>
                </header>

                {/* <div className="" style={{border:'1pt solid yellow'}}><SideBar/> </div> */}




            </div>



        )
    }
}




const mapStateToProps = (state) => ({


    localdata: state.Cart.localD,
    email: state.auth.User.id



})


export default connect(mapStateToProps, { GetCartLocal, logoutUser, updateDate })(Headers)