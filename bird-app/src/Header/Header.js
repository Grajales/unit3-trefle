import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';
import ThreeAcorns from './three_acorns.jpg';

function Header () {
    return (
        <div className='Header'>
            <ul>
            <img src={ThreeAcorns} alt="three acorns image" className='Header-logo' />
            <h1>Three Acorns and a Squirrel</h1>
            <li><Link to='/aboutme'>
            <h2>About Us</h2>
          </Link>
          </li>
            </ul>
        </div>
    );
}

export default Header;