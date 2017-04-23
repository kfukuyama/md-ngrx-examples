import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT } from 'app/reducers';

// Storeの中のstateの型
interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  template: `
    <app-counter [value]="counter$ | async" (increment)="onIncrement()" (decrement)="onDecrement()"></app-counter>
  `,
})
export class AppComponent {

  // counterのstateのObservable
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // storeの中で自分が興味のある'counter'の部分を切り取ってくる
    this.counter$ = store.select('counter');
  }

  onIncrement() {
    // INCREMENT Actionを発火させる
    this.store.dispatch({ type: INCREMENT });
  }

  onDecrement() {
    // DECREMENT Actionを発火させる
    this.store.dispatch({ type: DECREMENT });
  }
}
