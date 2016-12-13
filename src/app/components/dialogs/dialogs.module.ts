import { NgModule } from '@angular/core';
import { MdDialogModule } from '@angular/material';
import { DialogsDirective } from './dialogs.directive';

@NgModule({
    imports: [
        MdDialogModule
    ],
    declarations: [
        DialogsDirective
    ], exports: [
        DialogsDirective
    ],
    providers: [

    ],
    entryComponents: [
    ],
})
export class DialogsModule {

}
