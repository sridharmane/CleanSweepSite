import { Component, OnInit, NgZone, Output, EventEmitter} from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';
import { FirebaseListObservable } from 'angularfire2';
import { CleanSweepEventData } from '../../../types/clean-sweep-event-data';

const ORDER_ASCENDING = 'ascending';
const ORDER_DESCENDING = 'descending';

@Component({
  selector: 'app-list-clean-sweeps',
  templateUrl: './list-clean-sweeps.component.html',
  styleUrls: ['./list-clean-sweeps.component.scss'],
})
export class ListCleanSweepsComponent implements OnInit {
  // @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  cleanSweeps: FirebaseListObservable<any[]>;
  cleanSweepsSubscription: any;
  currentKey: string = '';
  pagesLoaded: number = 1;
  @Output() cleanSweepEvents = new EventEmitter<CleanSweepEventData>();

  order = ORDER_DESCENDING;

  constructor(private ds: DataService, private nz: NgZone, private dt: DateTimeService) {
    this.cleanSweeps = ds.cleanSweeps;
    this.cleanSweeps.subscribe(data => {
      console.log('Clean Sweep List data: ', data);

    });


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

  loadMore() {
    this.pagesLoaded++;
    this.ds.loadNext10CleanSweeps(this.pagesLoaded);
  }

  toggleOrder() {
    if (this.order === ORDER_ASCENDING) {
      this.order = ORDER_DESCENDING;
    } else if (this.order === ORDER_DESCENDING) {
      this.order = ORDER_ASCENDING;
    }
  }
}
