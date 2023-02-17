import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ITodo } from '../models/todo.model';

export const TodoActions = createActionGroup({
  source: 'Todos',
  events: {
    //name of event: payload(data)
    'Add Todo': props<{ content: string }>(),
    'Remove Todo': props<{ todoId: string }>(),
  },
});

export const TodoApiActions = createActionGroup({
  source: 'Todos API',
  events: {
    // defining an event without payload using the emptyProps function
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todos: ITodo[]}>(),
    'Load Todos Failure': props<{ error: string }>(),
  },
});
