import { render } from '@testing-library/react';
import React, { useState, useRef, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';


import Form from './Form'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Form />
			</div>
		)
	}
}

export default App

