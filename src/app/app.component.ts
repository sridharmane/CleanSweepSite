// import { Component } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, QueryList} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// import {MVPService} from '../mvp.service'
import { MD_MENU_DIRECTIVES } from '@angular2-material/menu';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';

import { MdToolbar } from '@angular2-material/toolbar/toolbar';

import {GeocodingService} from './geocoding.service';
import { CleanSweep } from './clean-sweep';
import { DataService } from './data.service';

import { AddCleanSweepComponent } from './add-clean-sweep/add-clean-sweep.component';
import { ManageCleanSweepComponent } from './manage-clean-sweep/manage-clean-sweep.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerCategoriesComponent } from './partner-categories/partner-categories.component';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [
    MdIcon, MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdToolbar,
    MD_TOOLBAR_DIRECTIVES,
    MD_MENU_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    AddCleanSweepComponent,
    ManageCleanSweepComponent,
    PartnersComponent,
    PartnerCategoriesComponent
  ],
  providers: [
    MdIconRegistry,
    GeocodingService
  ],
})


export class AppComponent {
  title = 'app works!';
  streetAddresses: Array<any>;

  cleanSweep: Array<Promise<CleanSweep>>;

  constructor(private gs: GeocodingService, private ds: DataService) {
    gs.streetAddresses.subscribe((sa) => {
      this.streetAddresses = sa;
      console.log(sa);
    });
  }

  // addPartner() {
  //   this.ds.addPartner({
  //     name: 'Fire Brigade',
  //     category: 'Safety',
  //     keys: [
  //       {
  //         name: 'CR',
  //         name_full: 'Care Referrals'
  //       },
  //       {
  //         name: 'FC',
  //         name_full: 'Fire Check'
  //       }
  //     ]
  //   });
  // }

}
