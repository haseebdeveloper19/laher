import React, { Component } from 'react'
// import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCkoutInfo } from '../../../../Redux/actions/checkoutAction'
import './style.css'


class Order extends Component {

      state = {
            Single: this.props.checkoutData
      }

      componentDidMount() {
            this.props.getCkoutInfo()



      }


      componentWillReceiveProps(nextProps) {
            if (nextProps.checkoutData) {
                  this.setState({ Single: nextProps.checkoutData })
            }
      }

      render() {
console.log("data" , this.props.checkoutData);

            return (
                  <div>

                        <aside id="left-panel" class="left-panel">

                              <Sidebar />
                        </aside>


                        <div id="right-panel" className="right-panel" style={{ width: '100%' }}>

                              {/* <Nav /> */}






                              <div class="container">
                                    <div class="row">
                                          <div className="container">

                                                <div className="col-md-12" style={{ padding: '10px' }} >
                                                      <div className="breadcrumb-option">
                                                            <div className="container">
                                                                  <div className="row">
                                                                        <div className="col-lg-12">
                                                                              <div className="breadcrumb__links mt-4">
                                                                                    <Link to="/Admin_Dashboard"><i className="fa fa-home"></i> Home</Link>
                                                                                    <Link to="/OrderList"><i className="fa fa-home"></i> Order List</Link>
                                                                                    <span>Order Detail </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <section className="shop-cart spad">
                                                            <div className="container">
                                                                  <div className="row">
                                                                        <div className="col-lg-8">

                                                                              <div id="table-header">Order Detail</div>
                                                                              <br />
                                                                              <h5>Details information of order no is {this.state.Single && this.state.Single.customer_id}</h5>
                                                                              <table className="table" style={{maxHeight:'200px' , overflowY:'scroll'}}>
                                                                                    <tbody>
                                                                                          {this.state.Single ? this.state.Single.products.map((single, index) => {
                                                                                                return (
                                                                                                      <div>
                                                                                                            <tr>
                                                                                                            <th>Sr#</th>
                                                                                                            <td colspan="1">
                                                                                                            {index + 1}
                                                                                                            </td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Product Images</th>
                                                                                                            <td colspan="1">
                                                                                                            <img style={{width:'30%' , height:'30%'}} src={`https://www.uffabrics.com/uploads/${single.media}`} alt="pic"  />
                                                                                                            </td>
                                                                                                      </tr>

                                                                                                       <tr>
                                                                                                            <th>Product Catagory</th>
                                                                                                            <td colspan="1">
                                                                                                            <span>{single.Catagory}</span>
                                                                                                            </td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Product Name</th>
                                                                                                            <td colspan="1">
                                                                                                            <span>{single.ProductName}</span>
                                                                                                            </td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Contact</th>
                                                                                                            <td colspan="1"><span>{this.state.Single.mobile}</span></td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Email</th>
                                                                                                            <td colspan="1"><span>{this.state.Single.email}</span></td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Address</th>
                                                                                                            <td colspan="1"><span>{this.state.Single.address}</span></td>
                                                                                                      </tr>
                                                                                                      <tr>






                                                                                                            <th>Shipping City</th>
                                                                                                            <td colspan="1"><span>{this.state.Single.city}</span></td>
                                                                                                      </tr>
                                                                                                      <tr>
                               
                                                                                                            <th>State</th>
                                                                                                            <td colspan="1"><span>{this.state.Single.state}</span></td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Product price</th>
                                                                                                            <td colspan="1">{single.real_price === 'undefined' ? single.product_price : single.real_price}PKR</td>
                                                                                                      </tr>

                                                                                                      <tr>
                                                                                                            <th>Total price</th>
                                                                                                            <td colspan="1">{single.real_price === 'undefined' ? single.product_price * single.Quantity : single.real_price * single.Quantity }PKR</td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Payment Type</th><td colspan="1">Cash on delivery</td>				</tr>
                                                                                                      <tr>
                                                                                                            <th>Order Date</th>
                                                                                                            <td colspan="1">{this.state.Single.date.substring(0, 10)}</td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                            <th>Order Books id</th>
                                                                                                            <td colspan="1">{ this.state.Single.customer_id}</td>
                                                                                                      </tr>

                                                                                                      <tr>
                                                                                                            <th>Book Quantity</th>
                                                                                                            <td colspan="1">{single.Quantity}</td>
                                                                                                      </tr>
                                                                                                      <tr class="border-bottom">
                                                                                                            <th>Order Status</th><td colspan="1"><span class="text-danger">Pending</span></td>				</tr>
                                                                                                      <tr>
                                                                                                            <th>Order placed by</th>
                                                                                                            <td colspan="1"><b>{this.state.Single.fname + this.state.Single.lname}</b></td>
                                                                                                      </tr>
                                                                                                      

                                                                                                      </div>
                                                                                                )
                                                                                          })
                                                                                                : null
                                                                                          }

                                                                                    </tbody>
                                                                              </table>




                                                                              {/* <div className="pt-4">
                                             <table className="fl-table">
                                                <thead>
                                                   <tr>
                                                      <th >Cus_Id</th>
                                                      <th >Image</th>
                                                      <th >Product</th>
                                                      <th >Email</th>
                                                      <th >Catagory</th>
                                                      <th >Quantity</th>
                                                      <th >City</th>
                                                      <th >State</th>
                                                      <th >Address</th>
                                                      <th >Date</th>
                                                      <th >Pro_Price</th>
                                                      <th >Totall</th>
                                                   </tr>
                                                </thead>
                                                <tbody>
                                                   {this.state.Single ? this.state.Single.products.map((single, index) => {
                                                      return (
                                                         <tr key={index}>
                                                            <td>{this.state.Single.customer_id}</td>
                                                            <td rowSpan="2"><img src={`http://localhost:5000/uploads/${single.media}`} alt="pic"  /></td>
                                                            <td >{single.ProductName}</td>
                                                            <td style={{width:'4rem'}}>{this.state.Single.email}</td>
                                                            <td >{single.Catagory}</td>
                                                            <td >{single.Quantity}</td>
                                                            <td >{this.state.Single.city}</td>
                                                            <td >{this.state.Single.state}</td>
                                                            <td >{this.state.Single.address}</td>
                                                            <td >{this.state.Single.date.substring(0, 10)}</td>
                                                            <td >{single.real_price === 'undefined' ? single.product_price : single.real_price}</td>
                                                            <td >{single.real_price === 'undefined' ? single.product_price * single.Quantity : single.real_price * single.Quantity }</td>
                                                         </tr>
                                                      )
                                                   })
                                                      : null
                                                   }

                                                </tbody>
                                             </table>
                                       </div> */}
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </section>

                                                </div>




                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}


const mapStateToProps = (state) => {

      var url = window.location.pathname
      
      var id = url.substr(url.lastIndexOf('/') + 1)
      console.log("url" , id );
      return {
            checkoutData: state.checkout.CheckOuts.find(item => item._id  === id),
            errors: state.errors
      }


}


export default connect(mapStateToProps, { getCkoutInfo })(Order)