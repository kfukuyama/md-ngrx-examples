import { Component, Input, HostBinding } from '@angular/core';
import { Todo } from 'app/shared/todo.model';

@Component({
  selector: 'app-todo',
  template: `
  <md-checkbox class="example-margin" [ngModel]="todo.completed">
    <span [style.text-decoration]="todo.completed ? 'line-through' : 'none'">{{todo.text}}</span>
  </md-checkbox>
  `,
})
export class TodoComponent {

  @Input() todo: Todo;

  constructor() { }

}
