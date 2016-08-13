import { Component, OnInit, Inject} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.css']
})
export class ManageCleanSweepComponent implements OnInit {

  cleanSweeps: any;

  constructor(@Inject(DataService) ds: DataService) {
    ds.cleanSweeps.subscribe((cleanSweeps) => {
      this.cleanSweeps = cleanSweeps;
    });
  }


  ngOnInit() {
  }
}
