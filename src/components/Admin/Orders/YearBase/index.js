import React, { Component } from 'react'
import Nav from '../../../navbar/nav'
import Sidebar from '../../../navbar/sidebar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCkoutInfo } from '../../../../Redux/actions/checkoutAction'
class YearBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Year: [],
            Data: [],
            date: '',
            FilterData: []
        }
    }


    componentDidMount() {

        this.props.getCkoutInfo()

        setTimeout(() => {
            const uniqueDates = [...new Set(
                this.state.Year
                    .map((str) => str.date.match(/^\d{4}/)[0])
            )];
            this.setState({ Data: uniqueDates })
        }, 1500);


    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.date !== this.state.date) {
            let dataa = this.state.Year.filter(item => {
                if (item.date.substring(0, 4) === this.state.date);
                return item


            })
            this.setState({ FilterData: dataa })

        }
    }







    componentWillReceiveProps(NextProps) {
        if (NextProps.checkoutData) {
            this.setState({ Year: NextProps.checkoutData })
        }
    }
    render() {

        let Total = this.state.Year ? this.state.Year.reduce((total, product) => total + parseInt(product.amount , 10),0).toFixed(2) : null

        return (
            <div>
                <aside id="left-panel" class="left-panel">

                    <Sidebar />
                </aside>


                <div id="right-panel" className="right-panel" >

                    <Nav />






                    <div className="container">
                        <div class="row">

                            <div className="col-md-12" style={{ padding: '10px' }} >
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

                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="yearbase">
                                        <div className="input-group mt-3">
                                            <select className="custom-select" id="inputGroupSelect01" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })}>
                                                <option defaultChecked >Choose...</option>
                                                {this.state.Data && this.state.Data.map((item, index) => {
                                                    return (
                                                        <option key={index} >{item}</option>

                                                    )
                                                })}

                                            </select>
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01"><i className="fa fa-search"></i></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>

                                <div className="col-md-12 mt-3">
                                    <div className="data" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                                        {/* <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2> */}
                                        <table className="fl-table">
                                            <thead>
                                                <tr>
                                                    <th >Cus_Id</th>
                                                    <th >Fullname</th>
                                                    <th >Catagory</th>
                                                    <th >Quantity</th>
                                                    <th >Date</th>
                                                    <th >Month</th>
                                                    <th >Totall</th>
                                                    <th >View</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.Year ? this.state.Year.map((single, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{single.customer_id}</td>
                                                            <td >{single.fname + single.lname}</td>
                                                            <td>

                                                                {single.products.map((item) => {
                                                                    return (
                                                                        <td>{item.Catagory}</td>

                                                                    )
                                                                })}
                                                            </td>
                                                            <td >{single.quantity}</td>
                                                            <td >{single.date.substring(0, 10)}</td>
                                                            <td >{new Date(Date.parse(single.date)).toLocaleString('en-us', { month: 'long' })}</td>
                                                            <td >{single.amount}</td>
                                                            <td><Link to={`Orders/${single._id}`}> <i className="fa fa-eye"></i></Link></td>
                                                            {/* <td >{this.state.Single.city}</td>
                                                            <td >{this.state.Single.state}</td>
                                                            <td >{this.state.Single.address}</td>
                                                            <td >{single.product_price * single.Quantity}</td> */}

                                                        </tr>
                                                    )
                                                })
                                                    : null
                                                }

                                                <tr >
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td  >Total : {Total} </td>
                                                </tr>


                                            </tbody>
                                        </table>
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
const mapToStateToProps = (state) => ({
    checkoutData: state.checkout.CheckOuts
})

export default connect(mapToStateToProps, { getCkoutInfo })(YearBase)