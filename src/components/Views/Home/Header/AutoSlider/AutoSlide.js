import React from 'react';
import './autoslide.css'



class AutoSlide extends React.Component {




    render() {
        return (
            <div>
                <div className="slider">
                   
                    <div className="slide-description">
                        <label className="slide-0">
                            <h1 className="text-slide">Pure CSS</h1>
                        </label>
                        <label className="slide-1">
                            <h1 className="text-slide">Pure CSS</h1>
                        </label>
                        <label className="slide-2">
                            <h1 className="text-slide">Pure CSS</h1>
                        </label>
                        <label className="slide-3">
                            <h1 className="text-slide">Pure CSS</h1>
                        </label>
                    </div>
                    <div className="slider-arrow-prev">
                        <label className="slide-0" htmlFor="input-slide-0" />
                        <label className="slide-1" htmlFor="input-slide-1" />
                        <label className="slide-2" htmlFor="input-slide-2" />
                        <label className="slide-3" htmlFor="input-slide-3" />
                    </div>
                    <div className="slider-arrow-next">
                        <label className="slide-0" htmlFor="input-slide-0" />
                        <label className="slide-1" htmlFor="input-slide-1" />
                        <label className="slide-2" htmlFor="input-slide-2" />
                        <label className="slide-3" htmlFor="input-slide-3" />
                    </div>
                </div>









            </div>

        )
    }
}

export default AutoSlide