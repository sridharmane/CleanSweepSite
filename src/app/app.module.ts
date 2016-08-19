import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * angularfire2 
 * */
import { AngularFireModule } from 'angularfire2';
/**
 * angular2-material 
 * */
import {MdCoreModule} from '@angular2-material/core';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdIconModule} from '@angular2-material/icon';
import {MdInputModule} from '@angular2-material/input';
import {MdListModule} from '@angular2-material/list';
import {MdMenuModule} from '@angular2-material/menu';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';
// import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
// import {MdSliderModule} from '@angular2-material/slider';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';

/**
 * Routes 
 * */
import {routing, appRoutingProviders} from './app.routes';
/**
 * Components 
 * */
import { AppComponent } from './app.component';
import { AddCleanSweepComponent } from './components/add-clean-sweep';
import { ManageCleanSweepComponent } from './components/manage-clean-sweep';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';






import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CleanSweepsComponent } from './components/clean-sweeps/clean-sweeps.component';
/**
 * Services 
 * */
import {GeocodingService} from './services/geocoding.service';
import {FirebaseDBService} from './services/firebase-db.service';
import {DataService} from './services/data.service';
import {DateTimeService} from './services/date-time.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBhyEI4oMWsqGK_Jb81q9Sbm7YTZwfnikg',
  authDomain: 'cleansweep-f63d0.firebaseapp.com',
  databaseURL: 'https://cleansweep-f63d0.firebaseio.com',
  storageBucket: ''
};

@NgModule({
  declarations: [
    AppComponent,
    AddCleanSweepComponent,
    ManageCleanSweepComponent,
    PartnersComponent,
    PartnerCategoriesComponent,
    HomeComponent,
    PageNotFoundComponent,
    CleanSweepsComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    CommonModule,
    FormsModule,

    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [
    appRoutingProviders,
    GeocodingService,
    FirebaseDBService,
    DataService,
    DateTimeService,
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
