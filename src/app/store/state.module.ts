import { environment } from '../../environments/environment';
import { appReducer, appMetaReducers } from './app.state';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot()
  ]
})
export class StateModule {}
