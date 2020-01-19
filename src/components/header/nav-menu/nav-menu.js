import React from 'react';
import './nav-menu.css';

const Navmenu = () => {
    return (
            <ul className='menu'>
                <li className='menu__item'><a>Home</a></li>
                <li className='menu__item'><a>About</a></li>
                <li className='menu__item submenu'><a>Menu</a>
                    <ul className="submenu__items">
                        <li className = 'submenu__item'>Item 1</li>
                        <li className = 'submenu__item'>Item 2</li>
                        <li className = 'submenu__item'>Item 3</li>
                    </ul>
                </li>
                <li className='menu__item'><a>Contact</a></li>
            </ul>
    )
}

export default Navmenu
