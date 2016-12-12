import { Component } from '@angular/core';
import { HomeComponent } from './components/home';
import { CleanSweepsComponent } from './components/clean-sweeps';
import { ConfigComponent } from './components/config';
import { AuthService } from './services';
import { UserData, AUTH_STATES } from './types';

import { Router } from '@angular/router';
import 'hammerjs';
import * as firbase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Home';
  sidenavOpened: boolean = true;
  isLoading: boolean = true;
  authData: any = null;
  userData: UserData = null;
  sidenavStatus: 'closed' | 'opened' = 'opened';

  pages = [
    {
      title: 'Home',
      component: HomeComponent,
      routerLink: 'home',
      icon: 'home'
    },
    {
      title: 'Clean Sweeps',
      component: CleanSweepsComponent,
      routerLink: 'cleansweeps',
      icon: 'access_time'
    },
    {
      title: 'Config',
      component: ConfigComponent,
      routerLink: 'config',
      icon: 'settings_applications'
    },
    {
      title: 'Users',
      component: ConfigComponent,
      routerLink: 'config',
      icon: 'people'
    }
  ];

  // cleanSweep: Array<CleanSweep>;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.authEvents.subscribe(event => {
      switch (event.state) {
        case AUTH_STATES.LOGGED_IN:

          if (event.authData) {
            this.authData = event.authData;
          }
          if (event.userData) {
            this.userData = event.userData;
          }
          console.log(event.state, event.authData, event.userData);
          this.isLoading = false;
          this.router.navigate([this.authService.redirectUrl]);
          break;
        case AUTH_STATES.LOGGED_OUT:
          this.authData = null;
          this.userData = null;
          this.isLoading = false;
          break;
        case AUTH_STATES.CHECKING:
          this.isLoading = true;
          break;
      }

    });
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  logout() {
    this.authService.logout();
  }
  toggleSidenavStatus() {
    if (this.sidenavStatus === 'closed') {
      this.sidenavStatus = 'opened';
    } else if (this.sidenavStatus === 'opened') {
      this.sidenavStatus = 'closed';
    }
  }

}
