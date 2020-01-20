import React from 'react';
import './nav-menu.css';
import {Link} from 'react-router-dom';

const Navmenu = () => {
    
    return (
            <ul className='menu'>
                <li className='menu__item'><Link className = 'menu__link' to = '/'>Home</Link></li>
                <li className='menu__item'><Link className = 'menu__link' to = '/about'>About</Link></li>
                <li className='menu__item submenu'><Link className = 'menu__link' to = '/topics'>Topics</Link>
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
                <li className='menu__item'><Link className = 'menu__link' to = '/contact'>Contact</Link></li>
            </ul>
    )
}

export default Navmenu
