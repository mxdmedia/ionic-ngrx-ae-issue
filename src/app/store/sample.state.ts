import { Sample } from './../models/sample.model';
import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';

export const {
  initialState: sampleInitialState,
  selectors: sampleSelectors,
  facade: SampleFacadeBase
} = buildState(Sample);

export function sampleReducer(
  state = sampleInitialState
): IEntityState<Sample> {
  return state;
}
