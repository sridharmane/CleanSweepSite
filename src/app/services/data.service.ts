import { Injectable } from '@angular/core';
import { CleanSweep } from '../types/clean-sweep';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { IPartner } from '../types/partner';
import { UserData } from '../types/user-data';
import { Subject } from 'rxjs/Subject';

const PAGINATION_SIZE = 2;

@Injectable()
class FBUser {
  _userObj: FirebaseObjectObservable<any>;
  user: any;

  constructor(private af: AngularFire, private uid: string) {
    this._userObj = this.af.database.object('/users');
    this._userObj.subscribe(user => {
      this.user = user;
    });
  }

  // Name
  public get name(): string | null {
    if (this.user) {
      return this.user[this.uid].name;
    }
    return null;
  }
  public set name(name: string) {
    this._userObj.set({
      name: name
    });
  }

  // Email
  public get email(): string | null {
    if (this.user) {
      return this.user[this.uid].email;
    }
    return null;

  }
  public set email(email: string) {
    this._userObj.set({
      email: email
    });
  }

  public get type(): string | null {
    if (this.user) {
      return this.user[this.uid].type;
    }
    return null;
  }
  public set type(type: string) {
    this._userObj.set({
      type: type
    });
  }




}

@Injectable()
export class DataService {
  cleanSweeps: FirebaseListObservable<any[]>;
  partners: FirebaseListObservable<any[]>;
  partnerCategories: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;

  cleanSweepPageNumber = new Subject();

  constructor(private af: AngularFire) {
    this.cleanSweeps = af.database.list('/cleanSweeps', {
      query: {
        limitToLast: this.cleanSweepPageNumber,
        orderByChild: 'date',
      }
    });
    this.partners = af.database.list('/partners');
    this.partnerCategories = af.database.list('/partnerCategories');
  }
  createCleanSweep(cleanSweep: CleanSweep) {
    return new Promise((resolve, reject) => {
      this.cleanSweeps.push(cleanSweep).then(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });

  }
  updateCleanSweep(key: string, newSize: string) {
    this.cleanSweeps.update(key, { size: newSize });
  }
  deleteCleanSweep(key: string) {
    this.cleanSweeps.remove(key);
  }
  loadNext10CleanSweeps(pageNumber: number) {
    console.log(`Loading from# ${pageNumber * PAGINATION_SIZE}`);
    this.cleanSweepPageNumber.next(pageNumber * PAGINATION_SIZE);

    // this.cleanSweeps = this.af.database.list('/cleansweeps', {
    //   query: {
    //     startAt: pageNumber * PAGINATION_SIZE,
    //     limitToLast: PAGINATION_SIZE,
    //     orderByChild: 'date'
    //   }
    // });
    // console.log('New List', this.cleanSweeps);

  }

  addPartnerCategory(pc: string) {
    this.partnerCategories.push(pc);
  }
  // deleteEverything() {
  //   this.cleanSweeps.remove();
  // }
  getCleanSweep(filters?: any) {
    const list = this.af.database.list('/cleanSweeps', {
      query: {
        orderByChild: 'date'
      }
    });

    console.log('Got Clean Sweeps');
    list.subscribe((data) => {
      console.log(data);
    });
  }

  getUserDetails(uid: string): FirebaseObjectObservable<any> {
    console.log('Getting user with uid:', uid);

    this.user = this.af.database.object('/users/', uid);

    let user = new FBUser(this.af, uid);
    console.log('USER', user);
    return this.user;
  }
  setUserDetails(userData: UserData) {
    this.user = this.af.database.object('/users/' + userData.uid);
    this.user.set({
      name: userData.name,
      email: userData.email,
      type: userData.type
    });
    return this.user;
  }

}

