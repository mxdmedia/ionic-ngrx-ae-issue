import { selectCounterFeature } from './counter.reducer';
import { createSelector } from '@ngrx/store';

export const selectCounter = createSelector(selectCounterFeature, counter => {
  return {
    count: counter.count,
    numCalls: counter.calls
  };
});
