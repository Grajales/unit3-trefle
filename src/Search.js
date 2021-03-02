import React, { Component } from 'react';
import plantArray from './Homepage/Assets/Testdata/plantArray';

const COMMON_NAME_CB = 1;
const BIRD_LIST_DD = 2; //Drop-Down List
const SCI_NAME_CB = 3;
const LATLON_CB = 4;
const LOCATION_NAME_CB = 5;




class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            common_name: '',
            family: '',
            scientific_name: '',
            imageURL: ''
        }
    }

    

    handleSearch = (event) => {
        event.preventDefault();

        console.log('submit clicked');
        console.log(event.target.form);
        // The following Index is +1 on the props array index as we have choose selection in the first (index 0) value
        console.log("Selected DD item index is : " + event.target.form[BIRD_LIST_DD].options.selectedIndex);
        console.log("Common Name CB is: " + event.target.form[COMMON_NAME_CB].checked)
        console.log("Scientific Name CB is: " + event.target.form[SCI_NAME_CB].checked)
        console.log("Lat Lon CB is: " + event.target.form[LATLON_CB ].checked)
        console.log("Location Name CB is: " + event.target.form[LOCATION_NAME_CB].checked)
    }

    getComName = (value) => {
        if (this.state.comName) {
            if (value.comName === this.state.comName) {
                return true;
            }
        }
        return false;
    }

    render() {

        console.log('NEW - plantArray');
        console.log( plantArray[0]);
        console.log( plantArray[1]);
        console.log( plantArray[2]);
        


        console.log(`Search is here`);
        let imageURL = "";

        //simplifies naming
        const pPlants = this.props.plants;
        console.log(pPlants);
        if (pPlants.data) {
            
            
            console.log(pPlants.data);
            console.log(pPlants.data[0]);
            console.log(pPlants.data[0].common_name);
            console.log(pPlants.data[0].image_url);
            
            imageURL = pPlants.data[0].image_url.replace('https','http');
            console.log(imageURL);
        }
        
        

        // let cnIndex = pPlants.findIndex(this.getComName);


        // console.log("Search Common Name = index: " + cnIndex);
        // console.log(pPlants[cnIndex]);

        return (
            <div className='Search'>
                <h1 className='Search-Hdr'>Search Page</h1>
                <form className='Search-Form'>
                    <button className='Search-Button' onClick={this.handleSearch}>Search</button>
                    <div className='Search-Common-Name'>
                        <input type='checkbox' disabled readOnly checked='1' name='common-name' className='Search-Common-Name-Cb' />
                        <label className='Search-Common-Name' >Common Name</label>
                        <select name="birdsList" id="plants-list">
                            <option value="">Choose bird</option>
                            <option value="White-tailed Eagle">White-tailed Eagle</option>
                            <option value="Mew Gull">Mew Gull</option>
                            <option value="Mute Swan">Mute Swan</option>
                        </select>
                    </div>
                    <img src={imageURL} alt=""/>
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
        );
    }
}

export default Search; // Don't export as unused, we will delete shortly.