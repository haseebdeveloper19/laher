import React , { Component } from 'react'
import  '../styles/notfound.css'
class NotFound extends Component{
    render(){
        return(
            <div style={{marginTop:'7rem'}}>

                <div className="notfound">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="img">
                                    <h3 id="desc">Ooops Page Not Found.....</h3>
                                    <img src="Images/404/404.png" alt="not found"/>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound 