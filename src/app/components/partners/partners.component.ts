import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Partner } from '../../types/partner';
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-partners',
  templateUrl: 'partners.component.html',
  styleUrls: [
    'partners.component.scss'
  ]
})
export class PartnersComponent implements OnInit {
  partners: FirebaseListObservable<any[]>;
  partnerCategories: any[];
  newCat: string = '';

  newPartner: Partner;

  constructor(private ds: DataService) {
    // this.partners = ds.partners.subscribe((partners) => {
    //   // console.log(partners);
    //   this.partners = partners;
    // });
    this.partners = ds.partners;
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
