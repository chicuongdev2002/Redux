import { createStore } from "redux";

export function addTodo(text) {
  return {
    type: "ADD",
    payload: text,
  };
}
export function updateTodo(newJob, id) {
  return {
    type: "UPDATE",
    payload: { id, newJob },
  };
}

const initialState = [
  {
    id: 0,
    todo: "hoc bai",
  },
  {
    id: 1,
    todo: "lam bai tap",
  },
];

const reducer = (state = initialState, action) => {
  const type = action.type;
  if (type == "ADD") {
    return [...state, action.payload];
  } else if (type == "UPDATE") {
    const { id, newJob } = action.payload;
    state.forEach((todo) => {
      if (todo.id == id) {
        todo.todo = newJob;
      }
    });
    return [...state];
  } else if(type==="DELETE")
  {
    console.log(...state.filter(todo=>todo.id!=action.payload));
    return  [...state.filter(todo=>todo.id!=action.payload)]
  }
  else if(type==="apiTodo")
{
  return action.payload
}
  else  {
    return state;
  }
};
const store = createStore(reducer);

export default store;
