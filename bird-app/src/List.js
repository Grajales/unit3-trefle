import React, { Component } from 'react';
import './List.css';
import Show from './Show/Show';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';


/* Working URL w/o CORS
    https://trefle.io/api/v1/species/search?q=Abies%20alba&limit=3&token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals
*/
const CORS_URL = "https://cors-anywhere.herokuapp.com/" //Why don't we need CORS here but do on APP... very strange indeed.
const BASE_URL = 'https://trefle.io/api/v1/species/search?q='
let species = "Abies%20alba"; //"cocos-nucifera"
const PAGE_LIMIT = "&limit=3"
const TOKEN = "&token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals"
//const QSPECIES = "api/v1/species/"  ;//  didn't work... plan to delete

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            species: [],
            selectedSpecies: "",
        }
    }

    handleSelection = (event) => {
        event.preventDefault();
        console.log('Species selected', event.target.innerText);

        this.setState({ selectedSpecies: event.target.innerText });

        let response = axios.get(CORS_URL + BASE_URL + this.state.selectedSpecies + PAGE_LIMIT + TOKEN)
            .then(response => {
                this.setState({ species: response.data.data });

                console.log("got species: ", this.state);
            })
            .catch(error => {
                console.log('LIST ERROR:', error);
            })
    }

    render() {

        let speciesNameList = []
        let speciesNames = this.props.species
        console.log("List", speciesNames)

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