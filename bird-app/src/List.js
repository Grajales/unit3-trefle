import React, { Component } from 'react';
import './List.css';
import Show from './Show/Show';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// START URL Build

//Example URL:  https://trefle.io/api/v1/species/cocos-nucifera?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals
//In order, we have..
const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const BASE2_URL = 'https://trefle.io/api/v1/species/';
const TOKEN = "?&token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals";
const SEARCH_QUALIFIER = '&q=';
//Species hyphenated name here, local variable: hyphenedSpeciesName

// End URL Build

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSpecies: "",
            species: [],
            
        }
    }

    handleSelection = (event) => {

        event.preventDefault();
        
        // console.log('Species selected', event.target.innerText);
        
        let hyphenedSpeciesName = "";
        hyphenedSpeciesName = event.target.innerText.replace(" ", "-");

        // console.log(tempString);
        // console.log(CORS_URL + BASE2_URL + TOKEN + SEARCH_QUALIFIER + hyphenedSpeciesName);

        let response = axios.get(CORS_URL + BASE2_URL+ TOKEN + SEARCH_QUALIFIER + hyphenedSpeciesName)
            .then(response => {
                this.setState({ species: response.data.data });
                this.setState({ selectedSpecies: event.target.innerText});

                console.log("got species: ", this.state);
            })
            .catch(error => {
                console.log('LIST ERROR:', error);
            })
    }

    render() {



        let speciesNameList = []
        let speciesNames = this.props.species
        
        console.log("List props", this.props)

        if (speciesNames !== undefined) {
            for (let i = 0; i < speciesNames.length; i++) {
                speciesNameList[i] =
                    <li key={i}><a href="#" className='Species-Select-tag' onClick={this.handleSelection}>
                        {speciesNames[i]}
                    </a></li>
            }
        }

        console.log('species name list: ', speciesNameList);

        return (
            <div>
                <form className='List-Form'>
                    <h1>Species List</h1>
                    <div>
                        <label for="Species-List">Select a species from the list below to learn more about it:</label>
                        <ul>
                            {speciesNameList}
                        </ul>
                    </div>


                    {/* need to remove Route from Apps.js */}
                    < Route path='/show/'
                        render={(routerProps) =>
                            <Show species={this.state} {...routerProps} />
                        }>
                    </Route>

                </form>
            </div>
        );
    }
}
export default List;