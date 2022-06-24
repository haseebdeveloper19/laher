
import React, { Component } from 'react'
import Headers from './Header/Headers'
import Home from '../home'
import Slider from './HeaderSlider/slider'
// import AutoSlide from './AutoSlider/AutoSlide'
import './main.css'
import Carousel from '../ProductCarasole/carslide'
// import KaddarTitle from './KaddarTile/KaddarTitle'

let slides = [{
    button: 'Buy Now',
    image: 'Images/new1.jpg',
},
{
    
    button: 'Buy Now',
    image: 'Images/new2.jpg',
    
},
{

    button: 'Buy Now',
    image: 'Images/new.jpg',

}]




class Main extends Component {
    render() {
        return (
            <div >
                <div className="slide">

                    <div className="top-status">

                    </div>

                    <Slider slides={slides} />
                    <div className="company-name">
                        <h2 style={{color:"white"}}>UF Fabrics</h2>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Headers />
                    </div>
                </div>


                <section style={{ paddingTop: '35rem', backgroundColor: '#fff' }}>


                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <Home />
                        </div>
                    </div>

                    </div>
                </section>

               
                <section>

                    <div className="cardslider " style={{ backgroundColor: '#fff', paddingBottom:'40px' }} >
                        <div className="subcat-head container"  >
                            <fieldset style={{ borderTop: '2px solid #e8e8e1', padding: '15px' }}>
                                <legend style={{ textAlign: 'center', width: '300px', margin: '0 auto', padding: ' 0 10px' }}>
                                    <h2 style={{ margin: '0px' }}>New Arrival </h2>
                                </legend>
                            </fieldset>
                        </div>
                        <div className="container">
                            <Carousel  />
                            


                        </div>
                    </div>

                    <div className="whatsapp">
                        <a href="https://api.whatsapp.com/send?phone=923076113832" target="_blank"  rel="noopener noreferrer" style={{ color: '#fff' }}><i className="fa fa-whatsapp my-float"></i></a>

                    </div>






                </section>


                





            </div >
        )

    }
}

export default Main