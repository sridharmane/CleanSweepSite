import { NgModule }       from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { StreetNamesPipe } from './street-names.pipe';
import { CategorizeByDatePipe } from './categorize-by-date.pipe';
import { MonthNamesPipe } from './month-names.pipe';
import { PartnerKeysPipe } from './partner-keys.pipe';
import { PartnerCategoriesPipe } from './partner-categories.pipe';

@NgModule({
    imports: [
        // BrowserModule
    ],
    exports:[
        StreetNamesPipe,
        CategorizeByDatePipe,
        MonthNamesPipe,
        PartnerKeysPipe,
        PartnerCategoriesPipe
    ],
    declarations: [
        StreetNamesPipe,
        CategorizeByDatePipe,
        MonthNamesPipe,
        PartnerKeysPipe,
        PartnerCategoriesPipe
    ],
    providers: [
        // CleanSweepsService
    ]
})
export class PipesModule { }