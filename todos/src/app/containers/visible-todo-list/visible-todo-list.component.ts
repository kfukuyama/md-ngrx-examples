import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Todo } from 'app/shared/todo.model';
import { ToggleTodoAction } from 'app/actions';

@Component({
  selector: 'app-visible-todo-list',
  template: `<app-todo-list [todos]="todos$ | async" (todoClick)="onTodoClick($event)"></app-todo-list>`,
})
export class VisibleTodoListComponent implements OnInit {

  /** フィルタを適用した全Todo */
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.todos$ = this.store.select(fromRoot.getVisibleTodos);
  }

  /**
   * ToggleTodoAction発火（Todoの状態反転)
   * @param id 反転させるTodoのid
   */
  onTodoClick(id: number) {
    this.store.dispatch(new ToggleTodoAction(id));
  }

}
