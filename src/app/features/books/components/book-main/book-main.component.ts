import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBookCollection,
  selectBooks,
} from 'src/app/features/books/state/books.selectors';
import { BooksActions, BooksApiActions } from '../../state/books.actions';
import { BooksService } from 'src/app/features/books/services/books.service';

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.scss'],
})
export class BookMainComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.loadedBooks({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId: bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
