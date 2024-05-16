import React, { Component } from 'react'

export default class A extends Component {
    componentWillUnmount(): void {
        console.log("dsa");
        
    }
  render() {
    return (
      <div>A</div>
    )
  }
}
