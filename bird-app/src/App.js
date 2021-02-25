import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
//import Homepage from "./Homepage";
//import Show from "./Show";
import axios from 'axios';
class App extends Component {
constructor(props) {
super(props)
this.state = {
birds: []
}
}
componentDidMount = ()=>{
let response = axios.get('https://api.ebird.org/v2/data/obs/KZ/recent', {
headers: {
Accept: 'application/json'
}
})
.then(response =>{
console.log(response)
this.setState({
birds:response.data
})
})
}
render() {
// console.log(this.state)
console.log(this.state.birds)
return (
<div>
<Link to='/'>
<h1>Bird List</h1>
</Link>
</div>
);
}
}
export default App;