import React, {Component} from 'react'
interface Props{

}
interface State{
    name: string,
}
export default class Exercises01 extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            name: "Nguyễn Minh Sơn",
        }
    };
    render() {
  return (
    <div>Bài 1
        Họ và tên: {this.state.name}
        <hr />
    </div>
  )
}
}

