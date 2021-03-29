import React from 'react';
import './header.css';
import Logo from '../UI/logo/logo';
import Navmenu from './nav-menu/nav-menu';

const Header = () => {
    return (
        <div className='header'>
            <div className="container header-container">
                <div className='container__logo'>
                    <Logo />
                </div>
                <div className='container__nav'>
                    <Navmenu/>
                </div>
                <div className='social-link container__social-links'>
                    <ul className='social-link__list'>
                        <li className='social-link__item'><a className='social-link__link' href="#"><i className="fa fa-instagram"></i></a></li>
                        <li className='social-link__item'><a className='social-link__link' href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className='social-link__item'><a className='social-link__link' href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className='social-link__item'><a className='social-link__link' href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
                <form className='search container__search'>
                    <input className = 'search__input' placeholder='searching...' />
                    <button className = 'search__button' >search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;

