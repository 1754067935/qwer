import './App.css';
import React, { Component } from 'react'
import Home from './pages/Home'
import Mei from './pages/meishi'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class App extends Component {
	render(){
		return(
			<div className="App">
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/mei" component={Mei}/>
					<Redirect from="/" to="/home"/>
				</Switch>
			</div>
		)
	}
}

