import React from 'react';
import './home.css';
import banner from '../../assets/images/banner.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/slide_thumb_1.png';
import banner4 from '../../assets/images/single_blog_3.png';

const Home = () => {
    return (
        <div className = 'slider'>
            <div className="slide  current" style={{ backgroundImage: `url(${banner})` }}>
                <div className="content">
                    <h1>Slide one</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis vel ratione, reiciendis a non quos placeat dolores assumenda corrupti voluptatum recusandae velit, eos ipsa alias incidunt expedita excepturi esse.</p>
                </div>
            </div>
            <div className="slide" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="content">
                    <h1>Slide two</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis vel ratione, reiciendis a non quos placeat dolores assumenda corrupti voluptatum recusandae velit, eos ipsa alias incidunt expedita excepturi esse.</p>
                </div>
            </div>
            <div className="slide" style={{ backgroundImage: `url(${banner3})` }}>
                <div className="content">
                    <h1>Slide three</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis vel ratione, reiciendis a non quos placeat dolores assumenda corrupti voluptatum recusandae velit, eos ipsa alias incidunt expedita excepturi esse.</p>
                </div>
            </div>
            <div className="slide" style={{ backgroundImage: `url(${banner4})` }}>
                <div className="content">
                    <h1>Slide four</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis vel ratione, reiciendis a non quos placeat dolores assumenda corrupti voluptatum recusandae velit, eos ipsa alias incidunt expedita excepturi esse.</p>
                </div>
            </div>    
            <button className = 'prev'><i className = 'fa fa-arrow-left'></i></button>      
            <button className = 'next'><i className = 'fa fa-arrow-right'></i></button>
        </div>
    )
}

export default Home
