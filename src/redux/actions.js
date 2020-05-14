import { database } from '../database/config';

export function startRemovingTodo(index, id) {
  console.log(id);
  return (dispatch) => {
    return database
      .ref(`todos/${id}`)
      .remove()
      .then(() => {
        dispatch(removeToDo(index));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingToDo() {
  return (dispatch) => {
    return database
      .ref('todos')
      .once('value')
      .then((snapshot) => {
        let todos = [];
        snapshot.forEach((childSnapshot) => {
          todos.push(childSnapshot.val());
        });
        dispatch(loadToDos(todos));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startAddingToDo(todo) {
  return (dispatch) => {
    return database
      .ref('todos')
      .update({ [todo.id]: todo })
      .then(() => {
        dispatch(addToDo(todo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

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

export function loadToDos(todos) {
  return {
    type: 'LOAD_TODOS',
    todos,
  };
}
