// Redux.js (or wherever you define your Redux store, actions, and reducer)

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

// Initial State
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  payload: { id, todo },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://6562df38ee04015769a69d38.mockapi.io/AppTodo");
      if (res.data) {
        dispatch(fetchTodosSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default store;