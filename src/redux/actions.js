// import { database } from '../database/config';

export function removeToDo(index) {
  return {
    type: 'REMOVE_TODO',
    index,
  };
}

export function addToDo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  };
}
