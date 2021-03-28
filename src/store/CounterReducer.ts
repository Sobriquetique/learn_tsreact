import { Reducer } from "react";
import { SimpleAction } from "./SimpleAction";

export const INCREMENT_ACTION_TYPE = "COUNTER_INCREMENT";
export const DECREMENT_ACTION_TYPE = "COUNTER_DECREMENT";

interface CounterAction {
  type: string;
}

const CounterReducer: Reducer<number, CounterAction> = (state = 0, action: CounterAction): number => {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE: return state + 1;
    case DECREMENT_ACTION_TYPE: return state - 1;
    default: return state;
  }
}

export default CounterReducer;