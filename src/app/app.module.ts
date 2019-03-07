import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {APP_CONFIG, AppConfig} from './configs/app.config';
import {SharedModule} from './shared/shared.module';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {FirebaseModule} from './shared/modules/firebase.module';
import {SentryErrorHandler} from './core/sentry.errorhandler';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'angularexampleapp'}),
    FirebaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    NgxExampleLibraryModule.forRoot({
      config: {
        say: 'hello'
      }
    }),
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: ErrorHandler, useClass: SentryErrorHandler}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
