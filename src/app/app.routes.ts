// import { provideRouter, RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
// import { AppComponent  } from './app.component';

import { HomeComponent } from './components/home';
import { ConfigComponent } from './components/config';
import { CleanSweepsComponent } from './components/clean-sweeps/';

import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration/registration.component';

import { PageNotFoundComponent } from './components/page-not-found';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/config',
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
    },
    {
        path: 'config',
        component: ConfigComponent,
        canActivate: [AuthGuardService]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', component: PageNotFoundComponent }
];
