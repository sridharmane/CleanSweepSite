// import { provideRouter, RouterConfig } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
// import { AppComponent  } from './app.component';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import { PageNotFoundComponent } from './components/page-not-found';

import { cleanSweepsRoutes } from './components/clean-sweeps/clean-sweeps.routes';

import { CleanSweepsComponent }    from './components/clean-sweeps/';
import { AddCleanSweepComponent }    from './components/clean-sweeps/add-clean-sweep';
import { EditCleanSweepComponent }    from './components/clean-sweeps/edit-clean-sweep';
import { DetailCleanSweepComponent }    from './components/clean-sweeps/detail-clean-sweep';
import { ListCleanSweepsComponent }    from './components/clean-sweeps/list-clean-sweeps';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'cleansweeps',
        component: CleanSweepsComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', component: ListCleanSweepsComponent },
            { path: 'add', component: AddCleanSweepComponent },
            { path: ':id/detail', component: DetailCleanSweepComponent },
            { path: ':id/edit', component: EditCleanSweepComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    {
        path: 'partner-categories',
        component: PartnerCategoriesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'partners',
        component: PartnersComponent,
        canActivate: [AuthGuardService],
        data: {
            title: 'Heroes List'
        }
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const appRouting = RouterModule.forRoot(appRoutes);
