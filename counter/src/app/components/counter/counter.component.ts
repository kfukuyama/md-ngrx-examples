import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <md-card class="example-card">
  <md-card-content>
    <p>
    クリック: {{ value }} 回
    </p>
  </md-card-content>
  <md-card-actions>
    <button md-mini-fab (click)="onIncrement()">+</button>
    <button md-mini-fab (click)="onDecrement()">-</button>
    <button md-raised-button (click)="onIncrementIfOdd()">奇数ならインクリメント</button>
    <button md-raised-button (click)="onIncrementAsync()">非同期インクリメント</button>
  </md-card-actions>
</md-card>
  `,
})
export class CounterComponent {
  // ↓このInputとOutputがあるおかげで、親から
  // <app-counter [value]="counter$ | async" (increment)="onIncrement()" (decrement)="onDecrement()"></app-counter>
  // こういった感じで値を渡したり、イベントを監視できるようになります
  @Input() value: number;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() { }

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }

  onIncrementIfOdd() {
    if (this.value % 2 !== 0) {
      this.increment.emit();
    }
  }

  onIncrementAsync = () => {
    setTimeout(() => this.increment.emit(), 1000);
  }
}
