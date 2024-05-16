import React, { Component } from 'react'

interface Props{
    name: string;
}
interface State{
    name: string;
}
export default class Bai1 extends Component<Props,State> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
            name: "minh thu"
        }
    }
    componentDidMount(): void {
        console.log("đã dc mount");
        
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
      </div>
    )
  }
}
