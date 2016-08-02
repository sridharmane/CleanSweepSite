import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
@Component({
  moduleId: module.id,
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.css'],
  directives: [ FORM_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class ManageCleanSweepComponent implements OnInit {

  tabs = [
    {
      label: 'Create New',
      content: `
    <form>
      <md-input name="test" placeholder="Tab Label" [(ngModel)]="tab.label"></md-input>
    </form>
    ` },
    { label: 'Edit', content: 'This is the body of the second tab' }
  ];

  constructor() {

  }


  ngOnInit() {
  }
}
