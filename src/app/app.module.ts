import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * angularfire2 
 * */
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
/**
 * angular2-material 
 * */
import { MaterialModule, OVERLAY_PROVIDERS } from '@angular/material';


/**
 * Routes 
 * */
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

/**
 * Components 
 * */
import { AppComponent } from './app.component';

import { CleanSweepsModule } from './components/clean-sweeps';
import { ConfigModule } from './components/config';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration/registration.component';
import { OverlaySpinnerComponent } from './components/overlay-spinner';

/**
 * Services 
 * */
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { GeocodingService } from './services/geocoding.service';
import { DataService } from './services/data.service';
import { DateTimeService } from './services/date-time.service';

/**
 * Pipes 
 * */
import { PipesModule } from './pipes/pipes.module';
/**
 * Directives 
 * */


import { CookieService } from 'angular2-cookie/services/cookies.service';
// import { Ng2MaterialModule, MdBackdropModule, Ng2MaterialNodeModule } from 'ng2-material';

const firebaseAppConfig = {
  apiKey: 'AIzaSyA-xHEbkhLk9ZLmycfIPEJhArQskJKrxvA',
  authDomain: 'cleansweep-f63d0.firebaseapp.com',
  databaseURL: 'https://cleansweep-f63d0.firebaseio.com',
  storageBucket: 'cleansweep-f63d0.appspot.com',
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    OverlaySpinnerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAppConfig, myFirebaseAuthConfig),
    CleanSweepsModule,
    ConfigModule,
    // Pipes
    PipesModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    GeocodingService,
    DataService,
    DateTimeService,
    OVERLAY_PROVIDERS,
    CookieService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
