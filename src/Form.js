import React, { Component, useState, useCallback } from 'react'
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import './Form.css';

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input1: '',
			input2: '',
			input3: '', 
			input4: '', 
			input5: '',
			topic: 'Longest Palindromic Substring',
			haveSubmitted: false
		}
	}

	handleInput1Change = event => {
		this.setState({
			input1: event.target.value
		})
	}

	handleInput2Change = event => {
		this.setState({
			input2: event.target.value
		})
	}
	handleInput3Change = event => {
		this.setState({
			input3: event.target.value
		})
	}
	handleInput4Change = event => {
		this.setState({
			input4: event.target.value
		})
	}
	handleInput5Change = event => {
		this.setState({
			input5: event.target.value
		})
	}

	handleTopicChange = event => {
		console.log("Reached topic")
		this.setState({
			topic: event.target.value
		})
	}


	handleSubmit = event => {
		console.log("Reached Here")
        event.preventDefault()
        const data = this.state
        console.log("Reached here")
        console.log(data)
		this.setState({haveSubmitted: true})
		console.log("Memo status")
		console.log(this.state.haveSubmitted)
		alert("You have submitted your data, please press visualize to visualize the DP Table")
	}


	render() {
		const { input1, input2, input3, input4, input5, topic, haveSubmitted } = this.state;
		
		if(haveSubmitted){
			return(
				<>
				<div class = "box"></div>
			<form onSubmit={this.handleSubmit}>
				<div className = "input1">
					<input
						type="text"
						value={input1}
						placeholder = "String for Longest Palindromic Substring"
						onChange={this.handleInput1Change} className = "input1"
					/>
				</div>
				<div className = "input2">
					<input
						type = "text"
						value={input2}
						onChange={this.handleInput2Change} className = "input2"
						placeholder = "Text for Wildcard Matching"
					/>
				</div>
				<div className = "input3">
					<input
						type = "text"
						value={input3}
						onChange={this.handleInput3Change} className = "input3"
						placeholder = "Pattern for Wildcard Matching"
					/>
				</div>
				<div className = "input4">
					<input
					 	type = "text"
						value={input4}
						onChange={this.handleInput4Change} className = "input4"
						placeholder = "Array without commas, spaces, and brackets"
					/>
				</div>
				<div className = "input5">
					<input 
						type = "text"
						value={input5}
						onChange={this.handleInput5Change} className = "input5"
						placeholder = "Target Sum"
					/>
				</div>
				<div className = "menu-bar">
					<select value={topic} onChange={this.handleTopicChange} className = "option-bar">	
						<option value="Longest Palindromic Substring">Longest Palindromic Substring</option>
						<option value="Subset Sum">Subset Sum</option>
						<option value="Wild Card Matching">Wild Card Matching</option>
					</select>
				</div>
				<button type="submit" className = "submit-button">Submit</button>
			</form>
			<PathfindingVisualizer stringPalindrome = {input1}
							input2 = {input2} input3 = {input3} input4 = {input4} 
										input5 = {input5} topic = {topic}></PathfindingVisualizer>
			</>
			)
		}
		else{
			return(
				<>
				<div class = "box"></div>
			<form onSubmit={this.handleSubmit}>
				<div className = "input1">
					<input
						type="text"
						value={input1}
						placeholder = "String for Longest Palindromic Substring"
						onChange={this.handleInput1Change} className = "input1"
					/>
				</div>
				<div className = "input2">
					<input
						type = "text"
						value={input2}
						onChange={this.handleInput2Change} className = "input2"
						placeholder = "Text for Wildcard Matching"
					/>
				</div>
				<div className = "input3">
					<input
						type = "text"
						value={input3}
						onChange={this.handleInput3Change} className = "input3"
						placeholder = "Pattern for Wildcard Matching"
					/>
				</div>
				<div className = "input4">
					<input
					 	type = "text"
						value={input4}
						onChange={this.handleInput4Change} className = "input4"
						placeholder = "Array without commas, spaces, and brackets"
					/>
				</div>
				<div className = "input5">
					<input 
						type = "text"
						value={input5}
						onChange={this.handleInput5Change} className = "input5"
						placeholder = "Target Sum"
					/>
				</div>
				<div className = "menu-bar">
					<select value={topic} onChange={this.handleTopicChange} className = "option-bar">	
						<option value="Longest Palindromic Substring">Longest Palindromic Substring</option>
						<option value="Subset Sum">Subset Sum</option>
						<option value="Wild Card Matching">Wild Card Matching</option>
					</select>
				</div>
				<button type="submit" className = "submit-button">Submit</button>
			</form>
			</>
			)
		}
	}
}

export default Form