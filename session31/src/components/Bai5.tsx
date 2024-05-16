import React, { Component } from 'react';
interface Props{

}
interface State{
    status: string;    
}
export default class Bai5 extends Component<Props,State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      status: 'Open the form'
    };
  }

  handleClick = () => {
    this.setState({ status: 'Close the form' });
  }

  render() {
    return (
      <div>
        <p>Status: {this.state.status}</p>
        <button onClick={this.handleClick}>Change props</button>
      </div>
    );
  }
}
