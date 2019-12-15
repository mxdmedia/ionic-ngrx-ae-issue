import { AppState } from '../app.state';
import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface State {
  count: number;
  calls: number;
}

export const initialState: State = {
  count: 0,
  calls: 0
};

const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({
    count: state.count + 1,
    calls: state.calls + 1
  })),
  on(decrement, state => ({
    count: state.count - 1,
    calls: state.calls + 1
  })),
  on(reset, state => ({
    count: 0,
    calls: state.calls + 1
  }))
);

export function reducer(state, action) {
  return _counterReducer(state, action);
}

export const selectCounterFeature = createFeatureSelector<AppState, State>(
  'counter'
);
