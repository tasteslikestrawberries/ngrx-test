import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState } from './todo.reducer';

export const selectTodosState = createFeatureSelector<ITodoState>('todos');

export const selectTodos = createSelector(
  selectTodosState,
  (todoState) => todoState.todos
);
