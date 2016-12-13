import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PartnerComponent } from '../config/partner';
import { PartnerCategoriesComponent } from '../config/partner-categories';

@Directive({
  selector: '[appDialogs]'
})
export class DialogsDirective implements OnInit {
  @Input('dialogType') dialogType;
  @Input('dialogMode') dialogMode;



  constructor(private dialog: MdDialog) {
  }
  ngOnInit() {
    console.log('Dialog Type', this.dialogType);
    console.log('Dialog Mode', this.dialogMode);
  }

  dismiss() {
    this.dialog.closeAll();
  }

  @HostListener('click', ['$event'])
  openDialog(event) {
    let dialogRef: MdDialogRef<any> = null;
    if (this.dialogType === 'partner') {
      dialogRef = this.dialog.open(PartnerComponent);
    } else if (this.dialogType === 'partnerCategories') {
      dialogRef = this.dialog.open(PartnerCategoriesComponent);
    }
    dialogRef.componentInstance.mode = this.dialogMode;

  }

}
