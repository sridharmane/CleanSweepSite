import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent  } from './app.component';

// import { AddCleanSweepComponent } from './add-clean-sweep/add-clean-sweep.component';
import { ManageCleanSweepComponent } from './manage-clean-sweep/manage-clean-sweep.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerCategoriesComponent } from './partner-categories/partner-categories.component';

const routes: RouterConfig = [
    { path: '', component: AppComponent },
    { path: 'home', component: AppComponent },
    { path: 'clean-sweep', component: ManageCleanSweepComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'partner-categories', component: PartnerCategoriesComponent },
];

export const APP_ROUTE_PROVIDER = [
    provideRouter(routes)
];