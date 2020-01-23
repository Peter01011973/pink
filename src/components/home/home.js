import React, {Component} from 'react';
import './home.css';
import banner from '../../assets/images/banner.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/slide_thumb_1.png';
import banner4 from '../../assets/images/single_blog_3.png';
import Slide from './slide/slide';

const backgroundImage = [
    `url(${banner})`,
    `url(${banner2})`,
    `url(${banner3})`,
    `url(${banner4})`
]

export default class Home extends Component {
    state = { currentPos: 0 }

    changeBackground = (index) => {
        console.log('hh',index);
        
        let newPos = this.state.currentPos + index;
        if (newPos > backgroundImage.length - 1) { newPos = 0 }
        if (newPos < 0) { newPos = backgroundImage.length - 1 }
        this.setState({ currentPos: newPos });
    }

    render() {
        return (
            <div className = 'slider'>
                <Slide 
                    image = {backgroundImage[this.state.currentPos]}
                    changeBackground = {this.changeBackground} />
            </div>
        )
    }

}
