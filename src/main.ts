import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: 'AIzaSyBhyEI4oMWsqGK_Jb81q9Sbm7YTZwfnikg',
    authDomain: 'cleansweep-f63d0.firebaseapp.com',
    databaseURL: 'https://cleansweep-f63d0.firebaseio.com',
    storageBucket: '',
  })
]);
