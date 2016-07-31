import { Component, OnInit } from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
@Component({
  moduleId: module.id,
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.css'],
  directives: [ MD_TOOLBAR_DIRECTIVES, MD_TABS_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class ManageCleanSweepComponent implements OnInit {

  tabs = [
    { label: 'Create New', content: 'This is the body of the first tab' },
    { label: 'Edit', content: 'This is the body of the second tab' }
  ];

  constructor() {

  }


  ngOnInit() {
  }
}
