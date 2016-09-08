import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Partner} from '../../types/partner';

@Component({
  selector: 'app-partner-categories',
  templateUrl: 'partner-categories.component.html',
  styleUrls: ['partner-categories.component.scss']
})
export class PartnerCategoriesComponent implements OnInit {
  partners: any[];
  partnerCategories: any;
  newCat: string = '';

  newPartner: Partner;

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
