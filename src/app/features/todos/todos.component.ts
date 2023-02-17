import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from './models/todo.model';
import { TodoActions, TodoApiActions } from './state/todo.actions';
import { selectTodos } from './state/todo.selectors';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  //stream of current todos state
  todos$ = this.store.select(selectTodos);
  todo = '';
  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(TodoApiActions.loadTodos());
  }

  onAddTodo() {
    this.store.dispatch(TodoActions.addTodo({ content: this.todo }));
    this.todo = '';
  }

  onRemoveTodo(todoId: ITodo['id']) {
    this.store.dispatch(TodoActions.removeTodo({ todoId }));
  }
}
