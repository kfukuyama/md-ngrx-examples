import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { AddTodoAction } from 'app/actions';
import { Todo } from 'app/shared/todo.model';

@Component({
  selector: 'app-add-todo',
  template: `
  <md-card>
    <form [formGroup]="form" (submit)="onSubmit(form.value)">
      <md-input-container>
        <input mdInput placeholder="Enter Todo" [formControl]="form.controls['text']">
      </md-input-container>
      <button md-raised-button type="submit">Add Todo</button>
    </form>
  </md-card>
  `,
})
export class AddTodoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['']
    });
  }

  /**
   * 新規Todo追加
   * @param todo 追加するTodo
   */
  onSubmit(todo: Todo) {
    // 新規TodoとともにAddTodoActionを発火
    this.store.dispatch(new AddTodoAction(todo));
    // フォームをクリア
    this.form.reset();
  }
}
