import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerCartLocal } from '../../../../Redux/actions/CartActon'
import ItemList from '../itemlist/ItemList';

class Arrival extends Component {
    constructor(props) {
        super();
        this.state = {
            // todos: this.props.productdata,
            // All: [],
            activePage: 1,
            todosPerPage: 9,
            isShow: false
        }
    }



    componentWillReceiveProps(nextprops) {
        if (nextprops.productdata) {
            this.setState({ All: nextprops.productdata })
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
        
        
        let currentTodos = this.props.productdata.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log("data" ,currentTodos);


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
                                                        <span data-toggle="collapse" data-target="#collapseOne">SUMMER</span>
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
                            <div className="col-lg-9 col-md-12 col-sm-12" style={{paddingBottom:'40px'}} >

                                <ItemList/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    productdata: state.Product.Products,
    PriceRanges: state.Product.Price,



})


export default connect(mapStateToProps,
    {
        registerCartLocal
        //  Price_Range, Get_Sort_Price 
    }
)(Arrival)