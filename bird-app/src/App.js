import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
//import Homepage from "./Homepage";
//import Show from "./Show";
import axios from 'axios';
import Search from './Search';
import Show from './Show';



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
    let response = axios.get('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals')
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
    console.log('Species',this.props.species)
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