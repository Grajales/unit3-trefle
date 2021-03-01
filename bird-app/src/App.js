import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import Search from './Search';
import AboutMe from './AboutMe/AboutMe';
import Show from './Show/Show';
const FRUIT_SEARCH = '&q=coconut'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      species: this.props.species
    }
  }
  componentDidMount = () => {
    let config = {
      // headers: {
      //        }
    }
    let response = axios.get('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals'+FRUIT_SEARCH)
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
    console.log("plants", this.state.plants)
    console.log('Species', this.props.species)
    return (
      <div>
        <main>

          <Link to='/'>
            <h1>Header</h1>
          </Link>
          <Link to='/aboutme/'>
            <h1>About Us</h1>
          </Link>

          <Switch>

            <Router>
              <Route exact path='/aboutme/' component={AboutMe} />
            </Router>
              <Route path='/search/'
                render={(routerProps) =>
                  <Search {...this.state} />
                }>
              </Route>
              <Route path='/show/'
                render={(routerProps) =>
                  <Show species={this.state} {...routerProps} />
                }>
              </Route>
          </Switch>

        </main >

      </div >
    );
  }
}

export default App;