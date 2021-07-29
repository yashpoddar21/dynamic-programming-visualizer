import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      status,
      val, 
    } = this.props;
    var extraClassName;
    if(status === -1){
      const extraClassName = ''
    }
    else if(status === 1){
      const extraClassName = 'node-true'
    }
    else if(status === 0){
      const extraClassName = 'node-false'
    }
    
    return (
      <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}>{val}</div>
    );
  }
}