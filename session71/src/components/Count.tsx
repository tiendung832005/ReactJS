import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../store/reducers/countReducer';
import { decrease } from '../store/reducers/countReducer';
export default function Count() {
    //  thực hiện hành động dùng useDisPatch
    const data: any = useSelector(state=>state);
    const disPatch = useDispatch()
    const increaseCount = ()=>{
        disPatch(increase(1));
    }
    const decreaseCount = ()=>{
        disPatch(decrease(1));
    }
  return (
    <div>Count
        <p> Giá trị biến count</p>
        <button onClick={increaseCount}>Tăng</button>
        <button>giảm</button>
        <button>Tang</button>
    </div>
  )
}
