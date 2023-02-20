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
  editingTodoId: string | null = null;
  todo = '';
  updatedTodos: Record<string, string> = {};

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(TodoApiActions.loadTodos());
  }

  onAddTodo() {
    if (this.todo.length < 3) {
      return;
    }
    const id = Date.now().toString().slice(-3);
    this.store.dispatch(TodoActions.addTodo({ id, content: this.todo }));
    this.updatedTodos[id] = this.todo;
    this.todo = '';
  }

  onInputChange(event: Event, id: string) {
    this.updatedTodos[id] = (event.target as HTMLInputElement).value;
  }

  onUpdateTodo(todoId: ITodo['id']) {
    const newTodo = this.updatedTodos[todoId];
    if (newTodo.length < 3) {
      return;
    }
    this.store.dispatch(TodoActions.updateTodo({ todoId, content: newTodo }));
    this.editingTodoId = null;
  }

  onEditTodo(todoId: ITodo['id']) {
    if (this.editingTodoId) {
      return;
    }

    this.editingTodoId = todoId;
  }

  onRemoveTodo(todoId: ITodo['id']) {
    this.store.dispatch(TodoActions.removeTodo({ todoId }));
  }
}
