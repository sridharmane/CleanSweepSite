import { Component, OnInit } from '@angular/core';
import { ManageCleanSweepComponent } from '../manage-clean-sweep/manage-clean-sweep.component';
import { CreateCleanSweepComponent } from '../create-clean-sweep/create-clean-sweep.component';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-tabs-clean-sweep',
  directives: [ ManageCleanSweepComponent, CreateCleanSweepComponent, MD_TABS_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdIcon ],
  providers: [ MdIconRegistry ],
  templateUrl: 'tabs-clean-sweep.component.html',
  styleUrls: ['tabs-clean-sweep.component.css']
})
export class TabsCleanSweepComponent implements OnInit {

  private createCleanSweepComponent: any;
  private manageCleanSweepComponent: any;

  tabs = [
    {
      title: 'test 1',
      component: CreateCleanSweepComponent
    },
    {
      title: 'test 2',
      component: ManageCleanSweepComponent
    }
  ];

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.createCleanSweepComponent = CreateCleanSweepComponent;
    this.manageCleanSweepComponent = ManageCleanSweepComponent;
  }

  ngOnInit() {
  }

}
