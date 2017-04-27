import * as todo from '../actions';
import { SHOW_ALL } from 'app/shared/visibility-filter.const';

/**
 * フィルタ用のReducer
 * @param state 現在のフィルタ
 * @param action Action
 */
export function reducer(state = SHOW_ALL, action: todo.Actions) {
    switch (action.type) {
        case todo.SET_VISIBILITY_FILTER:
            // 渡ってきたフィルタを最新の状態とする
            return action.payload;
        default:
            return state;
    }
}
