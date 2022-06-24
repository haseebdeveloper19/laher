import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../itemlist/ItemList';

class All extends Component {
    render() {
    
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
                            <div className="col-lg-3 col-md-3">
                                <div className="shop__sidebar">
                                    <div className="sidebar__categories">
                                        <div className="section-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="categories__accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-heading active">
                                                        <span  data-toggle="collapse" data-target="#collapseOne">SUMMER</span>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><Link to="/Product_Cata/Summer_Premium" className="links_data" >Premium Khaddi</Link></li>
                                                                <li><Link to="/Product_Cata/Summer_Royal" className="links_data" >Royal Organza</Link></li>
                                                                <li><Link to="/Product_Cata/Designer_Plus" className="links_data" >Designer Plus</Link></li>
                                                                <li><Link to="/Product_Cata/Summer_Khaddi" className="links_data" >Summer Khaddi</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <span data-toggle="collapse" data-target="#collapseTwo">WINTER</span>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><Link to="/Product_Cata/Winter_Khaddi" className="links_data" >Winter Khaddi</Link></li>
                                                                <li><Link to="/Product_Cata/Winter_Goli" className="links_data" >Winter Goli</Link></li>
                                                                <li><Link to="/Product_Cata/Winter_Handmade" className="links_data" >Handmade Series</Link></li>
                                                                <li><Link to="/Product_Cata/Winter_designer" className="links_data" >Designer Plus</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12" >
                           <ItemList/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default All