import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import '../../styles/viewpro.css'
import { delete_Product , GetProduct } from '../../../../Redux/actions/ProductAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Viewpro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IsShowmodel: true,
            product: {},
            filterText:''
        }
    }

    componentDidMount() {
        this.props.GetProduct()

    }

    Delete = (id) => {
        this.props.delete_Product(id)
    }



    render() {
        
        const filteredItems = this.props.productdata && this.props.productdata.filter(
			(item) =>{
			 
				return item.ProductName && item.ProductName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1}
		);
        return (
            <div>

                <aside id="left-panel" className="left-panel">

                    <Sidebar />
                </aside>


                <div id="right-panel" className="right-panel" >

                    <Nav />

                    <div className="breadcrumb-option">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__links">
                                    <Link to="/Admin_Dashboard"><i className="fa fa-home"></i> Home</Link>
                                    <Link to="/Add_Product"><i className="fa fa-book"></i> Create Product</Link>
                                    <span>View Product</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="shop-cart spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">

                                        <div className="col-md-3"></div>
                                        <div className="col-md-6">

                                            <div className="input-group mb-3">
                                                <input tye="text " className="form-control" placeholder="search here" value={this.state.filterText} name='filterText' onChange={(e) => this.setState({ filterText: e.target.value })} />
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect01"><i className="fa fa-search"></i></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>

                                    </div>
                                    <div className="data">
                                        {/* <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2> */}
                                        <table className="fl-table"  style={{ maxHeight:'300px' , overflowY:'scroll'}}>
                                            <thead>
                                                <tr>
                                                    <th >Pro_Id</th>
                                                    <th >Image</th>
                                                    <th >Pro_Name</th>
                                                    <th >Pro_Price</th>
                                                    <th >Pro_Catagory</th>
                                                    <th >Pro_Quality</th>
                                                    <th >Edit</th>
                                                    <th >Delete</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredItems && filteredItems.length > 0  ? filteredItems.map((item) => {
                                                    return (
                                                        <tr>
                                                            <td>{item.ProductId}</td>
                                                            <td><img src={`http://localhost:8000/uploads/${item.media}`} alt="pic" style={{ width: '80px', height: '80px' }} /></td>
                                                            <td>{item.ProductName}</td>
                                                            <td>{item.product_price}</td>
                                                            <td>{item.Catagory}</td>
                                                            <td>{item.Size}</td>
                                                            <td><Link to={`/Products/Edit_Product/${item._id}`}><span className="fa fa-edit" ></span></Link></td>
                                                            <td><span className="fa fa-close" onClick={() => this.setState({ product: item })} data-toggle="modal" data-target="#staticModal"></span> </td>
                                                        </tr>
                                                    )
                                                })
                                                : <h2 style={{textAlign:'center ' , fontSize:'18px'}}>No Record Found</h2>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="shop__cart__table"> */}


                                    {/* <DataTable
                                            
											columns={columns}
											data={data}
											pagination
											subHeader
											selectableRows
											persistTableHead
										/> */}








                                    {/* </div> */}
                                </div>
                            </div>


                            {this.state.IsShowmodel ?


                                <div className="modal fade" id="staticModal" tabIndex="-1" role="dialog" aria-labelledby="staticModalLabel" aria-hidden="true" data-backdrop="static">
                                    <div className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticModalLabel">Static Modal</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                                <button onClick={() => { this.Delete(this.state.product._id) }} className="btn btn-primary" data-dismiss="modal">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}


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

    productdata: state.Product.Products,

})


export default connect(mapStateToProps, { delete_Product , GetProduct })(Viewpro)