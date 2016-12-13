import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IPartner } from '../../../types';

@Component({
  selector: 'app-partner-categories',
  templateUrl: './partner-categories.component.html',
  styleUrls: ['./partner-categories.component.scss']
})
export class PartnerCategoriesComponent implements OnInit {
  partners: any[];
  partnerCategories: any;
  newCat: string = '';


  constructor(private ds: DataService) {
    ds.partners.subscribe((partners) => {
      // console.log(partners);
      this.partners = partners;
    });
    ds.partnerCategories.subscribe((partnerCategories) => {
      console.log('PC', partnerCategories);
      this.partnerCategories = partnerCategories;
    });

  }

  addCategory() {
    this.ds.addPartnerCategory(this.newCat);
    // this.partnerCategories.push(this.newCat);
    console.log(this.partnerCategories);
  }

  ngOnInit() {
  }



}
