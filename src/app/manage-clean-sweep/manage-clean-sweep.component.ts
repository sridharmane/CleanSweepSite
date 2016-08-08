import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-manage-clean-sweep',
  templateUrl: 'manage-clean-sweep.component.html',
  styleUrls: ['manage-clean-sweep.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    FORM_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry]
})
export class ManageCleanSweepComponent implements OnInit {

  cleanSweeps: any;

  constructor(ds: DataService) {
    ds.cleanSweeps.subscribe((cleanSweeps) => {
      this.cleanSweeps = cleanSweeps;
    });
  }


  ngOnInit() {
  }
}
