import React ,{ Component } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import '../styles/loading.css'
class Loading extends Component{
    constructor(props){
        super(props)
        this.state={
            loading : true 
        }
    }
    render(){
        return(
        <div className="sweet-loading" style={{textAlign: 'center' ,}}>
        <ClipLoader
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
       <p style={{  paddingTop:'20px' }}>please wait....</p>
      </div>
        )
    }
}
export default Loading