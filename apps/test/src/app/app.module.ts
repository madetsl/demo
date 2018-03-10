import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { metaReducers, reducers } from "./reducers";
import { CustomRouterStateSerializer } from "./shared/utils";

@NgModule({
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        RouterModule.forRoot([], { initialNavigation: 'enabled' }),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({
            /*
              They stateKey defines the name of the state used by the router-store reducer.
              This matches the key defined in the map of reducers
            */
            stateKey: 'router',
        }),

        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools',
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    ]
})
export class AppModule {}
