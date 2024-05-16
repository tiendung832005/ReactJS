import React, { Component } from 'react'
interface Props{
}
interface State{
    name: string
}
export default class Class extends Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            name: "minh thu",
        }
    }
    handlClick = () => {
        this.setState({
            name: ("minh sơn"),
        })
    }
  render() {
    return (
      <div>
        <p>xin chào{this.state.name}</p>
        <button onClick={this.handlClick}></button>
      </div>
    )
  }
}
