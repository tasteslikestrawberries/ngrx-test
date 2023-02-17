import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/features/books/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<IBook> = [];
  @Output() add = new EventEmitter<string>();
}
