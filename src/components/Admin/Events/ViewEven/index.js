import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import {   GetEvent } from  '../../../../Redux/actions/EventAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Viewevent extends Component {

    constructor(props){
        super(props);
        this.state={
            IsShowmodel : true,
            product:{},
        }
    }

  componentDidMount(){
      this.props.GetEvent()
      
  }

//   Delete = ( id ) =>{
//       this.props.delete_Product(id)
//   }



    render() { 
        console.log("this is a props" , this.state)
        return (
            <div>

<aside id="left-panel" class="left-panel">

<Sidebar />
</aside>


<div id="right-panel" className="right-panel" >

<Nav/>

<div className="breadcrumb-option">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="breadcrumb__links">
                    <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                    <a href="./index.html"><i className="fa fa-book"></i> Product</a>
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
                                <th>Picture</th>
                                <th>Event Name</th>
                                <th>Discount</th>
                                <th>Ishow date</th>
                                <th >Action</th>
                                {/* <th>Delete</th> */}
                                
                            </tr>
                        </thead>
                        <tbody>
                        { 
                                 this.props.eventData ? this.props.eventData.map((prod, index)=>{
                                     
                                    return(
                                        <tr key={index}>
                            
                        
                                <td className="cart__product__item">
                                    <img src={`http://localhost:5000/uploads/${prod.picture}`} alt="pic" style={{width:'80px' , height:'80px'}} />
                                    
                                   



                                </td>
                                <td className="cart__price">{prod.eventname}</td>
                                <td className="cart__quantity">
                                    <div className="pro-qty mt-4">
                                        
                                    {prod.discount}

                                    </div>
                                </td>
                                    <td className="cart__total">{prod.event_date}</td>
                                <td className="cart__close"> <Link to={`/Products/Add_Product/${prod._id}`}><span className="fa fa-edit" ></span></Link></td>
                                <td className="cart__close"><span className="fa fa-close" onClick={() => this.setState({ product : prod })} data-toggle="modal" data-target="#staticModal"></span></td>
                            </tr>
                                    )
                                })
                                : null
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  

  { this.state.IsShowmodel ? 


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
                                <button onClick={() => {this.Delete(this.state.product._id)}} className="btn btn-primary"  data-dismiss="modal">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
    : null }


    </div>
</section>
</div>
                

                




                   
                                {/* { 
                                 this.props.productdata.map((prod, index)=>{
                                     
                                    return(
                                        <tr key={index}>
                                            <td>
                                        <figure className="media" >
                                            <div className="img-wrap"><img src={`http://localhost:5000/uploads/${prod.media[0]}`} className="img-thumbnail img-sm" /></div>
                                            <figcaption className="media-body">
                                                <h6 className="title text-truncate" >Name :{prod.ProductName} </h6>
                                                <dl class="param param-inline small">
                                                    <dt>Product Id: </dt>
                                    <dd>{prod.ProductId}</dd>
                                                </dl>
                                                <dl class="param param-inline small">
                                                    <dt>Size: </dt>
                                    <dd>{prod.Size}</dd>
                                                </dl>
                                                <dl class="param param-inline small">
                                                    <dt>Catagory: </dt>
                                    <dd></dd>
                                                </dl>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td>
                                        <select class="form-control">
                                    <option></option>
                                            
                                        </select>
                                    </td>
                                    
                                    <td>
                                        <div class="price-wrap">
                                    <var class="price"></var>
                                            <small class="text-muted">(USD5 each)</small>
                                        </div>
                                    </td>
                                        
                                    <td class="text-right" style={{paddingTop:'10px'}}>
                                    <Link to={`/Add_Product/${prod._id}`}><span><i className="fa fa-edit btn btn-success"></i></span></Link>
                                        <span><i onClick={() => this.Delete(prod._id)} className="fa fa-remove btn btn-danger"></i></span>
                                    </td>
                                           
                                  

                                        </tr>


                                    )

                                })
                            } */}


                                    
                                   
                               
            </div>

        )
    }
}
const mapStateToProps = (state) => ({

    eventData: state.Event.Events,

})


export default connect(mapStateToProps, { GetEvent})( Viewevent)