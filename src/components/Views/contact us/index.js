import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { registerEmail } from '../../../Redux/actions/Email'
class ContactUs extends Component {
    state={
        name : '',
        email : '',
        subject : '',
        message : '',
        isSend : false
    }
    onChangeVal = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

    SendForm = (e) => {
		e.preventDefault()
		const { name , email , subject , message} = this.state


		let value = {
			name : name , 
            email : email ,
            subject : subject ,
            message : message
		}


		this.props.registerEmail(value);

		setTimeout(() => {
			this.setState({
				name: '',
				email: '',
				subject: '',
                message : '',
                isSend: true 
			
            })
            setTimeout(()=>{
                this.setState({
                    isSend: false 
                })
            }, 5000)

            
		}, 1500);
                


	}

    render() {
        return (
            <div className="contactus" >

                <div className="contact-title">
                    <h1>Contact Us</h1>
                    <br />
                    <h3>A tradition of premium quality men's wear.</h3>
                     </div>



                <div className="form-contactus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                            <div className="message mt-5">
                            { this.state.isSend ? 
                              <div className="alert alert-success">Your message are succesfully sended </div>  : null   
                           }
                            </div>
                                <div className="form-data">
                                    <h3>Send Us An Email </h3>
                                    <form onSubmit={this.SendForm}>
                                        <label htmlFor="name">Your Name</label>
                                        <input className="form-control" type="text" id="name"  value={this.state.name} onChange={this.onChangeVal} name="name" />
                                        <label htmlFor="email">Your Email</label>
                                        <input className="form-control" type="text" id="email" value={this.state.email} onChange={this.onChangeVal}  name="email"  />
                                        <label htmlFor="subject">Subject</label>
                                        <input className="form-control" type="text" id="subject" value={this.state.subject} onChange={this.onChangeVal} name="subject"  />

                                        <label htmlFor="message">Your Message (Optional)</label>
                                        <textarea className="form-control" id="message" name="message" value={this.state.message} onChange={this.onChangeVal}  style={{ height: 150 }} />
                                        <button className="btn btn submit">SUBMIT </button>
                                    </form>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>



                </div>



            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    Email: state.Email.Email,


})


export default connect(mapStateToProps, { registerEmail }) (ContactUs)