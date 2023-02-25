import { Observable, of } from 'rxjs';
import { IBook } from '../models/book.model';

export class MockBooksService {
  getBooks(): Observable<IBook[]> {
    return of([
      {
        id: '1',
        volumeInfo: {
          title: 'Mock Book 1',
          authors: ['Some authors'],
        },
      },
      {
        id: '2',
        volumeInfo: {
          title: 'Mock Book 2',
          authors: ['Some authors'],
        },
      },
    ]);
  }
}
