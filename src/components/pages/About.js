import React from 'react';
import logo from '../../img/myLogo.png';

export default () => {
    return(
        <div>
            <h1 className="display-4"><span className="text-cust">About</span> Contact Manager</h1>
            <p className="lead">Simple app to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
            </div>
        </div>
    );
}