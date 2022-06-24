import React, { Component } from "react";
// import Slider from "react-slick";
import './style.css'
import { Link } from 'react-router-dom'
import { GetProduct, } from '../../../../Redux/actions/ProductAction'
import { registerCartLocal, } from '../../../../Redux/actions/CartActon'
import { connect } from "react-redux";
import Loading from "../../Loading";
import Pagination from 'react-js-pagination'


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      Single: [],
      todos: this.props.productdata,
      activePage: 1,
      todosPerPage: 12,
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


  // next = () => {
  //   this.slider.slickNext();
  // }
  // previous = () => {
  //   this.slider.slickPrev();
  // }



  render() {

    // var settings = {
    //   speed: 500,
		// 	infinite: false,

    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 4,
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };

    const { activePage, todosPerPage } = this.state
        let indexOfLastTodo = activePage * todosPerPage;

        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;


        let currentTodos = this.state.todos.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
      <div>
        <div className="container">
        
        
          <div className="row ">
                                    {currentTodos && currentTodos.length > 0 ?
                                     currentTodos.map((item, index) => {
                                            return (
                                                <div className="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-5" key={index} id="main-center" >
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
                                                            <button className="btn btn-primary" onClick={() => this.Find(item)}>Add to Cart</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })

                                       
                                        : <div className={{textAlign:'center'}}> <Loading/> </div> 
                                            

                                    }


                                    {currentTodos && currentTodos.length ?
                                        <div className="col-lg-12" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <div className="pagination__option">
                                                <Pagination
                                                    itemClass="page-item"
                                                    linkClass="page-link"
                                                    activePage={this.state.activePage}
                                                    itemsCountPerPage={12}
                                                    totalItemsCount={this.state.todos.length}
                                                    pageRangeDisplayed={5}
                                                    onChange={this.handlePageChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                        : null}
                                </div>

          {/* <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.productdata && this.props.productdata.length > 0 ? this.props.productdata.map((item, index) => {
              return (
                <div className="product-container" style={{ backgroundColor: '#fff' }} key={index}>
                  <div className="thumb-wrappers">
                    <div className="product-image">
                      <Link to={`/Single/${item._id}`} className="product-link">View</Link>
                      <img  src={`https://www.uffabrics.com/uploads/${item.media}`} alt="Lorem Ipsum" style={{width:'100%' , height:'100%'}} />
                    </div>
                    <div className="thumb-content">
                      <p> Catagory : {item.Catagory}</p>

                      <h4>{item.ProductName}</h4>
                      <p className="item-price">
                        <strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}> Rs {item.product_price}-/ </strike> {item.real_price === 'undefined' ? null : <span> Rs {item.real_price}-/ </span>}</p>
                      <button className="btn btn-primary" onClick={() => this.Find(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              )
            })
              : <Loading/>
            }
          </Slider> */}

        </div>
        <section className="container">
          {this.state.isShow ?
            <div className="succes-message">

              <h2>Product are added to your basket</h2>
              <Link to="/cart" className="btn btn-info"><i className="fa fa-shopping-basket"></i> Go to Cart</Link>

            </div>
            : false}

        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  productdata: state.Product.Products,
})

export default connect(mapStateToProps, { GetProduct, registerCartLocal })(Carousel)