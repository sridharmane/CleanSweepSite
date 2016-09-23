import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * angularfire2 
 * */
import { AngularFireModule, AuthMethods, AuthProviders, firebaseAuthConfig, FirebaseAuthConfig } from 'angularfire2';
/**
 * angular2-material 
 * */
import {MdCoreModule, OVERLAY_PROVIDERS} from '@angular2-material/core';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdInputModule} from '@angular2-material/input';
import {MdListModule} from '@angular2-material/list';
import {MdMenuModule} from '@angular2-material/menu';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdRadioModule, MdUniqueSelectionDispatcher} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';
// import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
// import {MdSliderModule} from '@angular2-material/slider';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';

/**
 * Routes 
 * */
import { appRouting, appRoutingProviders } from './app.routes';

/**
 * Components 
 * */
import { AppComponent } from './app.component';
// import { CleanSweepsComponent }  from './components/clean-sweeps';

import {
  CleanSweepsComponent,
  AddCleanSweepComponent,
  EditCleanSweepComponent,
  ListCleanSweepsComponent,
  DetailCleanSweepComponent
} from './components/clean-sweeps/';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration/registration.component';
import { OverlaySpinnerComponent } from './components/overlay-spinner';

/**
 * Services 
 * */
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {GeocodingService} from './services/geocoding.service';
import {DataService} from './services/data.service';
import {DateTimeService} from './services/date-time.service';

/**
 * Pipes 
 * */
import { PipesModule } from './pipes/pipes.module';
/**
 * Directives 
 * */


/**
 * Modules
 */
// import { CleanSweepsModule } from './components/clean-sweeps';


import { CookieService } from 'angular2-cookie/services/cookies.service';


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
    PartnersComponent,
    PartnerCategoriesComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    OverlaySpinnerComponent,
    CleanSweepsComponent,
    AddCleanSweepComponent,
    EditCleanSweepComponent,
    ListCleanSweepsComponent,
    DetailCleanSweepComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    // CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // CleanSweepsModule,

    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAppConfig, myFirebaseAuthConfig),
    // Pipes
    PipesModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuardService,
    AuthService,
    GeocodingService,
    DataService,
    DateTimeService,
    MdIconRegistry,
    OVERLAY_PROVIDERS,
    MdUniqueSelectionDispatcher,
    CookieService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
