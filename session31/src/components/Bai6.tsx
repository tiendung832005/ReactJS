import React, { Component } from 'react'
interface Props{

}
interface State{
    message: string,
}
export default class Bai4 extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            message: "Interface rendering"
    }
}
handleChange =()=>{
    this.setState({message: "Interface rendering"});
}
shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return false;
}
  render() {
    return (
      <div>
        <p>Message: {this.state.message}</p>
        <button onClick={this.handleChange}>Change props</button>
      </div>
    )
  }

}
