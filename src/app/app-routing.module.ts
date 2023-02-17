import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMainComponent } from './features/books/components/book-main/book-main.component';
import { CounterComponent } from './features/counter/counter.component';
import { MainComponent } from './features/main/main.component';
import { TodosComponent } from './features/todos/todos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'books', component: BookMainComponent },
  { path: 'todos', component: TodosComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
