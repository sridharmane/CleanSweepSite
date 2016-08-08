import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PartnerData } from '../partner';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-partner-categories',
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  providers: [MdIconRegistry],
  pipes: [],
  templateUrl: 'partner-categories.component.html',
  styleUrls: ['partner-categories.component.css']
})
export class PartnerCategoriesComponent implements OnInit {
  partners: any[];
  partnerCategories: any;
  newCat: string = '';

  newPartner: PartnerData;

  constructor(private ds: DataService) {
    ds.partners.subscribe((partners) => {
      // console.log(partners);
      this.partners = partners;
    });
    ds.partnerCategories.subscribe((partnerCategories) => {
      console.log('PC', partnerCategories);
      this.partnerCategories = partnerCategories;
    });
    this.initNewPartner();
  }

  addCategory() {
    this.ds.addPartnerCategory(this.newCat);
    // this.partnerCategories.push(this.newCat);
    console.log(this.partnerCategories);
  }

  ngOnInit() {
  }
  addPartner(): void {
    this.ds.addPartner(this.newPartner);
  }
  cancelPartner(): void {
    this.initNewPartner();
  }
  initNewPartner() {
    this.newPartner = {
      name: '',
      category: '',
      keys: [
        {
          name: '',
          name_full: '',
          visible: true
        }
      ]
    };
  }
  addKey(): void {
    this.newPartner.keys.push({
      name: '',
      name_full: '',
      visible: true
    });
  }


}
