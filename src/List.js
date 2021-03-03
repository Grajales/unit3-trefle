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
// const TOKEN = "?&token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals";
const TOKEN = "?&token=cULsILGocMVtRzurtWWwSN1TQ6kXv7Ek78qeA9nPZjM";
const SEARCH_QUALIFIER = '&q=';
//Species hyphenated name here, local variable: hyphenedSpeciesName
//https://trefle.io/api/v1/species/cocos-nucifera?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals
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

        let response = axios.get(CORS_URL + BASE2_URL + hyphenedSpeciesName + TOKEN )
        //let response = axios.get(BASE2_URL + TOKEN + SEARCH_QUALIFIER + hyphenedSpeciesName)
            .then(response => {
                this.setState({ species: response.data.data });
                this.setState({ selectedSpecies: event.target.innerText });

                console.log("got species: ", this.state);

                //redirect
            })
            .catch(error => {
                console.log('LIST ERROR:', error);
            })
    }

    showSpeciesList() {

        let speciesNameList = [];
        let speciesNames = this.props.species;

        console.log("List props", this.props);
        console.log('species name list: ', speciesNameList);

        
        if (speciesNames !== undefined) {
            for (let i = 0; i < speciesNames.length; i++) {
                speciesNameList[i] =
                    <li key={i}><a href="#" className='Species-Select-tag' onClick={this.handleSelection}>
                        {speciesNames[i]}
                    </a></li>
            }
        }

        return (

            <form className='List-Form'>
                <br></br>
                <h1>Species List</h1>
                <div className="List">
                    <label for="Species-List">Select a species from the list below to learn more about it:</label>
                    <br></br>
                    <br></br>
                    <ul>
                        {speciesNameList}
                    </ul>
                    <br></br>
                </div>
            </form>

        )



    }

    redirectToShowPage() {

        return (
            <Redirect
                to={{
                    pathname: `/show/${this.state.selectedSpecies}`,
                    state: this.state
                }}
            />
        )
    }

    render() {
        return (
            <div>
                { ( this.state.selectedSpecies != "" ) ? this.redirectToShowPage() : this.showSpeciesList() }
            </div>
        );
    }
}
export default List;