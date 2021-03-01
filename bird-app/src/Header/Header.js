import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';

function Header () {
    return (
        <div className='top'>
            <h1>Three Acorns and a Squirrel</h1>
            <ul>
            <li><Link to='/'>
            <h1>Plants List</h1>
          </Link>
          </li>
            </ul>
        </div>
    );
}

export default Header;