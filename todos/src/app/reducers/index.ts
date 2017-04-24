import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromTodos from './todos.reducer';
import * as fromVisibilityFilter from './visibility-filter.reducer';
import { Todo } from 'app/shared/todo.model';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, VisibilityFilter } from 'app/shared/visibility-filter.const';

/** アプリのState */
export interface State {
    /** 全Todo */
    todos: Todo[];
    /** フィルタ */
    visibilityFilter: VisibilityFilter;
}

/** 全Reducer */
const reducers = {
    todos: fromTodos.reducer,
    visibilityFilter: fromVisibilityFilter.reducer,
};

/**
 * Root Reducer
 * @param state RootのState
 * @param action Action
 */
export function reducer(state: any, action: any) {
    return combineReducers(reducers)(state, action);
}

/** 全Todoを取得 */
export const getTodos = (state: State) => state.todos;
/** 現在のフィルタを取得 */
export const getVisibilityFilter = (state: State) => state.visibilityFilter;

/** 表示可能な全Todoを取得 */
export const getVisibleTodos = createSelector(getTodos, getVisibilityFilter, (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            // 全表示
            return todos;
        case SHOW_COMPLETED:
            // Completeだけ表示
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            // Activeだけ表示
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
});
