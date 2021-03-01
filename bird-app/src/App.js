import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
//import Homepage from "./Homepage";
//import Show from "./Show";
import axios from 'axios';
import Search from './Search';
import Show from './Show/Show';
import List from './List';
import DropDownList from "./HomePageList";

const BASE_URL = 'https://trefle.io/api/v1/plants/search?'
const CORS_URL = "https://cors-anywhere.herokuapp.com/"
const TOKEN = "token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals"
const PQUERY = "&q="
const FRUIT = 0
const VEGGIE = 1
const FLOWER = 2


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      speciesList: [],
      species: []
    }
  }
  componentDidMount = () => {
    let config = {
      // headers: {
      //        }
    }

    let response = axios.get(CORS_URL+BASE_URL+TOKEN+PQUERY+ DropDownList[FRUIT][0])
       .then(response => {
        console.log(response)
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
    console.log("plants",this.state.plants)
    let chosenData = this.state.plants.data
    
    if (chosenData){
      
      for (let i=0; i<chosenData.length; i++){
        this.state.speciesList[i] = chosenData[i].links.self
        this.state.species[i] = chosenData[i].scientific_name

      }
      console.log(this.state.speciesList)
      console.log(this.state.species)
    }
    
    // for (let i=0; i<)
    return (
      <div>
        <main>
          <Link to='/'>
            <h1>Header</h1>
          </Link>
          <Switch>
            <Route path='/search/'
              render={(routerProps) =>
              <Search {...this.state} />
              }> 
              </Route>
              <Route path='/list/'
              render={(routerProps) =>
              <List {...this.state} />
              }> 
              </Route>
            <Route path='/show/'
              render={(routerProps) =>
              <Show species={this.state} {...routerProps} />
              }> 
              </Route>
          </Switch>

        </main>

      </div>
    );
  }
}

export default App;