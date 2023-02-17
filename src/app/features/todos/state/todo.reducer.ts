import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../models/todo.model';
import { TodoActions, TodoApiActions } from './todo.actions';

export interface ITodoState {
  todos: ITodo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ITodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const { addTodo, removeTodo } = TodoActions;
export const { loadTodos, loadTodosSuccess, loadTodosFailure } = TodoApiActions;

export const todoReducer = createReducer(
  initialState,

  /*on takes the action as first argument and as the second argument, a method 
  that takes the existing(current) state and payload(data) and returns the new state. 
  Instead of modifying existing state, with spread we are returning a new state object
   to which we add the new todo property*/
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),

  on(removeTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== todoId),
  })),
  on(loadTodos, (state) => ({ ...state, status: 'loading' })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    // create a new mutable array from the readonly array
    todos: [...todos],
    status: 'success',
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    status: 'error',
  }))
);
