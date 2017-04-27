import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-add-todo></app-add-todo>
  <app-visible-todo-list></app-visible-todo-list>
  <app-footer></app-footer>
  `,
})
export class AppComponent { }
