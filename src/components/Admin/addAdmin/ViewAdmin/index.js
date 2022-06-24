import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { GetAdmin , delete_Admin } from '../../../../Redux/actions/NewAdminAct'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ViewAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            IsShowmodel : true,
            product: [],
            products :{}
        }
    }

  componentDidMount(){
      this.props.GetAdmin()
      
  }

  Delete = ( id ) =>{
      this.props.delete_Admin(id)
  }

  componentWillReceiveProps(nextprops){
      if(nextprops.admindata){
          this.setState({
              product : nextprops.admindata
          })
      }
  }



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
                    <Link to="/"><i className="fa fa-home"></i> Home</Link>
                    <Link to="/New_Admin"><i className="fa fa-user"></i> Admin</Link>
                    <span>All Created Admins</span>
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
                                <th>Image</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Mobile</th>
                                <th >Action</th>
                                {/* <th>Delete</th> */}
                                
                            </tr>
                        </thead>
                        <tbody>
                        { 
                                 this.state.product ? this.state.product.map((prod, index)=>{
                                     
                                    return(
                                        <tr key={index}>
                            
                        
                                <td className="cart__product__item">
                                    <img src={`http://localhost:5000/uploads/${prod.picture}`} alt="pic" style={{width:'80px' , height:'80px'}} />
                                    <div className="cart__product__item__title">
                                    <h6>{prod.fname} { prod.lname}</h6>
                                        
                                    </div>
                                   


                                </td>
                                <td className="cart__price">{prod.gender}</td>
                                <td className="cart__quantity">
                                    <div className="pro-qty mt-4">
                                        
                                    {prod.email}

                                    </div>
                                </td>
                                <td className="cart__total">{prod.role}</td>
                                    <td className="cart__total">{prod.mobile}</td>
                                <td className="cart__close"> <Link to={`/New_Admin/${prod._id}`}><span className="fa fa-edit" ></span></Link></td>
                                <td className="cart__close"><span className="fa fa-close" onClick={() => this.setState({ products : prod })} data-toggle="modal" data-target="#staticModal"></span></td>
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
                                <button onClick={() => this.Delete(this.state.product._id)} className="btn btn-primary"  data-dismiss="modal">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
    : null }


    </div>
</section>
</div>
</div>

        )
    }
}
const mapStateToProps = (state) => ({

    admindata: state.NewAdmin.Admin,

})


export default connect(mapStateToProps, { GetAdmin , delete_Admin})(ViewAdmin)