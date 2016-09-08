// import { provideRouter, RouterConfig } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent  } from './app.component';
import { HomeComponent } from './components/home';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import {PageNotFoundComponent} from './components/page-not-found';

import { CleanSweepsComponent } from './components/clean-sweeps';
import { DetailCleanSweepComponent } from './components/clean-sweeps/detail-clean-sweep';
import { AddCleanSweepComponent } from './components/clean-sweeps/add-clean-sweep';
import { EditCleanSweepComponent } from './components/clean-sweeps/edit-clean-sweep';
import { ListCleanSweepsComponent }   from './components/clean-sweeps/list-clean-sweeps';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'cleansweeps', component: CleanSweepsComponent,
        children: [
            { path: ':id', component: DetailCleanSweepComponent },
            { path: ':id/edit', component: EditCleanSweepComponent },
            { path: '', component: ListCleanSweepsComponent },
            { path: 'list', component: ListCleanSweepsComponent },
            { path: 'add', component: AddCleanSweepComponent }
        ]

    },
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
