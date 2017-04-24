import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { SetVisibilityFilterAction } from 'app/actions';
import * as vf from 'app/shared/visibility-filter.const';

@Component({
  selector: 'app-filter-link',
  template: `
  <app-link [active]="active$ | async" (linkClick)="onLinkClick()">
    <ng-content></ng-content>
  </app-link>
  `,
})
export class FilterLinkComponent implements OnInit {
  @Input() filter: vf.VisibilityFilter;

  /** このフィルタが今アクティブかどうか */
  active$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.active$ = this.store.select(fromRoot.getVisibilityFilter)
      .map(f => f === this.filter);
  }

  /** SetVisibilityFilterAction発火（フィルタ更新） */
  onLinkClick() {
    this.store.dispatch(new SetVisibilityFilterAction(this.filter));
  }

}
