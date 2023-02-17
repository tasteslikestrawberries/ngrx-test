import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './features/counter/counter.component';
import { MainComponent } from './features/main/main.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter/state/counter.reducer';
import { BookListComponent } from './features/books/components/book-list/book-list.component';
import { booksReducer } from './features/books/state/books.reducer';
import { collectionReducer } from './features/books/state/collection.reducer';
import { BookCollectionComponent } from './features/books/components/book-collection/book-collection.component';
import { BookMainComponent } from './features/books/components/book-main/book-main.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './features/todos/todos.component';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './features/todos/state/todo.reducer';
import { FormsModule } from '@angular/forms';
import { TodoEffects } from './features/todos/state/todo.effects';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MainComponent,
    BookListComponent,
    BookCollectionComponent,
    BookMainComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
      todos: todoReducer
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
