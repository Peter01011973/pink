import React from 'react';
import Header from '../header/header'
import { Footer } from '../footer/footer';

const Layout = (props) => {
    return (
        <div className = 'layout' style = {{textAlign: 'center'}}>
            <Header />
                {props.children}
            <Footer />  
        </div>
    )
}

export default Layout