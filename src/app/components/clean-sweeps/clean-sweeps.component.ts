import { Component, OnInit } from '@angular/core';
// import {AddCleanSweepComponent} from '../add-clean-sweep/add-clean-sweep.component';
// import {ManageCleanSweepComponent} from '../manage-clean-sweep/manage-clean-sweep.component';
@Component({
  selector: 'app-clean-sweeps',
  templateUrl: 'clean-sweeps.component.html',
  styleUrls: ['clean-sweeps.component.scss'],
})
export class CleanSweepsComponent implements OnInit {
  showAddNew = false;

  constructor() { }

  ngOnInit() {
  }
  eventsReceived(event) {
    if (['added', 'cancelled'].indexOf(event) > -1) {
      this.showAddNew = false;
    }

  }

}
