import React, { Component } from 'react'
import '../styles/profile.css'
import { Link } from 'react-router-dom'
import logo from '../../Admin/SoucePictur/male_avatar.png'

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
           image4: logo,
        }
     }
    render(){
        return(
            <div style={{marginTop:'8rem'}}>
            <div class="container">
               <div class="row">
                  <div className="container">

                  <div className="col-md-12"style={{ padding:'10px' }} >
                   <h3>My Profile</h3>

                   <div className="breadcrumb-option">
								<div className="container">
									<div className="row">
										<div className="col-lg-12">
											<div className="breadcrumb__links">
												<Link to="/"><i className="fa fa-home"></i> Home</Link>
												<span>My Profile</span>
											</div>
										</div>
									</div>
								</div>
							</div>

                  </div>


               
          <div class="col-md-4 col-xs-6 col-sm-6" style={{display:'flex'}}>
                    <div class="box box-primary">
                        <div class="box-body box-profile">

                        <div className="profile-img" id="profileImage" >
                              <label htmlFor="file-input4">
                                 <img src={this.state.image4}
                                  class="profile-user-img img-responsive img-circle" 
                                  style={{opacity: '0.5'}} alt="Profile_Image" />
                              </label>
                              <div id="overlay" class="" style={{opacity: '1', backgroundColor: 'rgba(0, 0, 0, 0.75)' , marginTop:'-130px' }} >
                                    <span id="plus">
                                        <i id="cameraIcon" style={{color: '#fff' , position: 'relative' , top: '55px'  }} class="fa fa-camera"></i>
                                    </span>
                                </div>
                              <div className="file ">
                                 <input name="image4" id="file-input4" type="file" style={{ border: 'none' }} accept="images/*" onChange={this.ChangeFile} />
                              </div>
                           </div>

                    

                            <h3 class="profile-username text-center " style={{paddingTop:'4rem'}}>
                                laher asif</h3>

                            <div class="row">
                                <div class="col-md-12" style={{paddingTop:'20px'}}>
                                    <i style={{color: 'darkgrey' , fontSize: '11px' , display:'flex' }}>&nbsp;<b>Note:</b> JPG file of Max. 150KB is required for Profile Picture  </i>
                                    <hr></hr>
                                </div>
                            </div>
                            <div class="box-footer no-padding">
                                <div class="box-body">
                                    <dl>
                                        <dt>
                                            <strong><i class="fa fa-book mr-1"></i>Education</strong>
                                        </dt>
                                        <dd>
                                            Bachelors - Computer Science
                                            
                                        </dd>
                                        <dt>
                                            <br></br>
                                            <strong><i class="fa fa-envelope mr-1"></i>Email</strong>
                                        </dt>
                                        <dd>
                                            laherasif@gmail.com
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
                  <div class="col-lg-8" >
                  <div class="box box-primary">
                        <div class="box-body box-profile">

                     <form className="form-horizontal" onSubmit={this.props.data ? this.UpdateForm : this.SendForm}>

<div className="row">
   <div className="col-6">
      <div className="form-group">
         <label htmlFor="cc-exp" className="control-label mb-1">Product Id </label>
         <input
            value={ this.state.product_code}
            onChange={this.ChangeValue}
            name="product_code"
            id="cc-exp"
            placeholder="Product Id"
            className="form-control input-md"
            type="text" />
      </div>
   </div>
   <div className="col-6">
      <label htmlFor="product_name" className="control-label mb-1">Product Name *</label>
      <input id="product_name"
         value={this.state.product_name}
         onChange={this.ChangeValue}
         name="product_name"
         placeholder="Product Name"
         className="form-control input-md"
         type="text" />

   </div>
</div>
<div className="row" > 
   <div className="col-6">
      <div className="form-group">
         <label htmlFor="cc-exp" className="control-label mb-1">Product Price *</label>
         <input id="product_price"
            value={ this.state.product_price}
            onChange={this.ChangeValue}
            name="product_price"
            placeholder="Product Price"
            className="form-control input-md"
            type="text" />
      </div>
   </div>
   <div className="col-6">
      <label htmlFor="x_card_code" className="control-label mb-1">Product Catagory * </label>
      <select id="product_categorie"
         name="product_categorie"
         value={this.state.product_cate}
         onChange={this.ChangeValue}
         className="form-control">
         <option defaultChecked>Select Catagory</option>
         <option value="Men's">Men's</option>
         <option value="Woman's">Woman's</option>
      </select>

   </div>
</div>
<div className="row">
   <div className="col-6">
      <div className="form-group">
         <label htmlFor="cc-exp" className="control-label mb-1">Product Stock Quantity</label>
         <input id="available_quantity"
            value={ this.state.available_quantity}
            onChange={this.ChangeValue}
            name="available_quantity"
            placeholder="Avaliable Qunantity"
            className="form-control input-md"
            type="text" />

      </div>
   </div>
   <div className="col-6">
      <label htmlFor="x_card_code" className="control-label mb-1">Product Description</label>
      <textarea className="form-control"
         id="product_description"
         placeholder="Product Description"
         value={ this.state.product_description}
         onChange={this.ChangeValue} name="product_description"></textarea>

   </div>
</div>

<div className="row">

   <div className="col-12 mt-4">
      <div className="form-group">
         <label htmlFor="cc-exp" className="control-label mb-1">Product Stock Size Avaliabale</label>
         <select id="product_categorie"
            value={ this.state.product_pric}
            onChange={this.ChangeValue}
            name="product_size" className="form-control">
            <option defaultChecked>Select Size</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="xlarge">Xlarge</option>
            <option value="xxlarge">XXlarge</option>



         </select>

      </div>
   </div>
</div>
</form>
                     </div>
                     </div>


       
</div>
                  </div>
                  </div>
            </div>
</div>

        )
    }
}
export default Profile