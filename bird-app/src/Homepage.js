import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './Homepage.css';
import plantArray from './plantArray';
import DropDownList from "./HomePageList";

class Homepage extends Component {
    render() {
        console.log("Homepage")
        console.log(plantArray[0].image_url)
        let plantPhoto = plantArray[0].image_url;
        let flowerList = DropDownList[2];
        let fruitList = DropDownList[0];
        let veggieList = DropDownList[1];
        // const plantsList = this.props.plantArray.map((value, index) =>
        //     <div key={index}>
        //         <div class='overlay-image'>
        //             {<p>{value.common_name}</p>}
        //         </div>
        //         <img src={value.imageURL}></img>
        //     </div>

        // )
        return (
            <div className='Homepage'>
                <form className='Search-Form'>
                    <div class='column'>
                        <div className='Flower'>
                            <label className='Search-Flower' >Flowers </label>
                        </div>
                        <img src={plantPhoto} alt="Flowers" />
                    </div>
                    <div className='Search-Common-Name'>
                        <label className='Search-Common-Name' >Select a Flower </label>
                        <select name="birdsList" id="plants-list">
                            <option value="">Choose flower</option>
                            <option value="flower1">{flowerList[0]}</option>
                            <option value="flower2">{flowerList[1]}</option>
                            <option value="flower3">{flowerList[2]}</option>
                        </select>
                        <button className='Search-Button' onClick={this.handleSearch}>Search</button>
                    </div>

                    <div class='column'>
                        <div className='Fruit'>
                            <label className='Search-Fruit-L' >Fruit</label>
                        </div>
                        <img src={plantPhoto} alt="Trees" />
                    </div>
                    <label className='Search-Common-Name' >Select a Fruit </label>
                    <select name="birdsList" id="plants-list">
                        <option value="">Choose fruit</option>
                        <option value="fruit1">{fruitList[0]}</option>
                        <option value="fruit2">{fruitList[1]}</option>
                        <option value="fruit3">{fruitList[2]}</option>
                    </select>
                    <button className='Search-Button' onClick={this.handleSearch}>Search</button>

                    <div class='column'>
                        <div className='Vegetable'>
                            <label className='Search-Vegetable-L' >Vegetable</label>
                        </div>
                        <img src={plantPhoto} alt="Vegetables" />
                    </div>
                    <label className='Search-Common-Name' >Select a Vegetable </label>
                    <select name="birdsList" id="plants-list">
                        <option value="">Choose vegetable</option>
                        <option value="veggie1">{veggieList[0]}</option>
                        <option value="veggie2">{veggieList[1]}</option>
                        <option value="veggie3">{veggieList[2]}</option>
                    </select>
                    <button className='Search-Button' onClick={this.handleSearch}>Search</button>

                </form>
            </div>
        )
    }
}

export default Homepage;




