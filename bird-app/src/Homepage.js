import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Homepage.css';
import plantArray from './plantArray';
import Header from './Header/Header';
import Footer from './Footer/Footer';


class Homepage extends Component {

    render() {
        console.log("Homepage")
        console.log(plantArray[0].image_url)
        let plantPhoto = plantArray[0].image_url;

        return (

            <div className='Homepage'>
                <div className='column'>
                    <img src={plantPhoto} alt="Flowers" />
                </div>
                <div className='column'>
                    <img src={plantPhoto} alt="Trees" />
                </div>
                <div className='column'>
                    <img src={plantPhoto} alt="Vegetables" />
                </div>

            </div>

        )

    }
}

export default Homepage;