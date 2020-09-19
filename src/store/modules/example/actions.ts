/* actions.ts */
import { TodoActionsTypes, Todo, CREATE_TODO_REQUEST } from './types'

export function createTodo (todo: Todo): TodoActionsTypes {
  return {
    type: CREATE_TODO_REQUEST,
    payload: { todo }
  }
}
