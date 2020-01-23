import React from 'react';
import './contact.css';
import Slider from "react-slick";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import avatar1 from '../../assets/images/banner.png';
// import avatar2 from '../../assets/images/banner2.png';
import avatar1 from '../../assets/images/testmonial/1.png';
import avatar2 from '../../assets/images/testmonial/2.png';
import avatar3 from '../../assets/images/testmonial/3.png';


const Rating = ({ stars, name }) => {

    let starsIcons = [];
    for (let i = 0; i < Math.floor(stars); i++) {
        starsIcons.push(<i className="starIcon fa fa-star" key={i}></i>);
    }
    if (stars - Math.floor(stars) > 0.1) { starsIcons.push(<i className="starIcon fa fa-star-half" key={Math.floor(stars)}></i>); }

    return (
        <div className='rating'>
            <h4 className='rating__name'>{name}</h4>
            <div className='rating__stars'>{starsIcons}</div>
        </div>
    )
}

const Contact = (props) => {
    let history = useHistory();
    let location = useLocation();
    let params = useParams();
    console.log('History: ', history);
    console.log('props :', props);
    console.log('location :', location);
    console.log('params :', params);
       
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        className: 'customerRating'
    }

    return (
        <div className='contact'>
            <Slider {...settings}>
                <div className='customerRating'>
                    <p className='customerRating__customerRef'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati! </p>
                    <img src={avatar1} alt='' />
                    <Rating stars={4.5} name={'A.H. Shemanto'} />
                </div>
                <div className='customerRating'>
                    <p className='customerRating__customerRef'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati! </p>
                    <img src={avatar2} alt='' />
                    <Rating stars={3.5} name={'Kristiana Chouhan'} />
                </div>
                <div className='customerRating'>
                    <p className='customerRating__customerRef'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem beatae earum inventore repudiandae sit obcaecati! </p>
                    <img src={avatar3} alt='' />
                    <Rating stars={5.5} name={'Arafath Hossein'} />
                </div>
            </Slider>
        </div>
    );
}

export default Contact;
