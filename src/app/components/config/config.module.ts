
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PipesModule } from '../../pipes';
import { DialogsModule } from '../dialogs';

import { ConfigComponent } from './config.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerCategoriesComponent } from './partner-categories/partner-categories.component';


// Route Configuration
const cleanSweepsRoutes: Routes = [
    {
        path: '',
        component: ConfigComponent,
        // children: [
        //     { path: 'partners', component: PartnerCategoriesComponent },
        //     { path: 'partner-categories', component: PartnerCategoriesComponent }
        // ]
    },

];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PipesModule,
        RouterModule.forChild(cleanSweepsRoutes),
        DialogsModule
    ],
    declarations: [
        ConfigComponent,
        PartnerComponent,
        PartnersComponent,
        PartnerCategoriesComponent
    ],
    entryComponents: [
        ConfigComponent,
        PartnerComponent,
        PartnersComponent,
        PartnerCategoriesComponent
    ],
    providers: [],
    exports: [
        ConfigComponent,
        PartnersComponent,
        PartnerCategoriesComponent
    ]
})
export class ConfigModule { };
