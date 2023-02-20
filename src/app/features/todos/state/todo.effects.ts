import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { TodoService } from '../services/todo.service';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
  updateTodo,
} from './todo.reducer';
import { selectTodos } from './todo.selectors';
@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private todoService: TodoService
  ) {}

  //actions$ - stream of every action being dispatched in the app
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo, removeTodo),
        withLatestFrom(this.store.select(selectTodos)),
        tap(([action, todos]) => this.todoService.setTodos([...todos]))
      ),
    { dispatch: false }
  );

  updateTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateTodo),
        withLatestFrom(this.store.select(selectTodos)),
        tap(([action, todos]) => {
          return this.todoService.updateTodo({
            id: action.todoId,
            content: action.content,
          });
        })
      ),
    { dispatch: false }
  );
}
