import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            // hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0, 120]
        },
    ],

};

class PieChart extends Component {


    render() {
        return (
            <div>
                <div className="container">

                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mb-3">Team Commits </h4>
                                    <Pie data={data} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default PieChart

