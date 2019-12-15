import { Sample } from './../models/sample.model';
import { Injectable } from '@angular/core';
import { SampleFacadeBase } from '../store/sample.state';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Injectable({ providedIn: 'root' })
export class SampleFacade extends SampleFacadeBase {
  constructor(private store: Store<AppState>) {
    super(Sample, store);
  }
}
