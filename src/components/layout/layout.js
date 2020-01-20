import React from 'react';
import Header from '../header/header'
import { Footer } from '../footer/footer';
import './layout.css'

const Layout = (props) => {
    return (
        <div className = 'layout'>
            <div className = 'layout__header'>
                <Header />
            </div>
            <div className = 'layout__main'>
                {props.children}
            </div>
            <div className = 'layout__footer'>
                <Footer />
            </div>  
        </div>
    )
}

export default Layout