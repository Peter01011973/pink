import React from 'react';
import './logo.css'

const Logo = (props) => {
    console.log(props);
    
    return (
        <div className = 'logo'>
            <h3 className = 'logo__title'>My site</h3>            
        </div>
    )
}

export default Logo

