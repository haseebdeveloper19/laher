
import React, { Component } from 'react'
import './style.css'
class TopManu extends Component {
    render() {
        return (

            <section className="Top-Manus " >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="Manus">
                                <div className="col-lg-8">
                                    <div className="first-manu">
                                        <ul>
                                            <li>About Us</li>
                                            <li>Return Policy</li>
                                            <li>Privacy Policy</li>
                                            <li>Terms & Condition</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                 <div className="second-menu">
                                     <ul>
                                         <li>care@gmail.com</li>
                                         <li>+92-23232332</li>
                                     </ul>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
export default TopManu
