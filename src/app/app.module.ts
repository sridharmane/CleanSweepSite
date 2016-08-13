import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {APP_ROUTE_PROVIDER} from './app.routes';
import {RouterModule} from '@angular/router';

// Components
import {AddCleanSweepComponent} from './add-clean-sweep/add-clean-sweep.component';
import {ManageCleanSweepComponent} from './manage-clean-sweep/manage-clean-sweep.component';
import {PartnerCategoriesComponent} from './partner-categories/partner-categories.component';
import {PartnersComponent} from './partners/partners.component';

// Providers
import { DataService } from './data.service';
import { GeocodingService } from './geocoding.service';
import { FirebaseDBService } from './firebase-db.service';

// Pipes
import {PartnerKeysPipe} from './partner-keys.pipe';
import {PartnerCategoriesPipe} from './partner-categories.pipe';
// All material2 modules
// import {MaterialModule} from '@angular2-material/all/all';
import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
// import {MdDialogModule} from '@angular2-material/dialog/dialog';
import {RtlModule} from '@angular2-material/core/rtl/dir';
import {MdLiveAnnouncer} from '@angular2-material/core/a11y/live-announcer';

import { AngularFireModule } from 'angularfire2/';

const firebaseConfig = {
    apiKey: 'AIzaSyBhyEI4oMWsqGK_Jb81q9Sbm7YTZwfnikg',
    authDomain: 'cleansweep-f63d0.firebaseapp.com',
    databaseURL: 'https://cleansweep-f63d0.firebaseio.com',
    storageBucket: '',
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        // MaterialModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        //   MdDialogModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdProgressBarModule,
        MdProgressCircleModule,
        MdRadioModule,
        MdRippleModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        OverlayModule,
        PortalModule,
        RtlModule,
        //Firebase2
        AngularFireModule.initializeApp(firebaseConfig)

    ],
    declarations: [
        AppComponent,
        AddCleanSweepComponent,
        ManageCleanSweepComponent,
        PartnerCategoriesComponent,
        PartnersComponent,
        PartnerKeysPipe,
        PartnerCategoriesPipe,
    ],
    providers: [
        APP_ROUTE_PROVIDER,
        // HttpModule,
        MdIconRegistry,
        DataService,
        FirebaseDBService,
        GeocodingService,
        MdLiveAnnouncer
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
