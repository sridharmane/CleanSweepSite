import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.scss']
})
export class ManageCleanSweepComponent implements OnInit {

  cleanSweeps: FirebaseListObservable<any[]>;



  constructor(ds: DataService) {
    this.cleanSweeps = ds.cleanSweeps;
  }

  delete(key: string) {
    this.cleanSweeps.remove(key);
  }

  ngOnInit() {
  }
}
