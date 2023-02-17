import { createAction } from '@ngrx/store';

//createAction first argument format: createAction('[source of the action] the action')
//createAction second argument would be payload (data to send along)
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
