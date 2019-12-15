import { SampleFacade } from './../facades/sample.facde';
import {
  increment,
  decrement,
  reset
} from './../store/counter/counter.actions';
import { selectCounter } from './../store/counter/counter.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  subs = new Subscription();
  count: number;
  numCalls: number;

  constructor(private store$: Store<AppState>, private samples: SampleFacade) {}

  ngOnInit() {
    this.subs.add(
      this.store$.pipe(select(selectCounter)).subscribe(countDat => {
        this.count = countDat.count;
        this.numCalls = countDat.numCalls;
      })
    );
    this.subs.add(this.samples.all$.subscribe(samples => console.log(samples)));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  increment() {
    this.store$.dispatch(increment());
  }

  decrement() {
    this.store$.dispatch(decrement());
  }

  reset() {
    this.store$.dispatch(reset());
  }
}
