import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (!storedTodos) {
      return of([]);
    } else {
      return of(JSON.parse(storedTodos));
    }
  }

  setTodos(todos: ITodo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return of(todos);
  }
}
