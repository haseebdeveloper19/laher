import React ,{ Component } from 'react'

class ErrorHendlerBoundery extends Component{
    state = { error : null , hasError: false}

    static getDerivedStateFromError(error){
        return { hasError : true , error}
    }

    componentDidCatch( error , errorInfo){
        console.log(error , errorInfo)
    }
    render(){
        if(this.state.hasError){
        return <div> SometThing is Wrong </div>
        }

        return this.props.children;
        
    }
}

export default ErrorHendlerBoundery