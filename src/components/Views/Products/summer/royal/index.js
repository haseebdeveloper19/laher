import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
// import {  Price_Range, Get_Sort_Price } from '../../../../../Redux/actions/ProductAction'
import { registerCartLocal } from '../../../../../Redux/actions/CartActon'
import Pagination from 'react-js-pagination'
// import Loading from '../../../Loading';
import './style.css'
class Sroyal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.productdata,
            FindCata: [],
            activePage: 1,
            todosPerPage: 9,
            Size: "",
            min: "",
            max: "",
            priceRang: "",
            loader: false,
            filter: false,
            priceSlect: false,
            priceSlect2: false,
            priceSlect3: false,
            sidebarOpen: false

        }
    }




    componentWillReceiveProps(nextprops) {
        if (nextprops.productdata) {
            this.setState({ todos: nextprops.productdata })
        }
    }

    handlePageChange(pageNumber) {

        this.setState({ activePage: pageNumber });
    }

    hendleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }




    SendForm = (data) => {

        let value = {
            Avaliable_Quantity: data.Avaliable_Quantity,
            Catagory: data.Catagory,
            ColorPrice: data.ColorPrice,
            Description: data.Description,
            ProductId: data.ProductId,
            ProductName: data.ProductName,
            Size: data.Size,
            Quantity: data.Quantity,
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
        this.setState({ isShow: true })

        setTimeout(() => {
            this.setState({ isShow: false })
        }, 3000)
    }









    render() {
        const { activePage, todosPerPage } = this.state
        let indexOfLastTodo = activePage * todosPerPage;

        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;


        let currentTodos = this.state.todos.slice(indexOfFirstTodo, indexOfLastTodo);


        return (
            <div style={{ backgroundColor: '#fff' }}>

                <div className="breadcrumb-option pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                    <span>Shop</span>
                                </div>






                            </div>
                        </div>



                    </div>
                </div>

                <section className="shop spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12" id="side-cata">
                                <div className="shop__sidebar">
                                    <div className="sidebar__categories">
                                        <div className="section-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="categories__accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-heading active">
                                                        <Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link>


                                                    </div>

                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">

                                                        <Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link>

                                                    </div>

                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link>

                                                    </div>

                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12" >
                                <div className="message">
                                    {this.state.isShow ? <div className="alert alert-success">Product are added to your cart </div> : null}
                                </div>
                                <div className="row ">
                                    {currentTodos && currentTodos.length ?

                                        currentTodos.map((item, index) => {
                                            return (
                                                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 mb-5" key={index} id="main-center" >
                                                    <div className="thumb-wrapper">
                                                        {/* <span className="wish-icon float-right"><i className="fa fa-heart-o" /></span> */}
                                                        <div className="product-image">
                                                            <Link to={`/Single/${item._id}`} className="product-link" style={{ border: '1pt solid yellow' }}>View</Link>
                                                            <img className="img-responsive" src={`http://localhost:8000/uploads/${item.media}`} alt="deginer" />
                                                        </div>
                                                        <div className="thumb-content">
                                                            <p> Catagory : {item.Catagory}</p>

                                                            <h4>{item.ProductName}</h4>
                                                            <p className="item-price">
                                                                <strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}>Rs{item.product_price}</strike> {item.real_price === 'undefined' ? null : <span>Rs{item.real_price}</span>}</p>
                                                            <button className="btn btn-primary">Add to Cart</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })

                                        : 
                                        <div> <h2>Sorry Product are not Avaliable</h2> </div>
                                       

                                    }


                                    {currentTodos && currentTodos.length ?
                                        <div className="col-lg-12" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <div className="pagination__option">
                                                <Pagination
                                                    itemClass="page-item"
                                                    linkClass="page-link"
                                                    activePage={this.state.activePage}
                                                    itemsCountPerPage={9}
                                                    totalItemsCount={this.state.todos.length}
                                                    pageRangeDisplayed={5}
                                                    onChange={this.handlePageChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                        : null}
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    productdata: state.Product.Products.filter((item) => { return item.Size === 'Royal Organza' }),
   



})


export default connect(mapStateToProps, { registerCartLocal })(Sroyal)