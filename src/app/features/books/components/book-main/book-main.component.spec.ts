import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookMainComponent } from './book-main.component';
import { MockBooksService } from '../../test/mock-books.service';
import { BooksService } from '../../services/books.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from '../../state/books.reducer';

describe('BookMainComponent', () => {
  let component: BookMainComponent;
  let fixture: ComponentFixture<BookMainComponent>;
  let mockBooksService: MockBooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({ books: booksReducer })],
      declarations: [BookMainComponent],
      providers: [{ provide: BooksService, useClass: MockBooksService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMainComponent);
    component = fixture.componentInstance;
    mockBooksService = TestBed.inject(BooksService) as MockBooksService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books on init', () => {
    jest.spyOn(mockBooksService, 'getBooks');
    component.ngOnInit();
    expect(mockBooksService.getBooks).toHaveBeenCalled();
  });
});
