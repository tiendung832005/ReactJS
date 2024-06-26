
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from '../store/reducers/displaySlice';
import "./display.css"
interface DisplayState {
  isGridView: boolean;
}
export type RootState = {
  display: DisplayState;
};

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export default function DisplaySlice() {
  // Update the useSelector hook to use the RootState type
  const isGridView = useSelector((state: RootState) => state.display.isGridView);
  const dispatch = useDispatch();

  const handleToggleView = () => {
    dispatch(toggleView());
  };

  return (
    <div className="app">
      <button onClick={handleToggleView}>
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      <div className={isGridView ? 'grid-view' : 'list-view'}>
        {data.map((item) => (
          <div key={item.id} className="item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}