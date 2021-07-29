import React, {Component, useRef} from 'react';

import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {isMatch} from '../algorithms/wildcard';
import {subsetSum} from '../algorithms/subsetsum';

import './PathfindingVisualizer.css';
import userEvent from '@testing-library/user-event';


const START_NODE_ROW = 0;
const START_NODE_COL = 0;
const FINISH_NODE_ROW = 4;
const FINISH_NODE_COL = 4;


export default class Palindrome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: [], 
      };
    }

componentDidMount() {
    console.log('palindrome')
    console.log(this.props)
    console.log("Input string is")
    const grid = getInitialGrid();
    this.setState({grid});
}

animateDijkstra(visitedNodesInOrder) {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        console.log("from animate")
        console.log(node)
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

animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

visualizeDijkstra() {
  var {isPalindrome} = false; 
  var {isWildCard} = false; 
  var {isSubsetSum} = false;
  const {stringPalindrome, input2, input3, input4, input5, topic} = this.props; 
  console.log("input 2 is");
  console.log({input2});
  console.log("input 3 is");
  console.log({input3});
  console.log("topic is");
  console.log({topic});


  if(stringPalindrome !== '' && topic === 'Longest Palindromic Substring'){
      isPalindrome = true; 
  }
  if(input2 !== '' && input3 != '' && topic === 'Wild Card Matching'){
    isWildCard = true; 
  }
  if(input4 !== '' && input5 !== '' && topic === 'Subset Sum'){
    isSubsetSum = true; 
  }
  console.log("input 4 is ")
  console.log(input4)
  console.log("input 5 is ")
  console.log(input5)
  console.log("isSubsetSum")
  console.log(isSubsetSum)
  if(isPalindrome){
    const visitedNodesInOrder = dijkstra(stringPalindrome);
    console.log("visited nodes are")
    console.log(visitedNodesInOrder)
    this.animateDijkstra(visitedNodesInOrder);
  }
  else if(isWildCard){
    const visitedNodesInOrder = isMatch(input2, input3);
    console.log("visitedNodesInOrder")
    console.log(visitedNodesInOrder)
    this.animateDijkstra(visitedNodesInOrder);
  }
  else if(isSubsetSum){
    console.log("Reached isSubsetSum statement")
    const values = (input4).toString(10).split("").map(function(t){return parseInt(t)})
    const n = values.length; 
    console.log("Array is")
    console.log(values)
    console.log("n is")
    console.log(n)
    console.log("target is")
    console.log(input5)
    const visitedNodesInOrder = subsetSum(values, input5); 
    console.log("answer is")
    console.log(visitedNodesInOrder)
    this.animateDijkstra(visitedNodesInOrder);
  }
  else{
    console.log("Reached else statement")
    console.log("this is props")
    console.log(this.props)
    const {grid} = this.state;
    const visitedNodesInOrder = dijkstra(stringPalindrome);
    console.log(visitedNodesInOrder)
    const x = 123456789
    const n = (x).toString(10).split("").map(function(t){return parseInt(t)})
    console.log("Array is")
    console.log(n)
    this.animateDijkstra(visitedNodesInOrder);

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
  console.log("Reached reset grid")
    const {grid} = this.state; 
    
    
    return(
        <>
          <button onClick={() => this.visualizeDijkstra()} className = "visualize-button">
          Visualize
        </button>  
        <button onClick={() => this.reset()} className = "reset-button">
          Reset
        </button> 
        <p> Button</p>
        <h3>We are building a Bottom Up DP Table</h3>
        <div className = "grid">
            {grid.map((row, rowIdx) => {
                return (
                    <div key = {rowIdx}>
                        {row.map((node, nodeIdx) =>{
                            const {row, col, isFinish, isStart, val, status} = node;
                            if(rowIdx === 0 && nodeIdx === 0){
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    isFinish={isFinish}
                                    isStart={isStart}
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
                                    isFinish={isFinish}
                                    isStart={isStart}
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
                                    isFinish={isFinish}
                                    isStart={isStart}
                                    status = {status}
                                    val = {rowIdx - 1}
                                    row={row}></Node>
                            ); }
                            else{
                              return(
                                <Node
                                    key={nodeIdx}
                                    col={col}
                                    isFinish={isFinish}
                                    isStart={isStart}
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
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      status: -1, 
      distance: Infinity,
      val: '', 
      isVisited: false,
      previousNode: null,
    };
  };

