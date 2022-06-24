import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import ReactImageZoom from 'react-image-zoom';
import './style.css'
import { registerCartLocal } from '../../../../Redux/actions/CartActon'
import { GetProduct } from '../../../../Redux/actions/ProductAction'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SingleProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      desc: '',
      Single: {},
      Info: {},
      Next: {}
    }
  }


  componentDidMount() {
    this.props.GetProduct()


  }

  Onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillReceiveProps(Nextprops) {
    if (Nextprops.data) {
      this.setState({ Single: Nextprops.data })
    }
  }



  Increse = () => {
    this.setState(prevState => ({
      Single: {                   // object that we want to update
        ...prevState.Single,    // keep all other key-value pairs
        Quantity: this.state.Single.Quantity + 1     // update the value of specific key
      },

    }))
  }



  Decrese = () => {
    this.setState(prevState => ({
      Single: {                   // object that we want to update
        ...prevState.Single,    // keep all other key-value pairs
        Quantity: this.state.Single.Quantity - 1     // update the value of specific key
      }
    }))
  }


  onsubmit = (data) => {


    this.setState({ Info: data })


    let value = {
      Avaliable_Quantity: data.Avaliable_Quantity,
      Catagory: data.Catagory,
      ColorPrice: data.ColorPrice,
      Description: data.Description,
      ProductId: data.ProductId,
      ProductName: data.ProductName,
      Size: data.Size,
      Quantity: this.state.Single.Quantity,
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
  }



  NextView = (data) => {
    let Nextprops = this.props.productdata.find(item => { return item._id === data._id })
    this.setState({ Next: Nextprops, Single: "" })
  }



  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }



  render() {
    console.log("state", this.state)
    // const props = { width: 500, height: 400, zoomWidth: 50, zoomHight: 20 ,  img:`http://localhost:8000/uploads/${this.state.Single.media}` , zoomStyle: 'opacity: 1 ; z-index:1000' };
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
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: false,
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


    console.log("next" , this.state);
    

    return (
      <div style={{ backgroundColor: 'white' }}>
        <div className="breadcrumb-option pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__links">
                  <Link to="/"><i className="fa fa-home"></i> Home</Link>
                  <Link to="">Shop </Link>
                  <span>{Object.keys(this.state.Next).length > 0 ? this.state.Next.Catagory : this.state.Single.Catagory} Collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="succes-info">
          <div className="container">
            <div className="col-md-12">
              {this.state.Info.ProductId ?
                <div className="alert alert-success">
                  <i className="fa fa-check"></i>

                  <span style={{ color: 'white' }}> {this.state.Info.ProductId} </span>   are Added in Basket
            </div>
                : null}
            </div>
          </div>
        </div>


        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">


                <img src={`http://localhost:8000/uploads/${Object.keys(this.state.Next).length > 0 ? this.state.Next.media : this.state.Single.media}`} alt="product_image" style={{ width: '100%', height: '100%' }} />

                {/* <ReactImageZoom {...props} /> */}




              </div>

              <div className="col-lg-6 ">

                <div className="product__details__text">
                  {/* <h3>{this.state.Single.ProductName} <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3> */}

                  {
                    this.state.Single.real_price  === 'undefined' ?

                    <div className="product__details__price">
                      Rs {Object.keys(this.state.Next).length > 0 ? this.state.Next.product_price : this.state.Single.product_price}/-
                  </div>
                    :
                    this.state.Next.real_price  === 'undefined' ?
                    <div className="product__details__price">
                      Rs {Object.keys(this.state.Next).length > 0 ? this.state.Next.product_price : this.state.Single.product_price}/-
                  </div>
                  :
                    <div className="product__details__price">

                      <span> Rs {Object.keys(this.state.Next).length > 0 ? this.state.Next.product_price : this.state.Single.product_price}/-</span>
                      Rs {Object.keys(this.state.Next).length > 0 ? this.state.Next.real_price : this.state.Single.real_price}/-
                   </div>
                  }
                  <div className="collection-name">
                    <strong>Collection </strong>: <span style={{ fontStyle: 'italic' }}>{Object.keys(this.state.Next).length > 0 ? this.state.Next.Catagory : this.state.Single.Catagory} Collection</span>
                    {/* Collection : <span>Summer Collection</span> */}
                  </div>
                  <div className="product__details__button pt-4">
                    <div className="quantity buttons_added" style={{ display: 'flex' }}>
                      <div className="value-button" id="decrease" onClick={() => this.Decrese()} >-</div>
                      <input type="number" id="number" value={this.state.Single.Quantity} />
                      <div className="value-button" id="increase" onClick={() => this.Increse()} >+</div>

                    </div>
                    <button className="cart-btn" style={{ cursor: 'pointer' }} onClick={() => this.onsubmit(this.state.Single)}><span ><i className="fa fa-shopping-cart"></i></span> Add to cart</button>

                  </div>

                  {/* <div className="product__details__button">

                    <div className="add" >
                      <button className="cart-btn" style={{cursor:'pointer'}} onClick={() => this.onsubmit(this.state.Single)}><span ><i className="fa fa-shopping-cart"></i></span> Add to cart</button>
                     

                    </div>
                  </div> */}
                  <div >
                    <strong>Disclaimer:</strong>  Due to the photographic spark & different screen adjustments, the colors of the genuine product may slightly vary from the product images.
                      <hr />
                    SKU: <strong>BR-{Object.keys(this.state.Next).length > 0 ? this.state.Next.ProductId : this.state.Single.ProductId}</strong>
                    <hr />
                    Category: <strong>{Object.keys(this.state.Next).length > 0 ? this.state.Next.Size : this.state.Single.Size}</strong>
                    <hr />
                    Tag : <strong>{Object.keys(this.state.Next).length > 0 ? this.state.Next.Size : this.state.Single.Size}</strong>
                  </div>
                  <hr />
                  <div className="desc">
                    <h4>DESCRIPTION</h4>
                    <p>{Object.keys(this.state.Next).length > 0 ? this.state.Next.Description : this.state.Single.Description}</p>
                  </div>


                </div>
              </div>



            </div>
          </div >
        </section >
        <section>
          <div className="container">
            <div className="row" style={{ marginBottom: '50px' }}>
              <div className="col-lg-12">
                <div className="related__title">
                  <h5>RELATED PRODUCTS</h5>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button style={{ padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.previous}>
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only"  >Previous</span>
                  </button>
                  <button style={{ marginLeft: '10px', padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.next}>
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
                <Slider {...settings} ref={c => (this.slider = c)}>
                  {this.props.productdata.map((item, index) => {
                    if (item.Catagory === this.state.Single.Catagory && item._id !== this.state.Single._id) {
                      return (
                        <div className="product-container" style={{ backgroundColor: '#fff' }} key={index}>
                          <div className="thumb-wrappers">
                            <div className="product-image">
                              <Link to={`/Single/${item._id}`} onClick={() => this.NextView(item)} className="product-link">View</Link>
                              <img className="img-responsive" src={`http://localhost:8000/uploads/${item.media}`} alt="single" />
                            </div>
                            <div className="thumb-content">
                              <p style={{ fontSize: '14px' }}>{item.Catagory} Collection </p>
                              <h4 style={{ marginTop: '-20px' }}>{item.ProductName}</h4>
                              <p className="item-price">
                                <strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}>Rs{item.product_price}</strike> {item.real_price === 'undefined' ? null : <span>Rs{item.real_price}</span>}</p>
                              <button className="btn btn-primary" onClick={() => this.onsubmit(item)}>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    else {
                      return null
                    }
                  })
                  }
                </Slider>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row" style={{ marginBottom: '120px' }}>
              <div className="col-lg-12">

                <div style={{ textAlign: "center" }}>
                  <button style={{ padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.previous}>
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only"  >Previous</span>
                  </button>
                  <button style={{ marginLeft: '10px', padding: '12px', borderRadius: '40px', cursor: 'pointer', }} onClick={this.next}>
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
                <div className="related__title">
                  <h5>PRODUCTS</h5>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                  {this.props.productdata.map((item, index) => {

                    return (
                      <div className="product-container" style={{ backgroundColor: '#fff' }} key={index}>
                        <div className="thumb-wrappers">
                          {/* <span className="wish-icon float-right"><i className="fa fa-heart-o" /></span> */}
                          <div className="product-image">
                            <Link to={`/Single/${item._id}`} onClick={() => this.NextView(item)} className="product-link">View</Link>
                            <img className="img-responsive" src={`http://localhost:8000/uploads/${item.media}`} alt="single" />
                          </div>
                          <div className="thumb-content">
                            <p style={{ fontSize: '14px' }}>{item.Catagory} Collection </p>
                            <h4 style={{ marginTop: '-20px' }}>{item.ProductName}</h4>
                            <p className="item-price">
                              <strike style={{ color: item.real_price === 'undefined' ? 'black' : 'red', textDecoration: item.real_price === 'undefined' ? 'none' : 'inline' }}>Rs{item.product_price}</strike> {item.real_price === 'undefined' ? null : <span>Rs{item.real_price}</span>}</p>
                            <button className="btn btn-primary" onClick={() => this.onsubmit(item)}>Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  }
                </Slider>

              </div>
            </div>
          </div>
        </section>





      </div>
    )
  }
}

const mapToStateToProps = (state) => {
  var url = window.location.pathname
  var id = url.substr(url.lastIndexOf('/') + 1)
  return {
    data: state.Product.Products.find(item => item._id === id),
    productdata: state.Product.Products,

  }

}

export default connect(mapToStateToProps, { GetProduct, registerCartLocal })(SingleProduct)