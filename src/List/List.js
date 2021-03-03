import React, { Component } from 'react';
import './List.css';
import Show from '../Show/Show';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

// START URL Build

//Example URL:  https://trefle.io/api/v1/species/cocos-nucifera?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals
//In order, we have..
// const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const CORS_URL = 'http://api.allorigins.win/get?url=';
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

        let getURL = CORS_URL + encodeURIComponent(BASE2_URL + hyphenedSpeciesName + TOKEN);


        let response = axios.get(getURL)
        //let response = axios.get(BASE2_URL + TOKEN + SEARCH_QUALIFIER + hyphenedSpeciesName)
            .then(response => {

                response.data.contents = JSON.parse(response.data.contents);
                console.log("List response: ", response)
                
                this.setState({ species: response.data.contents.data });
                this.setState({ selectedSpecies: event.target.innerText });

                console.log("got species: ", this.state);

                //redirect
            })
            .catch(error => {
                console.log('LIST ERROR:', error);
            })
    }

    showSpeciesList() {

        let speciesNameListHTML = []; // Used to store HTML
        // let speciesNames = this.props.species;
        // let speciesNames = this.props.location.state.userSelection;

        let speciesNames = this.props.location.state.plantList.map( (value, index) => {
            return value = this.props.location.state.plantList[index].scientific_name
        })


        console.log("List props", this.props);
        console.log(speciesNames);
        console.log('species name list: ', speciesNameListHTML);

        
        if (speciesNames !== undefined) {
            for (let i = 0; i < speciesNames.length; i++) {
                speciesNameListHTML[i] =
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
                        {speciesNameListHTML}
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

        console.log("List props: ", this.props)

        return (
            <div>
                { ( this.state.selectedSpecies !== "" ) ? this.redirectToShowPage() : this.showSpeciesList() }
            </div>
        );
    }
}
export default List;