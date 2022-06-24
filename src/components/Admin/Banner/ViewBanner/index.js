import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Delete_Banner, Get_Banner } from '../../../../Redux/actions/sliderAction'
class ViewBanner extends Component {
    constructor(props) {
        super();
        this.state = {
            IsShowmodel: true,
            slider: {},
        }
    }

    componentDidMount() {
        this.props.Get_Banner()
    }

    Delete = (id) => {
        this.props.Delete_Banner(id)
    }

    render() {
        return (
            <div>

                <aside id="left-panel" class="left-panel">

                    <Sidebar />
                </aside>


                <div id="right-panel" className="right-panel" >

                    <Nav />

                    <div className="breadcrumb-option">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__links">
                                        <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                        <Link to="/AddBanner"><i className="fa fa-book"></i> New Banner</Link>
                                        <span>All Created Products</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="shop-cart spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="shop__cart__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Banner</th>
                                                    <th>Tittle</th>
                                                    <th>Description</th>
                                                    <th></th>
                                                    <th></th>
                                                    <th >Action</th>
                                                    {/* <th>Delete</th> */}

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.sliderdata.map((prod, index) => {

                                                        return (
                                                            <tr key={index}>


                                                                <td className="cart__product__item">
                                                                    <img src={`http://localhost:5000/uploads/${prod.picture[0]}`} alt="pic" style={{ width: '80px', height: '80px' }} />
                                                                    <img src={`http://localhost:5000/uploads/${prod.picture[1]}`} alt="pic" style={{ width: '80px', height: '80px' }} />
                                                                    <img src={`http://localhost:5000/uploads/${prod.picture[2]}`} alt="pic" style={{ width: '80px', height: '80px' }} />
                                                                    <img src={`http://localhost:5000/uploads/${prod.picture[3]}`} alt="pic" style={{ width: '80px', height: '80px' }} />
                                                                    <div className="cart__product__item__title">

                                                                        <div className="rating">
                                                                            {/* <p>ID : {prod.ProductId}</p> */}
                                                                        </div>
                                                                    </div>



                                                                </td>
                                                                <td className="cart__price">
                                                                    <ul>
                                                                        <li>
                                                                            {prod.title1}

                                                                        </li>
                                                                        <li>

                                                                            {prod.title2}
                                                                        </li>
                                                                        <li>
                                                                            {prod.title3}

                                                                        </li>
                                                                        <li>
                                                                            {prod.title4}

                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="cart__quantity">
                                                                    <div className="pro-qty mt-4">
                                                                        <ul>
                                                                            <li>
                                                                                {prod.desc1}

                                                                            </li>
                                                                            <li>

                                                                                {prod.desc2}
                                                                            </li>
                                                                            <li>
                                                                                {prod.desc3}

                                                                            </li>
                                                                            <li>
                                                                                {prod.desc4}

                                                                            </li>
                                                                        </ul>


                                                                    </div>
                                                                </td>
                                                                {/* <td className="cart__total">{prod.Avaliable_Quantity}</td>
                                    <td className="cart__total">{prod.Size}</td> */}
                                                                {/* <td className="cart__close"> <Link to={`/Add_Product/${prod._id}`}><span className="fa fa-edit" ></span></Link></td> */}
                                                                <td className="cart__close"><span className="fa fa-close" onClick={() => this.setState({ slider: prod })} data-toggle="modal" data-target="#staticModal"></span></td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                            {this.state.IsShowmodel ?


                                <div className="modal fade" id="staticModal" tabindex="-1" role="dialog" aria-labelledby="staticModalLabel" aria-hidden="true" data-backdrop="static">
                                    <div className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticModalLabel">Static Modal</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p className="text-center">
                                                    Are Sure
                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary">Cancel</button>
                                                <button onClick={() => { this.Delete(this.state.slider._id) }} className="btn btn-primary" data-dismiss="modal">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}


                        </div>
                    </section>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    sliderdata: state.Slider.Sliders,
    // woman: state.Product.Products.filter(item => item.product_categorie == "Woman's")

})


export default connect(mapStateToProps, { Get_Banner, Delete_Banner })(ViewBanner)