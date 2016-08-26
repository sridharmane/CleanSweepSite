import { Injectable } from '@angular/core';
import { CleanSweep } from '../types/clean-sweep';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Partner } from '../types/partner';

@Injectable()
export class DataService {
  cleanSweeps: FirebaseListObservable<any[]>;
  partners: FirebaseListObservable<any[]>;
  partnerCategories: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.cleanSweeps = af.database.list('/cleanSweeps');
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

}

