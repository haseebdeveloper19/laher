import React, { Component } from 'react'
import { Link , NavLink } from 'react-router-dom'
import { GetCartLocal } from '../../../../../Redux/actions/CartActon'
import { logoutUser, updateDate } from '../../../../../Redux/actions/UserAction'
import { connect } from "react-redux";
import Sidebar from "react-sidebar";
import '../sidebar/sidebar.css'
import './header.css'
class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: this.props.localdata,
            cartData: [],
            count: 0,
            sidebarOpen: false,
            urlpath: ""
        }
    }

    componentDidMount() {
                this.props.GetCartLocal()
                
    
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

    activeClass = (route) => { return window.location.pathname === route ? "active" : null }


    render() {


        let bardata = (
            <div className="sidebar">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/Product_Cata/NewArrival">NEW ARRIVAL</Link> </li>

                    <div  id="accordionExample">
                        <div className="">
                            <div className="card-heading ">
                                <li data-toggle="collapse" data-target="#collapseOne">
                                    <Link to="/" data-toggle="collapse" data-target="#collapseOne">SUMMER</Link>
                                    <i data-toggle="collapse" data-target="#collapseOne" className="fa fa-arrow-down float-right"></i>
                                </li>
                            </div>
                            <div id="collapseOne" className="collapse " data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul className="dropdown">
                                        <li><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
                                        <li><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
                                        <li><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
                                        <li><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  id="accordionExampleTwo">
                        <div className="">
                            <div className="card-heading ">
                                <li data-toggle="collapse" data-target="#collapseTwo">
                                    <Link to="/" data-toggle="collapse" data-target="#collapseOne">WINTER</Link>

                                    <i data-toggle="collapse" data-target="#collapseTwo" className="fa fa-arrow-down float-right"></i>
                                </li>
                            </div>
                            <div id="collapseTwo" className="collapse " data-parent="#accordionExampleTwo">
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

                    <li><Link to="/AboutUs">ABOUT US</Link> </li>
                    <li><Link to="/ContactUs">CONTECT US</Link></li>
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


                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-xl-6 col-lg-7">

                                <nav className="header__menu"  >
                                    <ul>
                                        <li ><NavLink to="/">Home</NavLink></li>
                                        <li ><NavLink  to="/Product_Cata/NewArrival" activeClassName="active-class">NEW ARRIVAL</NavLink> </li>
                                        <li >SUMMER
                                            <ul className="dropdown summer">
                                            

                                                <li><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
                                                <li><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
                                                <li><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
                                                <li><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
                                            </ul>
                                        </li>
                                        <li  > WINTER
                                            <ul className="dropdown winter">
                                                <li><Link to="/Product_Cata/Winter_Khaddi" className="links_data" >Winter Khaddi</Link></li>
                                                <li><Link to="/Product_Cata/Winter_Goli" className="links_data" >Winter Goli</Link></li>
                                                <li><Link to="/Product_Cata/Winter_Handmade" className="links_data" >Handmade Series</Link></li>
                                                <li><Link to="/Product_Cata/Winter_designer" className="links_data" >Designer Plus</Link></li>
                                            </ul>


                                        </li>
                                        <li ><NavLink exact to="/AboutUs" activeClassName="active-class">About Us</NavLink></li>
                                        <li ><NavLink exact to="/ContactUs" activeClassName="active-class"  >Contact Us </NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__right">
                                    <ul className="header__right__widget">
                                        <li><span className="icon_search search-switch"></span></li>
                                        <li>
                                            <Link to="/cart"><span className="icon_heart_alt"><i className="fa fa-shopping-cart" style={{ fontSize: '20px', color: '#fff' }}></i></span>
                                                {this.props.localdata ? <div className="tip" >{totalItem}</div> : null}
                                            </Link>


                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="canvas">
                            <Sidebar
                                sidebar={bardata}
                                open={this.state.sidebarOpen}
                                onSetOpen={this.onSetSidebarOpen}
                                styles={{ sidebar: { background: "white", height: '100%' } }}>
                               
                               <div id="compnay__name">
                               <h3>UF FABRICS</h3>
                               </div>
                               
                                <div className="canvas__open" id="open" onClick={() => this.onSetSidebarOpen(true)}>
                                    <i className="fa fa-bars " ></i>
                                    <div className="shoping-cart">

                                        <Link to="/cart">
                                            {totalItem ? <span className="p1 fa-stack fa-2x has-badge "  data-count={totalItem}>{totalItem} </span> : null }
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




const mapStateToProps = (state) => {
    var url = window.location.pathname
    var lastItem = url.substr(url.lastIndexOf('/') + 1)
    return ({
        lastItem: lastItem,
        localdata: state.Cart.localD,
        email: state.auth.User.id,
    })

}


export default connect(mapStateToProps, { GetCartLocal, logoutUser, updateDate })(NavHeader)