import { Component, OnInit, NgZone, Output, EventEmitter} from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';
import { FirebaseListObservable } from 'angularfire2';
import { CleanSweepEventData } from '../../../types/clean-sweep-event-data';


@Component({
  selector: 'app-list-clean-sweeps',
  templateUrl: 'list-clean-sweeps.component.html',
  styleUrls: ['list-clean-sweeps.component.scss'],
})
export class ListCleanSweepsComponent implements OnInit {
  // @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  cleanSweeps: FirebaseListObservable<any[]>;
  currentKey: string = '';
  @Output() cleanSweepEvents = new EventEmitter<CleanSweepEventData>();

  constructor(ds: DataService, private nz: NgZone, private dt: DateTimeService) {
    this.cleanSweeps = ds.cleanSweeps;

    // this.cleanSweeps.subscribe(() => {
    // this.triggers.changes.subscribe((data) => {
    //   console.log(data._results);
    //   data._results.forEach((item:MdMenuTrigger) => {
    //     // item.
    //     item.onMenuClose.subscribe((data) => {
    //       console.log('Closed, Got Data: ', data);

    //     });
    //   });
    // });
    // });

  }


  // delete(key: string) {

  // }
  selectedMenu(key) {
    console.log(key);
    this.currentKey = key;
  }
  edit() {
    console.log('edit: ', this.currentKey);
    this.cleanSweepEvents.emit({ component: 'editCleanSweepComponent', visible: true });

  }
  delete() {
    console.log('delete: ', this.currentKey);
    // this.cleanSweeps.remove(key);
    // this.nz.run(() => {
    //   console.log('Reloading !');
    // });
  }
  ngOnInit() {

    // if (this.trigger) {
    //   this.trigger.onMenuClose.subscribe((data) => {
    //     console.log(data);
    //   });
    // }
  }
  getOrdinalFromDate(date: string): string {
    return this.dt.getDayWithOrdinal(date).slice(-2);
  }
  getDayFromDate(date: string): string {
    return this.dt.getDayWithOrdinal(date).slice(0, -2);
  }
}
