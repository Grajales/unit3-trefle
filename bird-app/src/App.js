import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import Homepage from "./Homepage";
//import Show from "./Show";
import axios from 'axios';
import Search from './Search';
import Header from './Header/Header'
import Footer from './Footer/Footer'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: []
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
    console.log(this.state.plants)
    return (
      <div className="App">
        <main>
          <Header></Header>
          <Switch>
            <Router>
              <Route to='/homepage/'
                render={(props) =>
                (<Homepage {...this.state} />
                )}
              />
            </Router>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;