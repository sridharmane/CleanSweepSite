import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MdDialog } from '@angular/material';
import { Partner } from '../../../types';
import { FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
    partners: FirebaseListObservable<any[]>;
    partnerCategories: FirebaseListObservable<any[]>;

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

    cancelAddForm() {
        // this.addPartnerForm.reset();
        this.dialog.closeAll();
    }

}
