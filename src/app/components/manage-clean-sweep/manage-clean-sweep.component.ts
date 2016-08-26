import { Component, OnInit, NgZone} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FirebaseListObservable } from 'angularfire2';
import { StreetNamesPipe } from '../../pipes/street-names.pipe';
import { CategorizeByDatePipe } from '../../pipes/categorize-by-date.pipe';
import { MonthNamesPipe } from '../../pipes/month-names.pipe';


@Component({
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.scss'],
  pipes: [StreetNamesPipe, CategorizeByDatePipe, MonthNamesPipe]
})
export class ManageCleanSweepComponent implements OnInit {

  cleanSweeps: FirebaseListObservable<any[]>;



  constructor(ds: DataService, private nz: NgZone) {
    this.cleanSweeps = ds.cleanSweeps;
  }

  delete(key: string) {
    this.cleanSweeps.remove(key);
    this.nz.run(() => {
      console.log('Reloading !');
    });
  }

  ngOnInit() {
  }
}
