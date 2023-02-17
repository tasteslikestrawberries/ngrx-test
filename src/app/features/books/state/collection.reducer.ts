import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];
//reducers take initial state and, based on actions, change or keep the current (or initial) state
export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
