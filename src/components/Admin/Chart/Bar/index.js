import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0, 120]
        },
    ],

};

class BarChart extends Component {


    render() {

        let date = new Date()

        let d = date.getMonth()+1;

           console.log("first day ", new Date().getMonth() )
           console.log("first day ",d )
    
        
        var firstDay =  
                    new Date(date.getFullYear(), date.getMonth(), 1); 
                      
             
                   new Date(date.getFullYear(), date.getMonth() + 1, 0)

           console.log("first day ", firstDay )

//            const formatter = new Intl.DateTimeFormat('fr', { month: 'long' });
// const month1 = formatter.format(new Date());
// console.log("first month", month1 )

console.log(new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'}))






        return (
            <div>
                <div className="container">

                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mb-3">Team Commits </h4>
                                    <Bar data={data} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default BarChart

