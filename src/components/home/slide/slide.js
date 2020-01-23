import React from 'react';
import './slide.css';

const Slide = ({image, changeBackground}) => {

    return (
        <div className = "slide current" style={{ backgroundImage: image }}>
            <div className="content">
                <div className='slide__prev' onClick={changeBackground.bind(null, -1)}>
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className='slide__next' onClick={changeBackground.bind(null, 1)}>
                    <i className='fa fa-angle-right' />
                </div>
            </div>
        </div>
    )
}

export default Slide
