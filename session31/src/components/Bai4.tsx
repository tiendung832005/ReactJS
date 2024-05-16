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
            message: "Học code để đi làm"
    }
}
handleChange =()=>{
    this.setState({message: "Học code sẽ thành công. Cố lên!!"});
}
shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return false;
}
  render() {
    return (
      <div>
        <p>Slogan: {this.state.message}</p>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }

}
