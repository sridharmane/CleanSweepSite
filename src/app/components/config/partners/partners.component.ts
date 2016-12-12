import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { PartnerComponent } from '../partner';
import { Partner } from '../../../types';
import { FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners: FirebaseListObservable<any[]>;
  partnerCategories: FirebaseListObservable<any[]>;

  showForm: boolean = false;
  dialogRef: MdDialogRef<PartnerComponent>;

  addPartnerForm: FormGroup;
  keys: FormArray;

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private dialog: MdDialog
  ) {
    this.partners = ds.partners;
    this.partnerCategories = ds.partnerCategories;

    // Create the form
    this.addPartnerForm = this.fb.group({
      name: '',
      category: '',
      keys: this.buildKeyssArray()
    });
  }

  showPartnerDialog() {
    this.dialogRef = this.dialog.open(PartnerComponent);
  }

  addPartner(partner: Partner) {
    console.log(partner);
    this.ds.addPartner(partner);
  }
  updatePartner(partnerId: string) {
    // this.ds.updatePartner(partnerId);
  }
  deletePartner(partnerId: string) {
    // this.ds.deletePartner(partnerId);
  }


  buildKey() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      nameFull: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
    });
  }

  buildKeyssArray(): FormArray {
    this.keys = this.fb.array([
      this.buildKey()
    ]);
    return this.keys;
  }
  addKey() {
    this.keys.push(
      this.buildKey()
    );
  }

  removeKey(index: number) {
    this.keys.removeAt(index);
  }

  showAddForm() {
    this.showForm = true;
  }
  cancelAddForm() {
    this.addPartnerForm.reset();
    this.showForm = false;
  }

}
