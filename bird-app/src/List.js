import React, { Component } from 'react';
import './List.css';
import Show from './Show/Show';
import { Route, Link, Switch, Redirect } from "react-router-dom";
const BASE_URL = 'https://trefle.io/'
const CORS_URL = "https://cors-anywhere.herokuapp.com/"
const TOKEN = "token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals"
var speciesList = "api/v1/species/cocos-nucifera?" //this is an example

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //   componentDidMount = () => {
    //     let resp = axios.get(CORS_URL+BASE_URL+speciesList+TOKEN)
    //       .then(resp => {
    //        console.log(resp)
    //        this.setState({
    //          species: resp.data
    //        })

    //      })
    //      .catch(error => {
    //        console.log('look here', error)
    //      })
    //  }

    render() {

        let speciesNameList = []
        let speciesNames = this.props.species
        console.log("List", speciesNames)

        if (speciesNames !== undefined) {
            for (let i = 0; i < speciesNames.length; i++) {
                speciesNameList[i] = <li> {speciesNames[i]} </li>
            }
        }

        return (
            <div>
                <form className='List-Form'>
                    <h1>Species List</h1>
                    <ul>

                        {speciesNameList}
                    </ul>
                    {/* need to remove Route from Apps.js */}
                    <Route path='/show/'
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