import { Action } from '@ngrx/store';
import { Todo } from 'app/shared/todo.model';
import { VisibilityFilter } from 'app/shared/visibility-filter.const';


export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;
/** 新規Todo追加アクション */
export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    /**
     * コンストラクタ
     * @param payload 追加するTodo
     */
    constructor(public payload: Todo) {
        payload.id = nextTodoId++;
    }
}

/** フィルタを適用アクション */
export class SetVisibilityFilterAction implements Action {
    readonly type = SET_VISIBILITY_FILTER;
    /**
     * コンストラクタ
     * @param payload 適用するフィルタ
     */
    constructor(public payload: VisibilityFilter) { }
}

/** Todoの状態を反転アクション */
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    /**
     * コンストラクタ
     * @param payload 状態反転させるTodoのID
     */
    constructor(public payload: number) { }
}

export type Actions
    = AddTodoAction
    | SetVisibilityFilterAction
    | ToggleTodoAction;
