import { Injectable } from '@angular/core';
import { CleanSweep } from './clean-sweep';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DataService {
  cleanSweeps: FirebaseListObservable<Array<CleanSweep>>;

  constructor(af: AngularFire) {
    this.cleanSweeps = af.database.list('/cleanSweeps');
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
  // deleteEverything() {
  //   this.cleanSweeps.remove();
  // }

}
