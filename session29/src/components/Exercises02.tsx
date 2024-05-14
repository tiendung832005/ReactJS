import React, {Component} from 'react'
interface Props{

}
interface State{
    id: number;
    name: string;
    date: string;
    address: string;
}
export default class Exercises02 extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state={
            id: 1,
            name: "Nguyễn Văn Sơn",
            date: "20/12/2023",
            address: "Thanh Xuân, Hà Nội"
        }
    }
    render(){
        return (
          <div>Bài 2
            <p>id: {this.state.id}</p>
            <p>Tên: {this.state.name}</p>
            <p>Ngày sinh: {this.state.date}</p>
            <p>Địa chỉ: {this.state.address}</p>
            <hr />
          </div>
        )
    }
}
