import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';

function Header () {
    return (
        <div className='Header'>
            <ul>
            <h1>Three Acorns and a Squirrel</h1>
            <li><Link to='/'>
            <h1>About Us</h1>
          </Link>
          </li>
            </ul>
        </div>
    );
}

export default Header;