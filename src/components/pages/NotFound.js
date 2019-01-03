import React from 'react';
import logo from '../../img/myLogo.png';

export default () => {
    return(
        <div>
            <h1 className="display-4"><span className="text-danger">404</span> Page Not Found</h1>
            <p className="lead">Sorry, that page does not exist</p>
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
            </div>
        </div>
    );
};