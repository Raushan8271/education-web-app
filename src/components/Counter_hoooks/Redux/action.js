import { DECRIMENT, INCRIMENT } from "./actionType";

export const Incriment = (payload) => {
  return {
    type: INCRIMENT,
    payload,
  };
};

export const Decriment = (payload) => {
  return {
    type: DECRIMENT,
    payload,
  };
};
