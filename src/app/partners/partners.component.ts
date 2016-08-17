import {Component, OnInit, Inject} from '@angular/core';
import {DataService} from '../data.service';
import {PartnerKeysPipe} from '../partner-keys.pipe';
import {PartnerCategoriesPipe} from '../partner-categories.pipe';
import {PartnerData} from '../partner';


@Component({
  selector: 'app-partners',
  pipes: [PartnerKeysPipe, PartnerCategoriesPipe],
  templateUrl: 'partners.component.html',
  styleUrls: ['partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners: any[];
  partnerCategories: any[];
  newCat: string = '';

  newPartner: PartnerData;

  constructor(@Inject(DataService) private ds: DataService) {
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
