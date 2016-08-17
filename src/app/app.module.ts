import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material2 modules
import {MdCoreModule} from '@angular2-material/core';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdIconModule} from '@angular2-material/icon';
import {MdInputModule} from '@angular2-material/input';
import {MdMenuModule} from '@angular2-material/menu';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';
// import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
// import {MdSliderModule} from '@angular2-material/slider';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';

import { AppComponent } from './app.component';
import { ManageCleanSweepComponent } from './manage-clean-sweep';
import { PartnersComponent } from './partners';
import { PartnerCategoriesComponent } from './partner-categories';

import {GeocodingService} from './geocoding.service';
import {FirebaseDBService} from './firebase-db.service';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ManageCleanSweepComponent,
    PartnersComponent,
    PartnerCategoriesComponent
  ],
  imports: [
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
    MdMenuModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [
    GeocodingService,
    FirebaseDBService,
    DataService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
