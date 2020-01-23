import './about.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../../assets/images/banner.png';
import avatar2 from '../../assets/images/banner2.png';
// import avatar1 from '../../../assets/image/testmonial/1.png';
// import avatar2 from '../../../assets/image/testmonial/2.png';
// import avatar3 from '../../../assets/image/testmonial/3.png';


export default class About extends Component {
  render() {
    var settings = {
      dots: false,

      adaptiveHeight: true,
      accessibility: true,
      centerMode: true,
      centerPadding: '0px',
      fade: true,



      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className = 'about'>
        <Slider {...settings}>
          <div >
            <img src = {avatar1} alt = ''/>
          </div>
          <div > 
          <img src = {avatar2} alt = ''/>
          </div>
        </Slider>
      </div>
    );
  }
}

