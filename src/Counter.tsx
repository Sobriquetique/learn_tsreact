import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store/AppReducer";
import { DECREMENT_ACTION_TYPE, INCREMENT_ACTION_TYPE } from "./store/CounterReducer";

function Counter() {

  const counter = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch({type: INCREMENT_ACTION_TYPE });
  const decrement = () => dispatch({type: DECREMENT_ACTION_TYPE });

  return (
    <div className="wrapper">
      <div className="header">
        <span>Counter</span>
      </div>
      <div className="body">
        <div className="signContainer">
          <button onClick={decrement}>-</button>
        </div>
        <div className="countDisplay">
          {counter}
        </div>
        <div className="signContainer">
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
