import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Nav from '../../navbar/nav'
import Sidebar from '../../navbar/sidebar'
import BarChart from './Bar';
import DoughtChart from './Dought';
import LineChart from './Line';
import PieChart from './Pie';
class Charts extends Component {


    render() {
        return (
            <div>
                <aside id="left-panel" class="left-panel">

                    <Sidebar />
                </aside>


                <div id="right-panel" className="right-panel" >

                    <Nav />

                    <div className="container">


                        <div className="breadcrumb-option">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="breadcrumb__links">
                                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                            <span>Create Banner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content mt-3">
                            <div class="animated fadeIn">
                                <div class="row">

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Yearly Sales </h4>
                                                <LineChart/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Team Commits </h4>
                                                <DoughtChart/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Bar chart </h4>
                                               <BarChart/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="mb-3">Team Commits </h4>
                                                 <PieChart/>
                                            </div>
                                        </div>
                                    </div>

                                   
                                       

                            


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Charts

