import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/features/books/models/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<IBook> = [];
  @Output() remove = new EventEmitter<string>();
}
