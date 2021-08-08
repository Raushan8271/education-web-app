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

const iniSate = {
  todo: [],
  slectedTodo: { title: "", status: "" },
  isLoading: false,
  isError: false,
  total: 0,
  completed: 0,
  count: 0,
};

export const reducer = (state = iniSate, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    }

    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todo: payload,
      };
    }

    case GET_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        todo: [...state.todo],
      };
    }

    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todo: [...state.todo],
      };
    }

    case ADD_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        todo: [...state.todo],
      };
    }

    case GET_SELCTED_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_SELCTED_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        slectedTodo: payload,
      };
    }

    case GET_SELCTED_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case REMOVE_SELCTED_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REMOVE_SELCTED_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        slectedTodo: payload,
      };
    }

    case REMOVE_SELCTED_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case TOGGLE_SELCTED_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TOGGLE_SELCTED_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        slectedTodo: payload,
      };
    }

    case TOGGLE_SELCTED_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_SELCTED_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_SELCTED_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        slectedTodo: payload,
      };
    }

    case UPDATE_SELCTED_TODO_FAILIER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case COMPLETED_TODO: {
      state.todo.map((e) => (e.status === true ? state.count++ : state.count));

      return {
        ...state,
        completed: state.count,
      };
    }

    case TOTAL_TODO: {
      return {
        ...state,
        total: state.todo.length,
      };
    }

    default: {
      return state;
    }
  }
};
