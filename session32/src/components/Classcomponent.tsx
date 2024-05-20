import React, { Component } from 'react'
interface Props{

}
interface State{
    count: number;
    interval: any;
}
let interval: any;
export default class Classcomponent extends Component {
    constructor(props: Props){
        super(props)
        this.state = {
            count: 0,
            
        }
    }

    componentDidMount(): void {
        const interval = setInterval(()=>{
            console.log("hàm interval dc chạy");
            
        },2000)
    }
    handleClick=()=>{
        clearInterval(interval);
    }
  render() {
    return (
      <div>Classcomponent</div>
    )
  }
}
