import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav-menu.css';

const Navmenu = () => {
    
    return (
        <ul className='menu'>
            <li className='menu__item'>
                <NavLink exact className = 'menu__link' to = '/' activeClassName = 'active'>
                    Home
                </NavLink>
            </li>
            <li className='menu__item'>
                <NavLink className = 'menu__link' to = '/about' activeClassName = 'active'>
                    About
                </NavLink>
            </li>
            <li className='menu__item submenu'>
                <NavLink className = 'menu__link' to = '/topics' activeClassName = 'active'>
                    Topics
                </NavLink>
                <ul className="submenu__items">
                    <li className = 'submenu__item'>
                        <NavLink className = 'menu__link' to = '/topics/topic1'>
                            Topic 1
                        </NavLink>
                    </li>
                    <li className = 'submenu__item'>
                        <NavLink className = 'menu__link' to = '/topics/topic2'>
                            Topic 2
                        </NavLink>
                    </li>
                    <li className = 'submenu__item'>
                        <NavLink className = 'menu__link' to = '/topics/topic3'>
                            Topic 3
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className='menu__item'>
                <NavLink className = 'menu__link' to = '/contact' activeClassName = 'active'>
                    Contact
                </NavLink>
            </li>
            <li className='menu__item'>
                <NavLink className = 'menu__link' to = '/flexbox' activeClassName = 'active'>
                    Flexbox
                </NavLink>
            </li>
        </ul>
    )
}

export default Navmenu
