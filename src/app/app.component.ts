import { Component} from '@angular/core';
import { HomeComponent } from './components/home';
import { CleanSweepsComponent } from './components/clean-sweeps';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import { AuthService } from './services';
import { UserData, AUTH_STATES } from './types';
import { FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import 'hammerjs';
import * as firbase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})


export class AppComponent {
  title = 'Home';
  sidenavOpened: boolean = true;
  isLoading: boolean = true;
  authData: FirebaseAuthState = null;
  userData: UserData = null;

  pages = [
    {
      title: 'Home',
      component: HomeComponent,
      routerLink: 'home'
    },
    {
      title: 'Clean Sweeps',
      component: CleanSweepsComponent,
      routerLink: 'cleansweeps'
    },
    {
      title: 'Partners',
      component: PartnersComponent,
      routerLink: 'partners'
    },
    {
      title: 'Partner Categories',
      component: PartnerCategoriesComponent,
      routerLink: 'partner-categories'
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
  logout(){
    this.authService.logout();
  }

}
