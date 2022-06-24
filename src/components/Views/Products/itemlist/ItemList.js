import React,{Component } from 'react'
import Pagination from 'react-js-pagination'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import Loading from '../../Loading';

import { registerCartLocal } from '../../../../Redux/actions/CartActon'

class ItemList extends Component {
    state = {
        isShow: false,
        activePage: 1,
        todosPerPage: 9,
    }


    componentWillReceiveProps(nextprops) {
        if (nextprops.productdata) {
            this.setState({ All: nextprops.productdata })
        }
    }

    handlePageChange(pageNumber) {

        this.setState({ activePage: pageNumber });
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
        this.setState({ isShow : true})

        setTimeout(()=>{
            this.setState({ isShow : false})
        },3000)
      }



    render() {

        const { activePage, todosPerPage } = this.state
        let indexOfLastTodo = activePage * todosPerPage;

        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;


        let currentTodos = this.props.productdata.slice(indexOfFirstTodo, indexOfLastTodo);

        return (
            <div>
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
                                            <img className="img-responsive" src={`http://localhost:8000/uploads/${item.media}`} alt="All" />
                                        </div>
                                        <div className="thumb-content">
                                            <p> Catagory : {item.Catagory}</p>

                                            <h4>{item.ProductName}</h4>
                                            <p className="item-price">
                                                <strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}>Rs{item.product_price}</strike> {item.real_price === 'undefined' ? null : <span>Rs{item.real_price}</span>}</p>
                                            <button className="btn btn-primary" onClick={() => this.SendForm(item)}>Add to Cart</button>
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
                                    totalItemsCount={this.props.productdata.length}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange.bind(this)}
                                />
                            </div>
                        </div>
                        : null}
                </div>



            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    productdata: state.Product.Products,



})

export default connect(mapStateToProps,{  registerCartLocal})  (ItemList)