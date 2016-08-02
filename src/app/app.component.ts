// import { Component } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, QueryList} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// import {MVPService} from '../mvp.service'
import {MD_MENU_DIRECTIVES} from '@angular2-material/menu';


import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import {GeocodingService} from './geocoding.service';
import { CleanSweep } from './clean-sweep';
import { DataService } from './data.service';

import { TabsCleanSweepComponent } from './tabs-clean-sweep/tabs-clean-sweep.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [MdIcon,MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_MENU_DIRECTIVES, TabsCleanSweepComponent],
  providers: [MdIconRegistry, GeocodingService],
})


export class AppComponent {
  title = 'app works!';
  streetAddresses: Array<any>;

  cleanSweep: Array<Promise<CleanSweep>>;

  constructor(gs: GeocodingService, ds: DataService) {
    gs.streetAddresses.subscribe((sa) => {
      this.streetAddresses = sa;
      console.log(sa);
    });
  }

}
