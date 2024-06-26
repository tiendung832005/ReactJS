import { useSelector } from 'react-redux'

export default function Todolist() {
    const data:any = useSelector(state=>state)
  return (
    <div>
        {data.todoListReducer.jobs.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
