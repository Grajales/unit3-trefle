import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './Homepage.css';
import plantArray from './plantArray';
import Header from './Header/Header';
import Footer from './Footer/Footer';


class Homepage extends Component {

    render () {
        console.log("Homepage")
        console.log(plantArray[0].image_url)
        let plantPhoto = plantArray[0].image_url;

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
                 <div class='column'>
                    <img src={plantPhoto} alt="Flowers"/>
                </div>
                <div class='column'>
                    <img src={plantPhoto} alt="Trees"/>
                </div>
                <div class='column'>
                    <img src={plantPhoto} alt="Vegetables"/>
                </div>

        </div>

    )

}
}

export default Homepage;




/*
<div className='Search'>
<h1 className='Search-Hdr'>Search Page</h1>
<form className='Search-Form'>
    <button className='Search-Button' onClick={this.handleSearch}>Search</button>
    <div className='Search-Common-Name'>
        <input type='checkbox' disabled readOnly checked='1' name='common-name' className='Search-Common-Name-Cb' />
        <label className='Search-Common-Name' >Common Name</label>
        <select name="birdsList" id="plants
        -list">
            <option value="">Choose bird</option>
            <option value="White-tailed Eagle">White-tailed Eagle</option>
            <option value="Mew Gull">Mew Gull</option>
            <option value="Mute Swan">Mute Swan</option>
        </select>
    </div>
    <img src={imageURL}/>
    <div className='Search-Sci-Name'>
        <input type='checkbox' name='sci-name' className='Search-Sci-Name-Cb' />
        <label className='Search-Common-Name' >Scientific Name</label>
    </div>
    <div className='Search-LatLon'>
        <input type='checkbox' name='latlon' className='Search-LatLon-Cb' />
        <label className='Search-LatLon-Label' >Lat/Lon</label>
    </div>
    <div className='Search-Location-Name'>
        <input type='checkbox' name='location-name' className='Search-Location-Name-Cb' />
        <label className='Search-Location-Name' >Location Name</label>
    </div>


</form>


</div>
*/