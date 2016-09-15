import { Component} from '@angular/core';
import { HomeComponent } from './components/home';
import { CleanSweepsComponent } from './components/clean-sweeps';
import { PartnersComponent } from './components/partners';
import { PartnerCategoriesComponent } from './components/partner-categories';
import { AuthService } from './services/auth.service';
import { UserData } from './types/user-data';
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
  streetAddresses: Array<any>;
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
  constructor(private authService: AuthService) {
    this.authService.authEvents.subscribe((event) => {
      console.log(event.type, event.userData);
      this.userData = event.userData;
    });
    // this.currentUser = new User({});
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
