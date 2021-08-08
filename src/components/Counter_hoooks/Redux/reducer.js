import { DECRIMENT, INCRIMENT } from "./actionType";

export const reducer = (state = { counter: 0 }, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCRIMENT: {
      return {
        ...state,
        counter: state.counter + payload,
      };
    }

    case DECRIMENT: {
      return {
        ...state,
        counter: state.counter - payload,
      };
    }
    default: {
      return state;
    }
  }
};
