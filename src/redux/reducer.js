import _todos from '../data/todos';

const todoReducer = function todos(state = _todos, action) {
  switch (action.type) {
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case 'ADD_TODO':
      return [...state, action.todo];
    default:
      return state;
  }
};

export default todoReducer;
