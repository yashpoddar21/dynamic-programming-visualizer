import React, {Component} from 'react';

import Node from './Node/Node';
import {palindrome} from '../algorithms/palindrome';
import {isMatch} from '../algorithms/wildcard';
import {subsetSum} from '../algorithms/subsetsum';

import './PathFinder.css';


export default class Palindrome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: [], 
      };
    }

componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
}

animate(visitedNodes) {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        const node = visitedNodes[i];
        if(node.status === 0){
          document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-false';
        }
        else if(node.status === 1){
          document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-true';
        }
      }, 500 * i);
    }
  }


visualize() {
  var {isPalindrome} = false; 
  var {isWildCard} = false; 
  var {isSubsetSum} = false;
  const {stringPalindrome, input2, input3, input4, input5, topic} = this.props; 

  if(stringPalindrome !== '' && topic === 'Longest Palindromic Substring'){
      isPalindrome = true; 
  }
  if(input2 !== '' && input3 !== '' && topic === 'Wild Card Matching'){
    isWildCard = true; 
  }
  if(input4 !== '' && input5 !== '' && topic === 'Subset Sum'){
    isSubsetSum = true; 
  }
  if(isPalindrome){
    const visitedNodes = palindrome(stringPalindrome);
    this.animate(visitedNodes);
  }
  else if(isWildCard){
    const visitedNodes = isMatch(input2, input3);
    this.animate(visitedNodes);
  }
  else if(isSubsetSum){
    const values = (input4).toString(10).split("").map(function(t){return parseInt(t)})
    const visitedNodes = subsetSum(values, input5); 
    this.animate(visitedNodes);
  }
  else{
    

  }
  }
reset(){
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 27; col++) {
      document.getElementById(`node-${row}-${col}`).className =
          'node node';
    }
  }
}

render(){
    const {grid} = this.state; 
    
    
    return(
        <>
          <button onClick={() => this.visualize()} className = "visualize-button">
          Visualize
        </button>  
        <button onClick={() => this.reset()} className = "reset-button">
          Reset
        </button> 
        <div className = "grid">
            {grid.map((row, rowIdx) => {
                return (
                    <div key = {rowIdx}>
                        {row.map((node, nodeIdx) =>{
                            const {row, col, val, status} = node;
                            if(rowIdx === 0 && nodeIdx === 0){
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    status = {status}
                                    val = {val}
                                    row={row}></Node>
                                
                            ); 
                            }
                            else if(rowIdx === 0 && nodeIdx !== 0){
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    status = {status}
                                    val = {nodeIdx - 1}
                                    row={row}></Node>
                            ); 
                            }
                            else if(rowIdx !== 0 && nodeIdx === 0){
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    status = {status}
                                    val = {rowIdx - 1}
                                    row={row}></Node>
                            ); }
                            else{
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    status = {status}
                                    val = {val}
                                    row={row}></Node>
                            ); 
                            } 
                        })}
                    </div>
                ); 
                    })}
                    </div>
                    </>
    );
                }
            }

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 9; row++) {
    const currentRow = [];
    for (let col = 0; col < 27; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
    return {
      col,
      row,
      status: -1, 
      val: '', 
    };
  };

