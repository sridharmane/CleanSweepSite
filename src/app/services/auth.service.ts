import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { User } from '../types/user';
import { UserData } from '../types/user-data';
import { AuthEventData } from '../types/auth-event-data';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  userData: UserData = null;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  authEvents: EventEmitter<AuthEventData> = new EventEmitter();

  constructor(private af: AngularFire, private ds: DataService, private router: Router, private cs: CookieService) {
    if (this.getAuthCookie()) {
      console.log(this.getAuthCookie());
      this.isLoggedIn = true;
    }else {
      console.log('No Auth Cookie Found');
    }

  }

  login(email: string, password: string): any {
    return new Promise((resolve, reject) => {
      let credentials = {
        email: email,
        password: password
      }
      this.af.auth.login(credentials).then(authData => {
        console.log('Login Success: ', authData);
        // Set the Cookie
        this.setAuthCookie(authData);

        this.isLoggedIn = true;
        resolve(authData);
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        } else {
          this.router.navigate(['/home']);
        }
        this.authEvents.emit({
          type: 'login',
          userData: this.userData
        });
        // return this.isLoggedIn;

      }).catch(error => {
        console.log('Login Error', error);
        this.isLoggedIn = false;
        reject(error);
        // return this.isLoggedIn;
      });
      // return new Observable(resolve=>{

      // });
      // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    });
  }

  register(userData: UserData) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('test');
        observer.error(new Error('error'));
      }, 1000);

      observer.next({
        message: 'Creating Account'
      });
      this.af.auth.createUser({
        email: userData.email,
        password: userData.password
      }).then(authData => {
        observer.next({
          data: authData,
          message: 'Account created'
        });

        // Set the Cookie
        this.setAuthCookie(authData);

        userData.uid = authData.uid;
        observer.next({
          data: authData,
          message: 'Setting up profile'
        });
        this.ds.setUserDetails(userData).subscribe(firebaseUserObj => {
          observer.next({
            data: firebaseUserObj,
            message: 'Profile created'
          });

          this.userData = firebaseUserObj;
          this.authEvents.emit({
            type: 'register',
            userData: this.userData
          });


        }, error => {
          console.log('User Data Save Error: ', error);
          observer.error(error);
        });

      }).catch(error => {
        console.log('Registration Error', error);
        observer.error(error);
      });


    });

    // return new Promise((resolve, reject) => {

    // });
  }

  // getCurrentUser(): User {
  //   return this.currentUser;
  // }
  // setCurrentUser(userData: UserData) {
  //   this.currentUser = new User(userData);
  //   return this.currentUser;
  // }



  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
    this.clearAuthCookie();
    console.log('Log Off Done !');
  }

  setAuthCookie(auth: any) {
    console.log('Setting Auth Cookie', auth);

    this.cs.putObject('cleanSweepAuth', auth);
  }
  getAuthCookie(): any {
    return this.cs.getObject('cleanSweepAuth');

  }
  clearAuthCookie() {
    this.cs.remove('cleanSweepAuth');
  }
}
