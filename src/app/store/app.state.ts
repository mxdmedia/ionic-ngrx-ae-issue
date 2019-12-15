import { Sample } from './../models/sample.model';
import { IEntityState } from '@briebug/ngrx-auto-entity';
import { environment } from '../../environments/environment';
import * as CounterState from './counter/counter.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { sampleReducer } from './sample.state';

export interface IAppState {
  counter: CounterState.State;
  sample: IEntityState<Sample>;
}

export type AppState = IAppState;

export const appReducer: ActionReducerMap<AppState> = {
  counter: CounterState.reducer,
  sample: sampleReducer
};

export const appMetaReducers: Array<MetaReducer<
  AppState
>> = !environment.production ? [storeFreeze] : [];
