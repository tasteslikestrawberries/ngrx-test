import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './books.actions';
import { IBook } from '../models/book.model';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.loadedBooks, (_state, { books }) => books)
);