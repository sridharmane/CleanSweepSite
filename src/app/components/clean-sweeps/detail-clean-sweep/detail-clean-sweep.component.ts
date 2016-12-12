import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';

import { CleanSweep } from '../../../types/clean-sweep';
import { CleanSweepEventData } from '../../../types/clean-sweep-event-data';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-clean-sweep',
  templateUrl: './detail-clean-sweep.component.html',
  styleUrls: ['./detail-clean-sweep.component.scss'],
  providers: [DateTimeService],
  // directives: [FormGroup, FormControlName]
})
export class DetailCleanSweepComponent implements OnInit {

  @Output() cleanSweepEvents = new EventEmitter<CleanSweepEventData>();

  addCleanSweepForm: FormGroup;
  date: string;
  startTime: string = '09:00 am';
  endTime: string = '04:00 pm';
  streets: FormArray;

  constructor(private ds: DataService, private dts: DateTimeService, private router: Router,
    private currentRoute: ActivatedRoute) {


    this.currentRoute.params.subscribe(routeParams => {
      console.log('Route Params', routeParams);
      this.getCleanSweep(routeParams['id']);
    });

  }
  ngOnInit() {
  }
  getLastCleanSweepNumber() {
    // this.ds.getCleanSweep({});
  }
  getCleanSweep(key: string) {
    console.log('Getting CS with Key:', key);

    this.ds.getCleanSweep(key);
  }

}
