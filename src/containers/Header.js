import React, {Component} from 'react';


const Header = () => {

    return (
        <div className="container-full">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="../../assets/images/icon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    &nbsp;La mia lista delle cose da fare
                </a>
            </nav>
        </div>
    );

};

export default Header;