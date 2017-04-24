import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'app/shared/todo.model';

@Component({
  selector: 'app-todo-list',
  template: `
  <md-card>
    <md-card-header>
      <md-card-title>Todos</md-card-title>
      <md-card-subtitle *ngIf="!todos || todos.length === 0">No Todos to show.</md-card-subtitle>
    </md-card-header>
    <md-card-content>
      <md-list>
        <md-list-item *ngFor="let todo of todos">
          <app-todo [todo]="todo" (click)="onTodoClick(todo.id)"></app-todo>
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
  `,
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() todoClick = new EventEmitter<number>();

  constructor() { }

  onTodoClick(id: number) {
    this.todoClick.emit(id);
  }

}
