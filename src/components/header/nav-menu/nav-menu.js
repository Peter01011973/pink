import React from 'react';
import './nav-menu.css';
import {NavLink} from 'react-router-dom';

const Navmenu = () => {
    
    return (
            <ul className='menu'>
                <li className='menu__item'><NavLink exact className = 'menu__link' to = '/' activeClassName = 'active'>Home</NavLink></li>
                <li className='menu__item'><NavLink className = 'menu__link' to = '/about' activeClassName = 'active'>About</NavLink></li>
                <li className='menu__item submenu'><NavLink className = 'menu__link' to = '/topics' activeClassName = 'active'>Topics</NavLink>
                    {/* <ul className="submenu__items">
                        <li className = 'submenu__item'><Link to = {`${match.url}/topic1`}>Topic 1</Link></li>
                        <li className = 'submenu__item'><Link to = {`${match.url}/topic2`}>Topic 2</Link></li>
                        <li className = 'submenu__item'><Link to = {`${match.url}/topic3`}>Topic 3</Link></li>
                    </ul> */}
                    {/* <ul className="submenu__items">
                        <li className = 'submenu__item'><a>Topic 1</a></li>
                        <li className = 'submenu__item'><a>Topic 2</a></li>
                        <li className = 'submenu__item'><a>Topic 3</a></li>
                    </ul> */}
                </li>
                <li className='menu__item'><NavLink className = 'menu__link' to = '/contact' activeClassName = 'active'>Contact</NavLink></li>
                <li className='menu__item'><NavLink className = 'menu__link' to = '/fetch' activeClassName = 'active'>Fetching</NavLink></li>
            </ul>
    )
}

export default Navmenu
