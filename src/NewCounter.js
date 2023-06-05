//useReducer 활용 예제
import { useReducer } from 'react';

const reducer = (state, action) => {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  //state, dispatch 값을 받아온다
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  //dispatch(action)으로 action을 발생시키면, 해당 action함수와 state값을 가지고 reducer 함수가 호출됨
  return (
    <div>
      <p>카운터 값 : {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
