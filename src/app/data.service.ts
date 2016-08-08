import { Injectable } from '@angular/core';
import { CleanSweep } from './clean-sweep';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {PartnerData } from './partner';

@Injectable()
export class DataService {
  cleanSweeps: FirebaseListObservable<Array<CleanSweep>>;
  partners: FirebaseListObservable<Array<any>>;
  partnerCategories: FirebaseListObservable<Array<any>>;

  constructor(af: AngularFire) {
    this.cleanSweeps = af.database.list('/cleanSweeps');
    this.partners = af.database.list('/partners');
    this.partnerCategories = af.database.list('/partnerCategories');
  }
  createCleanSweep(newName: string) {
    this.cleanSweeps.push({ text: newName });
  }
  updateCleanSweep(key: string, newSize: string) {
    this.cleanSweeps.update(key, { size: newSize });
  }
  deleteCleanSweep(key: string) {
    this.cleanSweeps.remove(key);
  }
  addPartner(pd: PartnerData) {
    pd.keys.push({
      name: 'notes',
      name_full: 'notes',
      visible: false
    });
    this.partners.push(pd);
    console.log(pd);
  }
  addPartnerCategory(pc: string){
    this.partnerCategories.push(pc);
  }
  // deleteEverything() {
  //   this.cleanSweeps.remove();
  // }

}

