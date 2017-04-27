import { Component } from '@angular/core';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'app/shared/visibility-filter.const';

@Component({
  selector: 'app-footer',
  template: `
  <md-card>
    <app-filter-link [filter]="showAll">All</app-filter-link>
    <app-filter-link [filter]="showActive">Active</app-filter-link>
    <app-filter-link [filter]="showCompleted">Completed</app-filter-link>
  </md-card>
  `,
  styles: ['app-filter-link { display: inline-block; }']
})
export class FooterComponent {

  showAll = SHOW_ALL;
  showActive = SHOW_ACTIVE;
  showCompleted = SHOW_COMPLETED;

  constructor() { }

}
