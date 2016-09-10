import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { UserData } from '../types/user-data';

export class User {
  email: string;
  name: string;
  type: string;
  password: string
  constructor(userData: UserData) {
    if (userData.email) {
      this.email = userData.email;
    }
    if (userData.name) {
      this.name = userData.name;
    }
  }
}

@Injectable()
export class AuthService {
  currentUser: User = null;
  constructor(private af: AngularFire) {

  }

  login(email: string, password: string): any {
    let credentials = {
      email: email,
      password: password
    }
    this.af.auth.login(credentials).then(authData => {
      console.log('Login Success: ', authData);
    }).catch(error => {
      console.log('Login Error', error);
    });
  }

  register(userData: UserData) {
    this.af.auth.createUser({
      email: userData.email,
      password: userData.password
    }).then(authData => {
      console.log('Registration Success: ', authData);
    }).catch(error => {
      console.log('Registration Error', error);
    });
   
  }
  getCurrentUser(): User {
    return this.currentUser;
  }
  setCurrentUser(userData: UserData) {
    this.currentUser = new User(userData);
    return this.currentUser;
  }

}
