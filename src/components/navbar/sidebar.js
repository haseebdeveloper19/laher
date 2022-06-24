import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from './images/logo.png'
class Sidebar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-sm   navbar-default">

                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" ></i>
                        </button>
                        <Link className="navbar-brand" to="/Admin_Dashboard">UF FABRICS</Link>
                    </div>

                    <div id="main-menu" className="main-menu collapse navbar-collapse" >
                        <ul className="nav navbar-nav" style={{ paddingTop: '20px' }}>
                            <li className="active">
                                <Link to="/Admin_Dashboard"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </Link>
                            </li>
                            <h3 className="menu-title">Products</h3>
                            <li className="menu-item-has-children dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-laptop"></i>Components</Link>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-book"></i><Link to="/Add_Product">Add Product</Link></li>
                                    <li><i className="fa fa-eye"></i><Link to="/Products/View_Product">View Products</Link></li>

                                </ul>
                            </li>


                            <h3 className="menu-title">Orders</h3>

                            <li className="menu-item-has-children dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-shopping-bag"></i>Orders</Link>
                                <ul className="sub-menu children dropdown-menu">
                                <li><i className="menu-icon fa fa-shopping-bag"></i><Link to="/OrderList">Order List</Link></li>
                                    <li><i className="menu-icon fa fa-shopping-bag"></i><Link to="/YearBase">Order by Year </Link></li>
                                   
                                </ul>
                            </li>

                            <h3 className="menu-title">Emails</h3>

                            <li className="menu-item-has-children dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Email</Link>
                                <ul className="sub-menu children dropdown-menu">
                                <li><i className="menu-icon fa fa-envlope"></i><Link to="/EmailList">Email</Link></li>
                                   
                                </ul>
                            </li>



                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar