import React from 'react'
import './slider.css'
import { Link } from 'react-router-dom'
// import Headers from '../Header/Header/Headers'
// import '../hom.css'
let slides = [

];

class Slide extends React.Component {
  
    render() {
        let slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            
            <div
                className="slider__slide"
                data-active={this.props.active}
                style={slideStyle}
                >
                <div className="inner" style={{zIndex:20000 ,}}>
                    {/* <btton> </btton> */}
                    <button style={{cursor:'pointer'}}> <Link to="/Product_Cata"> Buy Now </Link></button>
                </div>
                </div>
               
                   
                

        );
    }
}

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            sliderdeley: 3000,

        };
    }

    componentDidMount() {
        const interval = setInterval(this.handleNextSlide, 5000);
        this.interval = interval;
    }

    componentWillUnmount() {
        if (this.interval != null) {
            clearInterval(this.interval);
        }
    }

    handleNextSlide = () => {
        const { slides } = this.props;
        const { activeSlide } = this.state;
        if (activeSlide === (slides && slides.length) - 1) {
            this.setState({
                activeSlide: 0
            });
        } else {
            this.setState({
                activeSlide: this.state.activeSlide + 1
            });
        }
    }


    prevSlide() {
        let slide = this.state.activeSlide - 1 < 0
            ? slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }
    nextSlide() {
        let slide = this.state.activeSlide + 1 < slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }
    render() {
        var slides = this.props.slides;
        return (
            <div>


                {slides.map((slide, index) => {
                    return (
                        <Slide
                            key={index}
                            background={slide.image}
                            description={slide.description}
                            title={slide.title}
                            button={slide.button}
                           
                            active={index === this.state.activeSlide}
                        />
                    );
                })}
                
            
           
            
            </div>
        );
    }
}

export default Slider