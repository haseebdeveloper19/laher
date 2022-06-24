import React, { Component } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './loaderlow.css'
class LoadingLow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // loading : true 
        }
    }
    render() {
        return (
            <div className="loading">

                <div className="clip" >

                    <ClipLoader
                        size={50}
                        color={"#123abc"}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}
export default LoadingLow