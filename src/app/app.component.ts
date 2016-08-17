// import { Component } from '@angular/core';
import { Component} from '@angular/core';
import { DataService } from './data.service';
import {GeocodingService} from './geocoding.service';
import { CleanSweep } from './clean-sweep';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  streetAddresses: Array<any>;

  cleanSweep: Array<CleanSweep>;
  constructor() {

  }
  // constructor(private gs: GeocodingService, private ds: DataService) {
  //   gs.streetAddresses.subscribe((sa) => {
  //     this.streetAddresses = sa;
  //     console.log(sa);
  //   });
  // }

}
