import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
            default:
                throw new Error();
            }
        }

const initialState = { count: 0 };

function Bai5() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increase' })}>
        Tăng
      </button>
    </div>
  );
}

export default Bai5;
