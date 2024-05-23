import React, { useReducer } from 'react';

const initialState = { count: 10 };

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'decrease':
      return state.count > 0 ? { count: state.count - 1 } : state;
    default:
      throw new Error();
  }
}

function Bai6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'decrease' })}>
        Giảm
      </button>
    </div>
  );
}

export default Bai6;
