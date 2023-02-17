import { createActionGroup, props } from '@ngrx/store';
import { IBook } from '../models/book.model';
 
export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});
 
export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Loaded Books': props<{ books: ReadonlyArray<IBook> }>(),
  },
});