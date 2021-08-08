import {
  ADD_TODO,
  ADD_TODO_FAILIER,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  COMPLETED_TODO,
  GET_SELCTED_TODO_FAILIER,
  GET_SELCTED_TODO_REQUEST,
  GET_SELCTED_TODO_SUCCESS,
  GET_TODO_FAILIER,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  REMOVE_SELCTED_TODO_FAILIER,
  REMOVE_SELCTED_TODO_REQUEST,
  REMOVE_SELCTED_TODO_SUCCESS,
  TOGGLE_SELCTED_TODO_FAILIER,
  TOGGLE_SELCTED_TODO_REQUEST,
  TOGGLE_SELCTED_TODO_SUCCESS,
  TOTAL_TODO,
  UPDATE_SELCTED_TODO_FAILIER,
  UPDATE_SELCTED_TODO_REQUEST,
  UPDATE_SELCTED_TODO_SUCCESS,
} from "./ActionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};

export const getTOdoFailier = (error) => {
  return {
    type: GET_TODO_FAILIER,
    error,
  };
};

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  };
};

export const addTodoSuccess = () => {
  return {
    type: ADD_TODO_SUCCESS,
  };
};

export const addTOdoFailier = (error) => {
  return {
    type: ADD_TODO_FAILIER,
    error,
  };
};

export const getSelectedTodoRequest = () => {
  return {
    type: GET_SELCTED_TODO_REQUEST,
  };
};

export const getSelectedTodoSuccess = (payload) => {
  return {
    type: GET_SELCTED_TODO_SUCCESS,
    payload,
  };
};

export const getSelectedTodoFailier = (error) => {
  return {
    type: GET_SELCTED_TODO_FAILIER,
    payload: error,
  };
};

export const removeSelectedTodoRequest = () => {
  return {
    type: REMOVE_SELCTED_TODO_REQUEST,
  };
};

export const removeSelectedTodoSuccess = (payload) => {
  return {
    type: REMOVE_SELCTED_TODO_SUCCESS,
    payload,
  };
};

export const removeSelectedTodoFailier = (error) => {
  return {
    type: REMOVE_SELCTED_TODO_FAILIER,
    payload: error,
  };
};

export const toggleSelectedTodoRequest = () => {
  return {
    type: TOGGLE_SELCTED_TODO_REQUEST,
  };
};

export const toggleSelectedTodoSuccess = (payload) => {
  return {
    type: TOGGLE_SELCTED_TODO_SUCCESS,
    payload,
  };
};

export const toggleSelectedTodoFailier = (error) => {
  return {
    type: TOGGLE_SELCTED_TODO_FAILIER,
    payload: error,
  };
};

export const updateSelectedTodoRequest = () => {
  return {
    type: UPDATE_SELCTED_TODO_REQUEST,
  };
};

export const updateSelectedTodoSuccess = (payload) => {
  return {
    type: UPDATE_SELCTED_TODO_SUCCESS,
    payload,
  };
};

export const updateSelectedTodoFailier = (error) => {
  return {
    type: UPDATE_SELCTED_TODO_FAILIER,
    payload: error,
  };
};

export const completedTodo = (payload) => {
  return {
    type: COMPLETED_TODO,
    payload,
  };
};

export const totalTodo = (payload) => {
  return {
    type: TOTAL_TODO,
    payload,
  };
};
