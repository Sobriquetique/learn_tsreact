import { SimpleAction } from "./SimpleAction";

export const INCREMENT_ACTION_TYPE = "COUNTER_INCREMENT";
export const DECREMENT_ACTION_TYPE = "COUNTER_DECREMENT";

interface CounterAction {
  type: string,
}

export default function CounterReducer(state: number | null = 0, action: CounterAction): number {
  const newState = (state) ? state : 0;
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      return newState + 1;
    case DECREMENT_ACTION_TYPE:
      return newState - 1;
    default: 
      return newState;
  }
}