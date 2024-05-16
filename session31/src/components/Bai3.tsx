import React, { Component } from 'react';
interface Props{

}
interface State{
    company: string;    
}
export default class Bai3 extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      company: 'Rikkei Academy'
    };
  }

  handleClick = () => {
    this.setState({ company: 'RikkeiSoft' });
  }

  render() {
    return (
      <div>
        <p>Company: {this.state.company}</p>
        <button onClick={this.handleClick}>Change Company</button>
      </div>
    );
  }
}
