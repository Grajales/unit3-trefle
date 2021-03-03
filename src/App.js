import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import Search from './Search'; // Used for initial code dev, not needed in production
import AboutMe from './AboutMe/AboutMe';
import Show from './Show/Show';
import List from './List/List';
import DropDownList from "./Homepage/HomePageList";
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Homepage from './Homepage/Homepage'
import './Show/Show.css';
import './Header/Header.css';

const BASE_URL = 'https://trefle.io/api/v1/plants/search?'
// const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const CORS_URL = 'https://api.allorigins.win/get?url=';
const TOKEN = "token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals"
const TEST_URL = 'https://trefle.io/api/v1/plants/search?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals&q=coconut';
const PQUERY = "&q="
const FRUIT = 0
const VEGGIE = 1
const FLOWER = 2


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlantName: "",
      plants: [],
      speciesList: [],
      species: [],

    }
  }

  componentDidMount = () => {
    let config = {
      // headers: {
      //        }
    }

    let getURL = CORS_URL + encodeURIComponent(TEST_URL);
    console.log("App getURL: ", getURL);

    // let response = axios.get(CORS_URL + BASE_URL + TOKEN + PQUERY + DropDownList[FRUIT][0])
    let response = axios.get(getURL)
      .then(response => {
        console.log("App response: ", response);
        response.data.contents = JSON.parse(response.data.contents);
        this.setState({
          plants: response.data
        })

      })
      .catch(error => {
        console.log('look here', error)
      })
  }

  render() {
    // console.log(this.state)
    // console.log("plants", this.state.plants)
    let chosenData = this.state.plants.data

    if (chosenData) {

      for (let i = 0; i < chosenData.length; i++) {
        this.state.speciesList[i] = chosenData[i].links.self
        this.state.species[i] = chosenData[i].scientific_name

      }
      console.log(this.state.speciesList)
      console.log(this.state.species)
    }

    // for (let i=0; i<)
    return (
      <div className="App">
        <main>

          <Header></Header>

          <Switch>
            <Route exact path='/aboutme/' component={AboutMe} />

            <Route exact path='/'
              render={(props) =>
                <Homepage {...this.state} />
              }>
            </Route>
            
            <Route exact path='/list/:userSelection'
              render={(routerProps) =>
                <List {...routerProps} />
              }>
            </Route>
            
            <Route path='/show/:SpeciesName'
              render={(routerProps) =>
                <Show {...routerProps} />
              }>
            </Route>
          </Switch>

        </main >
        <Footer></Footer>
      </div >
    );
  }
}

export default App;