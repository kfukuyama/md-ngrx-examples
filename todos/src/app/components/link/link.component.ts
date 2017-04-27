import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
  <button md-raised-button [disabled]="active" (click)="onClick($event)">
    <ng-content></ng-content>
  </button>
  `,
})
export class LinkComponent {
  @Input() active: boolean;
  @Output() linkClick = new EventEmitter();

  constructor() { }

  onClick(event: Event) {
    event.preventDefault();
    this.linkClick.emit();
  }

}
