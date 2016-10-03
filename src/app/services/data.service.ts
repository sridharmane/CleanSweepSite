import { Injectable } from '@angular/core';
import { CleanSweep } from '../types/clean-sweep';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Partner } from '../types/partner';
import { UserData } from '../types/user-data';
import {Subject} from 'rxjs/Subject';

const PAGINATION_SIZE = 2;

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
    this.cleanSweeps.push(cleanSweep);
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
  addPartner(pd: Partner) {
    pd.keys.push({
      name: 'notes',
      name_full: 'notes',
      visible: false
    });
    this.partners.push(pd);
    console.log(pd);
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

  getUserDetails(userId: string) {
    this.user = this.af.database.object('/users/', userId);
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

