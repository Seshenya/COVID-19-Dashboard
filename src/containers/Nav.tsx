import React from 'react';
import logo from '../assets/logo-hpb.png';



function Nav(){
    return(
        <div className="nav">
            <img className="logo" src={logo}/>
            <div className="Nav-header">
                <span>COVID-19 Live Situational Analysis Dashboard of Sri Lanka</span>
            </div>
            
        </div>
    )
}

export default Nav;