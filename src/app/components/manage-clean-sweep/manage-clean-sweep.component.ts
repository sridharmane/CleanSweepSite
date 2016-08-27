import { Component, OnInit, NgZone, ViewChildren, QueryList} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FirebaseListObservable } from 'angularfire2';
import { StreetNamesPipe } from '../../pipes/street-names.pipe';
import { CategorizeByDatePipe } from '../../pipes/categorize-by-date.pipe';
import { MonthNamesPipe } from '../../pipes/month-names.pipe';
import { MdMenuTrigger } from '@angular2-material/menu';


@Component({
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.scss'],
  pipes: [StreetNamesPipe, CategorizeByDatePipe, MonthNamesPipe]
})
export class ManageCleanSweepComponent implements OnInit {
  // @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  cleanSweeps: FirebaseListObservable<any[]>;
  currentKey: string = '';


  constructor(ds: DataService, private nz: NgZone) {
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

}
