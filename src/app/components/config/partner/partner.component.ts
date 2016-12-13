import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { DataService } from '../../../services/data.service';
import { MdDialog } from '@angular/material';
import { IPartner } from '../../../types';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
    partners: FirebaseListObservable<any[]>;
    partnerCategories: FirebaseListObservable<any[]>;

    partnerForm: FormGroup;
    keys: FormArray;
    mode: string = null;

    constructor(

        private af: AngularFire,
        private ds: DataService,
        private fb: FormBuilder,
        private dialog: MdDialog
    ) {

        this.partners = this.ds.partners;
        this.partnerCategories = ds.partnerCategories;

        // Create the form
        this.partnerForm = this.fb.group({
            name: '',
            category: '',
            keys: this.buildKeyssArray()
        });
    }
    add(partner: IPartner) {
        // Add the notes key by default to any Partner.
        partner.keys.push({
            name: 'notes',
            name_full: 'notes',
            visible: false
        });
        this.partners.push(partner);
    }
    update(partnerId: string) {
        const partner = this.af.database.object(`/partners/${partnerId}`);
        console.log(partner);

    }
    delete(partnerId: string) {
        this.partners.remove(partnerId).then(s => {
            console.log('Deleted Partner', s);
        }, e => {
            console.log('Deleted Partner', e);
        });
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

    cancel() {
        // this.addPartnerForm.reset();
        this.dialog.closeAll();
    }
    getMode() {
        return this.mode.charAt(0).toUpperCase() + this.mode.substr(1);
    }

}
