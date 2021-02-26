import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
//import Homepage from "./Homepage";
//import Show from "./Show";
import axios from 'axios';
import Search from './Search';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: []
    }
  }
  componentDidMount = () => {
    let config = {
      headers: {
        'X-eBirdApiToken': 'ds3o3kshtmmo',
      }
    }
    let response = axios.get('https://api.ebird.org/v2/data/obs/KZ/recent', config
    )
      .then(response => {
        console.log(response)
        this.setState({
          birds: response.data
        })

      })
      .catch(error => {
        console.log('look here', error)
      })
  }
  render() {
    // console.log(this.state)
    console.log(this.state.birds)
    return (
      <div>
        <main>
          <Link to='/'>
            <h1>Bird List</h1>
          </Link>
          <Switch>
            <Route to='/search/'
              render={(props) =>
              (<Search {...this.state} />
              )}
            />
          </Switch>

        </main>

      </div>
    );
  }
}

export default App;