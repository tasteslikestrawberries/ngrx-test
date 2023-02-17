import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<IBook>> {
    return this.http
      .get<{ items: IBook[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
