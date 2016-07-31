import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { DataService } from './app/data.service';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: 'AIzaSyBhyEI4oMWsqGK_Jb81q9Sbm7YTZwfnikg',
    authDomain: 'cleansweep-f63d0.firebaseapp.com',
    databaseURL: 'https://cleansweep-f63d0.firebaseio.com',
    storageBucket: '',
  }),
  DataService,
  //Forms provider
  disableDeprecatedForms(),
  provideForms()
]);
