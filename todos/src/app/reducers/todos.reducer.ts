import * as todo from '../actions';
import { Todo } from 'app/shared/todo.model';

/**
 * 単体のTodo用Reducer
 * @param state 単体のTodo
 * @param action Action
 */
const todoReducer = (state: Todo, action: todo.Actions) => {
    switch (action.type) {
        case todo.ADD_TODO:
            // payloadから新規Todo作成
            const { id, text } = action.payload;
            return {
                id: id,
                text: text,
                completed: false
            };
        case todo.TOGGLE_TODO:
            // IDが
            if (state.id !== action.payload) {
                // 一致しなかったらstateはそのまま
                return state;
            }

            // 一致したらcompletedを反転
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

/**
 * TodoのReducer
 * @param state Todoの配列
 * @param action Action
 */
export function reducer(state: Todo[] = [], action: todo.Actions) {
    switch (action.type) {

        case todo.ADD_TODO:
            // 新規Todoを追加
            return [
                ...state,
                todoReducer(undefined, action)
            ];

        case todo.TOGGLE_TODO:
            // Todoの状態を反転
            return state.map(t => todoReducer(t, action));

        default:
            return state;

    }
}
