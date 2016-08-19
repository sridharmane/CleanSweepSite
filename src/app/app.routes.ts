// import { provideRouter, RouterConfig } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent  } from './app.component';
import { HomeComponent } from './components/home';
import { CleanSweepsComponent } from './components/clean-sweeps';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import {PageNotFoundComponent} from './components/page-not-found';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cleansweeps', component: CleanSweepsComponent },
    { path: 'partner-categories', component: PartnerCategoriesComponent },
    {
        path: 'partners',
        component: PartnersComponent,
        data: {
            title: 'Heroes List'
        }
    },
    //   { path: 'hero/:id', component: HeroDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
